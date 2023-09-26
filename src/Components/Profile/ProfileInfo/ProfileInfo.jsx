import React from 'react';
import style from './ProfileInfo.module.css'
import userBg from "../../../img/backgroundMainUser.jpg";
import Preloader from "../../Common/Preloader";
import defaultPhoto from '../../../img/images.png'
import ProfileStatus from './../ProfileStatus/ProfileStatus'
import {updateStatus} from "../../../Redux/ProfilePageReducer";

const ProfileInfo = ({profile,status,updateStatus}) => {

    return (
        <>
            {profile ?
                <>
                    <div className={style.contentUserBg}>
                        <img src={userBg} alt={'logo'}></img>
                    </div>

                    <div className={style.contentUserDesc}>
                        <img src={profile.photos.small || defaultPhoto} alt={"avatarUser"}/>
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