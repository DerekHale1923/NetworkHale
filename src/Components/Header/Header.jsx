import React from 'react';
import style from './Header.module.css'
import item from '../../img/1627015268_12-p-rozovii-fon-dlya-logotipa-12.png'
import {Navigate} from "react-router-dom";


const Header = ({login, LogoutThunk}) => {
    if (login === undefined || null) return <Navigate to={'/login'}/>
    return (
        <div className={style.header}>
            <div className={style.headerImgDiv}>
                <img src={item} alt={'logo'}/>
            </div>
            <div className={style.headerText}>Красивый текст</div>
            <div className={style.auth}>
                <div style={login ? {color: 'green'} : {display: 'none'}}>
                    {login}
                    <button onClick={LogoutThunk}><a href={'/login'}>Logout</a></button>
                </div>
            </div>
        </div>
    );
};
export default Header;
