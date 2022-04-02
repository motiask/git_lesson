import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import p from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    debugger
    return (
        <div>
            <div>
                <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
            </div>
            <div className={p.descriptionBlock}>
                <div>
                   Персрнаж: {props.profile.fullName}
                </div>
                <div>
                    <img src={props.profile.photos.large} />
                </div>
                <div>
                    Статус: {props.profile.aboutMe}
                </div>
                фото + description
            </div>
        </div>)
}

export default ProfileInfo