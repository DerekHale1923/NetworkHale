import React from "react";
import style from './InputForm.module.css'

const InputForm = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    return (
        <>
            <input type="text" {...input} {...props} className={hasError ? (' ' + style.error) : ''}/>
            {hasError && <span className={style.spanError}>{meta.error}*</span>}
        </>
    )
}

export default InputForm


