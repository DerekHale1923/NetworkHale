import {userAuthThunk} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED'

let initialState = {
    initialized: false,
}

const AppReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_INITIALIZED:
            return{
                ...state,
                initialized: true
            }
        default: return  state
    }
};

export const initializedSuccess = () => ({type:SET_INITIALIZED})

export const initializeApp = () => (dispatch)=> {
    let promise = dispatch(userAuthThunk())
    promise.then(() => {dispatch(initializedSuccess())})

} //делать из диспач промис это редкость,обычно диспачим и забываем, а не ждем результата, но тут вот такой варик
    // Promise.all([массив промисов, их может быть несколько, тут перечисляй]).then(() => так можно собрать кучу
// и только после ожидания всех промисов запустится наш then)
export default AppReducer;