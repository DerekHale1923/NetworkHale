import React from 'react';
import style from "./ProfileDescForm.module.css";
import {Form, reduxForm} from "redux-form";


const ProfileDescription = ({profile,onSubmit}) => {
       return (
               <Form onSubmit={onSubmit} className={style.userDesc}>
                   <div>Full Name:--------- fild</div>
                   <div>About me:---------------- fild</div>
                   <div>Looking for a job: ----------------fild</div>
                   <div className={style.contacts}>Contacts: {Object.keys(profile.contacts)
                       .map(key=> <div key={key} className={style.contacts}> {key}: {profile.contacts[key]} </div>)}
                   </div>
               </Form>
       )
}

const ProfileDescForm = reduxForm({form: 'profileDescForm'})(ProfileDescription)

export default ProfileDescForm;





