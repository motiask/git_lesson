import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import p from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts  postData = {props.state.postData} addPost = {props.addPost}/>
        </div>)
}

export default Profile