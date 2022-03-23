import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import p from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts ProfilePage={props.ProfilePage} dispatch={props.dispatch} />
        </div>)
}

export default Profile