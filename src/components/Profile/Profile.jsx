import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import p from './Profile.module.css'

const Profile = () => {
    return (
        <div className={p.content_1}>
            <div>
                <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
            </div>
            <div>
                фото + description
            </div>
            <MyPosts />
        </div>)
}

export default Profile