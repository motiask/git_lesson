import React from 'react';
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
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={p.posts}>
                    <div className={p.item}>
                        post 1
                    </div>
                    <div className={p.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>)
}

export default Profile