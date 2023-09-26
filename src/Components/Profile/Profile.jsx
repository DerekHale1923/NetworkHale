import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import SuperMyPostContainer from "./MyPosts/CreateMyPost/SuperMyPostContainer";
import {updateStatus} from "../../Redux/ProfilePageReducer";

const Profile = ({profile,status,updateStatus}) => {

    return (
        <>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <SuperMyPostContainer/>
        </>
    );
};

export default Profile;



