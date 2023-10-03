import React from 'react';
import style from './ProfileInfo.module.css'
import userBg from "../../../img/backgroundMainUser.jpg";
import Preloader from "../../Common/Preloader";
import ProfileStatus from './../ProfileStatus/ProfileStatus'


const ProfileInfo = ({profile,status,updateStatus,userId,savePhoto,photo}) => {

    const onMainPhotoSelected = (e) => {
        debugger
        if(e.target.files.length !== 0)
            savePhoto(e.target.files[0])
    }
    return (
        <>
            {profile ?
                <>
                    <div className={style.contentUserBg}>
                        <img src={userBg} alt={'logo'}></img>
                    </div>

                    <div className={style.contentUserDesc}>
                        <div className={style.photo}>
                            <img src={profile.photos.small || photo} alt={"avatarUser"}/>
                            {!userId && <>
                                <label htmlFor={'changeAvatar'}>Сменить аватар</label>
                                <input type="file" id={'changeAvatar'} onChange={onMainPhotoSelected}/>
                            </>}
                        </div>

                        <div className={style.userDesc}>
                            <span>Full Name:{profile.fullName}</span>
                            <span>About me:{profile.aboutMe}</span>
                            <span>Работаю: {profile.lookingForAJobDescription}</span>
                            <span>Contacts: {profile.contacts.vk}</span>
                        </div>

                    </div>
                    <ProfileStatus statusOuter={status} updateStatus={updateStatus}/>
                </>
                :
                <Preloader/>
            }
        </>
    );
};

export default ProfileInfo;