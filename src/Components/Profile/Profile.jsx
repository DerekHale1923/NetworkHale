import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import SuperMyPostContainer from "./MyPosts/CreateMyPost/SuperMyPostContainer";



const Profile = ({profile,status,updateStatus,userId,updatePhotoProfile,photo}) => {

    return (
        <>
            <ProfileInfo updatePhotoProfile={updatePhotoProfile} photo={photo} userId={userId} profile={profile} status={status} updateStatus={updateStatus}/>
            <SuperMyPostContainer/>
        </>
    );
};

export default Profile;



