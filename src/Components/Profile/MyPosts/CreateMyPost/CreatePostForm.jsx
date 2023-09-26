import React from 'react';
import style from './CreatePostForm.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../Utils/Validators";
import TextareaForm from "../../../Common/TextareaForm";

const maxLength10 = maxLengthCreator(10)
const CreatePost = (props) => {
    return (
            <form className={style.sendPost} onSubmit={props.handleSubmit}>
                <Field component={TextareaForm} name={'newPostText'} validate={[required, maxLength10]}  value={props.newText}/>
                <button>Send</button>
            </form>
    );
};

const CreatePostForm = reduxForm({form: 'CreatePost'})(CreatePost)

export default CreatePostForm;