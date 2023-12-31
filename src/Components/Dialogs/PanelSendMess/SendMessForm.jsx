import React from 'react';
import style from './SendMessForm.module.css'
import {reduxForm} from "redux-form";
import TextareaForm from "../../Common/TextareaForm";
import {maxLengthCreator, required} from "../../../Utils/Validators";
import {ShortCutField} from "../../Common/ShortCutField";

const maxLength50 = maxLengthCreator(50)

const SendMess = (props) => {
    return (
        <div className={style.panelSendMess}>
            <form className={style.wrapper} onSubmit={props.handleSubmit}>
                {ShortCutField('sendMess', 'enter you mess...', [required, maxLength50], TextareaForm, null, props.text,)}
                {/*<Field component={TextareaForm}
                       validate={[required, maxLength50]}
                       name={'sendMess'}
                       placeholder={'enter you mess...'}
                       value={props.text}>
                </Field>*/}
                <button>Send</button>
            </form>
        </div>
    );
};

const SendMessForm = reduxForm({form: 'PanelSendMess'})(SendMess)

export default SendMessForm;