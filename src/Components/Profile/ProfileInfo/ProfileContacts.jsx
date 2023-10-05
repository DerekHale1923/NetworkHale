import React from 'react';
import style from "./ProfileContacts.module.css";

export const ProfileContacts = ({nameContacts, contactsValue}) => {

    return <div className={style.contacts}>
        {nameContacts}: {contactsValue}
    </div>
}

export default ProfileContacts;