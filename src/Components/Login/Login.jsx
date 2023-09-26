import React from 'react';
import style from './Login.module.css'
import styleError from './../Common/InputForm.module.css'
import {Field, reduxForm} from "redux-form";
import InputForm from "../Common/InputForm";
import {maxLengthCreator, required} from "../../Utils/Validators";
import {LoginThunk} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {shortCutField} from "../Common/shortCutField";


const maxLength15 = maxLengthCreator(20)

 const LoginForm = (props) => {
    return(
            <form className={style.form} onSubmit={props.handleSubmit}>
                    {/* handleSubmit приходит из пропсов! туда поступает превент дефолт,
                    получение всех полей и упаковка в обьект, затем вызов онсабмит и
                    передача туда упакованного обьекта */}
                    {shortCutField('email','Введите емаил',[required, maxLength15],InputForm)}
                    {shortCutField('password','Введите пароль',[required, maxLength15],InputForm,'password')}
                    {shortCutField('rememberMe',null,[],'input',"checkbox",null,'Запомнить меня')}
                    {/*
                    Стандартные филды
                    <div><Field name={'email'} placeholder={'Введите емаил'} validate={[required, maxLength15]} component={InputForm}/></div>
                    <div><Field name={'password'} type={'password'} placeholder={'Введите пароль'} validate={[required, maxLength15]} component={InputForm}/></div>
                    <div><Field type="checkbox" name={'rememberMe'} component={'input'}/>Запомнить меня</div>*/}
                    <div><button>Отправить</button></div>
                {props.error && <div className={styleError.error + " " + styleError.spanError}>{props.error}</div>}
                {/* так как в redux форму приходит много всего, там есть error который первоначально null и если в нашей форме появляется
                ошибка то мы показывает этот блок */}
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
/*для кадой redux формы нужно уникальное название которое записывается в обьект c ключем form*/
const Login = (props) => {
    const onSubmit = (formData) => {

        props.LoginThunk(formData.email, formData.password, formData.rememberMe)
        //мы не берем напрямую санку, мы берем из пропсов колбэк, который внутри себя диспачит санку

    }/* это функция заглушка, так как при вызове из form eе handleSubmit будет паковать обьект,
     через onSubmit мы сможем получить этот обьект и сделать что нибудь с ним*/

    if(props.isAuth) return <Navigate to={'/dialogs'}/>
    return (
        <>
            <h1>Login Page</h1>
            <LoginReduxForm onSubmit={onSubmit}/>{/*если не передать onSubmit будет ошибка*/}
        </>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
}) //не забывай скобки, обьект в скобках!

 export default connect(mapStateToProps, {LoginThunk})(Login);

