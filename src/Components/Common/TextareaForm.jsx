import React from "react";
import style from './TextareaForm.module.css'

const TextareaForm = ({input, meta, ...props}) => {
    /*не работало до деструктуризации, и не выдавало никаких ошибок...деструктуризировал input и propsЫ и передал их в
     textarea и щас все норм, нужно было передать их в textarea а не просто {...props}*/
    {/*{...input} {...props} className={style.error + ' ' + style.error}*/
    }
    let hasError = meta.touched && meta.error
    /*meta.error будет показывать сообщение из валидатора повешенного на форму*/
    return (
        <>
            <textarea {...input} {...props} className={hasError ? (' ' + style.error) : ''}/>
            {hasError && <span className={style.spanError}>{meta.error}*</span>}
        </>
    )
}

export default TextareaForm