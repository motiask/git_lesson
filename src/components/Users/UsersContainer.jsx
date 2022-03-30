import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, setCurrentPageCreator, setTotalUsersCountCreator, setUsersCreator, unfollowActionCreator } from '../../redux/users-reduser';
//import Users from './Users';
import Users from './UsersClass';

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


export default connect(mapStateToProps, mapDispatchToProps)(Users);