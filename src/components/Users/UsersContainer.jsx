import React from 'react';
import { connect } from 'react-redux';
import { follow, setTotalUsersCount, unfollow, toggleFollowingProgress, getUsersThunkCreator } from '../../redux/users-reduser';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


class UsersClassContainer extends React.Component {

    //-54-метод вмонтировать. Используется из react
    componentDidMount() {
        this.props.getUsersCallBack(this.props.currentPage, this.props.pageSize);
        /*-66 thunk
           this.props.toggleIsFetching(true);
           usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
               this.props.setUsers(data.items);
               this.props.setTotalUsersCount(data.totalCount);
               this.props.toggleIsFetching(false);
           });*/
    }

    //-мой метод, 
    onPageChanged = (pageNamber) => {
        this.props.getUsersCallBack(pageNamber, this.props.pageSize);
        /*-66 thunk
        this.props.setCurrentPage(pageNamber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNamber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);
        });*/
    }

    // Используется из react
    render() {
        return <>
            {this.props.isFetching ?
                <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                selectedPage={this.props.selectedPage}
                usersData={this.props.usersData}
                followingInProgress={this.props.followingInProgress}

                //callback этого класса
                onPageChanged={this.onPageChanged}
                //callback из props/ dispatch
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                /*-66-thunk
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                */
            />
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

/*-58-пускай redux сам создает callback
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageCreator(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountCreator(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingCreator(isFetching))
        }

    }

}
*/
/*-58- вместо записи 
follow:followActionCreator, - но тогда нужна одинаковое название
*/

let mapDispatchToProps = {
    follow,
    unfollow,
    setTotalUsersCount,
    /*-66 thunk 
    setUsers,
    setCurrentPage,
    toggleIsFetching, */
    toggleFollowingProgress,
    //thunk
    getUsersCallBack: getUsersThunkCreator
}

//-70
export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(UsersClassContainer)

/*-70
let withRedirect = withAuthRedirect(UsersClassContainer)

export default connect(mapStateToProps, mapDispatchToProps)(withRedirect);
*/
