import React, {useState} from 'react';
import style from './ProfileInfo.module.css'
import userBg from "../../../img/backgroundMainUser.jpg";
import Preloader from "../../Common/Preloader";
import ProfileStatus from './../ProfileStatus/ProfileStatus'
import {ProfileContacts} from "./ProfileContacts";

const ProfileInfo = ({profile,status,updateStatus,userId,photo,updatePhotoProfile}) => {
 const [editMode, setEditMode] = useState(false)
    const onMainPhotoSelected = (e) => {
        if(e.target.files.length !== 0) updatePhotoProfile(e.target.files[0])
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
                            <div>Full Name:{profile.fullName}</div>
                            <div>About me:{profile.aboutMe}</div>
                            <div>Looking for a job: {profile.lookingForAJobDescription}</div>

                            <div className={style.contacts}>Contacts: {Object.keys(profile.contacts)
                                .map(c =>
                                    <ProfileContacts key={c} nameContacts={c} contactsValue={profile.contacts[c]}/>)}
                            </div>
                            {
                                !editMode ? <button onClick={() => setEditMode(true)}>Edit</button>
                                    : <button onClick={() => setEditMode(false)}>Save</button>
                            }

                        </div>
                    </div>
                    <ProfileStatus statusOuter={status} updateStatus={updateStatus} userId={userId}/>
                </>
                :
                <Preloader/>
            }
        </>
    );
};

export default ProfileInfo;