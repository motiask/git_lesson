import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, setCurrentPageCreator, setTotalUsersCountCreator, setUsersCreator, unfollowActionCreator } from '../../redux/users-reduser';
import Users from './Users';
import * as axios from 'axios';

class UsersClassContainer extends React.Component {

    //-54-метод вмонтировать. Используется из react
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    //-мой метод, 
    onPageChanged = (pageNamber) => {
        this.props.setCurrentPage(pageNamber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    // Используется из react
    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            selectedPage={this.props.selectedPage}
            usersData={this.props.usersData}

            //callback этого класса
            onPageChanged={this.onPageChanged}
            //callback из props/ dispatch
            unfollow={this.props.unfollow}
            follow={this.props.follow} />
    }

}

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

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
        }

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersClassContainer);