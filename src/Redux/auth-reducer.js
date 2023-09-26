import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";
import {profilePageThunk} from "./ProfilePageReducer";


const SET_USER_DATA = 'SET_USER_DATA'


let initialSate = {
    id: null,
    login:  null,
    email: null,
    isAuth: false,
};

export const authReducer = (state = initialSate, action) => {
    switch (action.type){
        case SET_USER_DATA:
            return{
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserDataAC = (email, id, login, isAuth) => (
    {type: SET_USER_DATA, payload: {email, id, login, isAuth}})

export const userAuthThunk = () => async (dispatch) => {
    let res = await authAPI.Me()
        if (res.data.resultCode === 0) {
            let {email, id, login} = res.data.data
            dispatch(setAuthUserDataAC(email, id, login, true))
        }
}  // санка проверяем авторизованы мы или нет, если авторизованы то сетает наши данные в state
export const LoginThunk = (email, password, rememberMe) => async (dispatch) => {
   let response =  await authAPI.Login(email, password, rememberMe)
            if(response.data.resultCode === 0){
                dispatch(userAuthThunk())
            } else {
                let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: messages}))
    /* stopSubmit передает в форму с названием 'login' ошибку как будто это ошибка самой формы или конкретного поля по name
    _error выдает общую ошибку на форму, вместо именных {email:' Неверный email'} , на конкретное поле
    */
            }
} // отправляем данные формы, если мы авторизуемся, то вызывается санка, которая сетает наши данные в state

export const LogoutThunk = () => async (dispatch) => {
    let res = await authAPI.Logout()
            if (res.data.resultCode === 0){
               dispatch(setAuthUserDataAC({
                   id: null,
                   login:  null,
                   email: null,
                   isAuth: false,
               }))
            }
}

