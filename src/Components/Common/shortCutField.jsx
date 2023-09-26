import React from "react";
import {Field} from "redux-form";

export const shortCutField = (name, placeholder, validate, component, type, value,text) => {
    return <div>
        <Field name={name} placeholder={placeholder} validate={validate} component={component} type={type} value={value}/>
        {text}
    </div>
}