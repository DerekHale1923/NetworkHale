import React, {lazy, Suspense} from 'react';
import './App.css'
import NavBar from "./Components/NavBar/NavBar";
import { HashRouter, Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import Login from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./Redux/AppReducer";
import Preloader from "./Components/Common/Preloader";
import {getInitialized} from "./Redux/InitializedSelector";
import {getIsAuth} from "./Redux/ProfileSelector";
import {getAuthLogin} from "./Redux/Header.Selector";
import {LogoutThunk} from "./Redux/auth-reducer";
import Header from "./Components/Header/Header";
import Store from "./Redux/Redux-store";
 import SuperProfileContainer from "./Components/Profile/ProfileContainer";
// import SuperDialogsContainer from "./Components/Dialogs/PanelSendMess/SuperDialogsContainer";


//const SuperProfileContainer = lazy(() => import('./Components/Profile/ProfileContainer'))
const SuperDialogsContainer = lazy(() => import('./Components/Dialogs/PanelSendMess/SuperDialogsContainer'))

// lazy loading это процесс импорта компонентов только когда они потребуются, минуя общий пакет загрузок
export function App(props) {

    props.initializeApp()
    return (
        !props.initialized ? <Preloader/>
            :
            <div className={'wrapper'}>
                <Header login={props.login} LogoutThunk={props.LogoutThunk}/>
                <NavBar className={'sidebar'} friends={props.state.sidebarFriends.dialogs}/>
                <div className={'contentWrapper'}>
                    <Suspense>
                        <Routes>
                            <Route path={'/profile/:userId?'}
                                   element={<SuperProfileContainer/>}/>
                            <Route path={'/dialogs/*'}
                                   element={<SuperDialogsContainer/>}/>
                            <Route path={'/news'} element={<News/>}/>
                            <Route path={'/Music'} element={<Music/>}/>
                            <Route path={'/settings'} element={<Settings/>}/>
                            <Route path={'/users'} element={<UsersContainer/>}/>
                            <Route path={'/login'} element={<Login/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>

    );
}

const mapStateToProps = (state) => ({
    initialized: getInitialized(state),
    isAuth: getIsAuth(state),
    login: getAuthLogin(state),
})


const AppContainer = connect(mapStateToProps, {initializeApp, LogoutThunk})(App);

const MainApp = () => {
    return (
        <HashRouter>
            <Provider store={Store}>
                <AppContainer state={Store.getState()}/>
            </Provider>
        </HashRouter>
    )
}
// чтобы задеплоить на gh нужно указать в package.json домашнюю страницу(обязательно шарп в конце адреса) и обернуть в хэшроутер
export default MainApp
