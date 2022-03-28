import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, setUsersCreator, unfollowActionCreator } from '../../redux/users-reduser';
import Users from './Users';

let mapStateToProps = (state) => {
    debugger
    return {
        usersData: state.usersPage.usersData
    }
}

let mapDispatchToProps = (dispatch) => {
    debugger
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users))
        }

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Users);