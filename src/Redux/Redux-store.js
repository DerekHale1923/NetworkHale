import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import DialogPageReducer from "./DialogPageReducer";
import ProfilePageReducer from "./ProfilePageReducer";
import SidebarReducer from "./SidebarReducer";
import {UserPageReducer} from "./UserPageReducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer} from "redux-form";
import AppReducer from "./AppReducer";

let reducers = combineReducers({
    dialogPage: DialogPageReducer,
    profilePage: ProfilePageReducer,
    auth: authReducer,
    sidebarFriends: SidebarReducer,
    usersPage: UserPageReducer,
    form: reducer,
    appReducer: AppReducer,
}) /*это и есть мой стэйт каждый ключ имеет свой редьюсер*/
/* form это участок стэйта отвечающий за все формы в приложении */

     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
     const Store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));
// applyMiddleware для санок в стейте... заюзали глобальное свойство window для использования расширения в браузере

window.Store = Store;
export default  Store

