import igor from "../img/1676295806122712757.png";
import masha from "../img/i.jpg";
import tima from "../img/medved-flag-rossii.jpg";
import {profileAPI, userAPI} from "../API/api";
import defaultPhoto from '../img/images.png'


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const ADD_PHOTO = 'ADD_PHOTO'


let initialState = {
    posts: [
        {id: 1,message: '1', name: 'Igor', date: Date(), likesCount: '12', img: igor},
        {id: 2,message: '2', name: 'Masha', date: Date(), likesCount: '21', img: masha},
        {id: 3,message: '3', name: 'Tima', date: Date(), likesCount: '26', img: tima}],
    profile: null,
    status: 'Пусто',
    photo: defaultPhoto,
}

const ProfilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {
                    message: action.newPostText,
                    name: 'Igor',
                    likesCount: '',
                    img: igor,
                }],
            } //создаем копию state, копируем ниже на уровне постов, и добавляем в конец newPost если записать перед ...state
            //то просто добавим в начало push уже не актуален
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case ADD_PHOTO: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos:{
                        ...state.profile.photos,
                        small: action.photo
                    }
                }
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}
export const actionAddPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhoto = (photo) => ({type:ADD_PHOTO, photo})

export const profilePageThunk = (userid) => async (dispatch) => {
   let res = await userAPI.getUsersProfile(userid)
       dispatch(setUserProfile(res))
}

export const updatePhotoProfile = (photo) => async (dispatch) => {
    let res = await profileAPI.updatePhoto(photo)
    if (res.data.resultCode === 0) return  dispatch(savePhoto(res.data.data.photos.small))
}

export const getStatusThunk = (userId) => async (dispatch) => {
    let res = await profileAPI.getStatus(userId)
        if (res.data === null) return dispatch(setStatus('Нет статуса'))
    dispatch(setStatus(res.data))
}
export const updateStatus = (status) => async (dispatch) => {
   let res = await profileAPI.updateStatus(status)
            if (res.data.resultCode === 0) return dispatch(setStatus(status))
}



export default ProfilePageReducer