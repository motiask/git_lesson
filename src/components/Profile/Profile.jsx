import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import p from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer store={props.store} />
        </div>)
}

export default Profile