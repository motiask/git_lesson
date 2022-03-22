import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import p from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postData={props.ProfilePage.postData} newPostText={props.ProfilePage.newPostText} addPost={props.addPost} PushPostText={props.PushPostText} />
        </div>)
}

export default Profile