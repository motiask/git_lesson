import React from 'react';
import * as axios from 'axios';
import Users from './Users';

class UsersAPIComponent extends React.Component {

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

export default UsersAPIComponent