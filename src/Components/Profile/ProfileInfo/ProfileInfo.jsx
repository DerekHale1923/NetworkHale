import React, {useState} from 'react';
import style from './ProfileInfo.module.css'
import userBg from "../../../img/backgroundMainUser.jpg";
import Preloader from "../../Common/Preloader";
import ProfileStatus from './../ProfileStatus/ProfileStatus'
import ProfileDescForm from "./ProfileDescForm";
import ProfileDescription from "./ProfileDescription";


const ProfileInfo = ({profile,status,updateStatus,userId,photo,updatePhotoProfile}) => {
    const [editMode, setEditMode] = useState(true)
    const onMainPhotoSelected = (e) => {
        if(e.target.files.length !== 0) updatePhotoProfile(e.target.files[0])
    }
    const onSubmit = (data) => {
        console.log(data)
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
                        { editMode
                            ? <ProfileDescription profile={profile}/>
                            : <ProfileDescForm profile={profile} onSubmit={onSubmit}/>
                        }
                        { editMode
                            ? <button onClick={() => setEditMode(false)}>Edit</button>
                            : <button onClick={() => setEditMode(true)}>Save</button> }

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