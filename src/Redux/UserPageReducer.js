import {userAPI} from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 1000,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
} // длинная страницы, всего юзеров и стартовая страница


const UserComposeFollow = (items,userId, actionId, newObjProps) => {
   return items.map(u => {
        if (u[userId] === actionId) {
            return {...u, followed: newObjProps}
        }
       return u;
    })
}




export let UserPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: UserComposeFollow(state.users,'id', action.userId,true)
                //рефакторинг функция
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: UserComposeFollow(state.users,'id', action.userId,false)
                //  было так
                /*state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })*/
            }
        }
       case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        //мы возвращаем копию массива и запихиваем в копию state.users старый массив и добавляем туда новый массив
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
                //с помощью фильтра создаем новый массив в который не берем id который пришел в action
            }
        }
        default:
            return state;
    }
}

export const acceptFollow = (userId) => ({type: FOLLOW, userId})
export const acceptUnfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})

export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
})

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true))
    let res = await userAPI.getUsers(currentPage, pageSize)
    dispatch(setCurrentPage(currentPage))
    dispatch(setUsers(res.items))
    dispatch(setIsFetching(false))
}

const followUnfollowFlow = async (dispatch, userId,apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let res = await apiMethod(userId);
    if (res.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}// сделали общую функцию для двух санок
export const follow = (userId) => {
    return async (dispatch) => {
       await followUnfollowFlow(dispatch, userId, userAPI.usersFollow.bind(userAPI), acceptFollow)
    }
}// не создаем лишние перемнные, передаем сразу по прямой
export const unfollow = (userId) => {
    return async (dispatch) => {
       await followUnfollowFlow(dispatch, userId,userAPI.usersUnfollow.bind(userAPI), acceptUnfollow)
    }
}

/* ============== старые санки, без рефакторинга(нет функции обьединяющей логику) от этого и дублирование кода
export const follow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    let res = await userAPI.usersFollow(userId);
    if (res.data.resultCode === 0) {
        dispatch(acceptFollow(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}
export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    let res = await userAPI.usersUnfollow(userId);
    if (res.data.resultCode === 0) {
        dispatch(acceptUnfollow(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

*/

