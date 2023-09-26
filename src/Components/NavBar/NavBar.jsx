import React from 'react';
import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import FriendsNav from "./FriendsNav/FriendsNav";

const NavBar = (props) => {
    let isActiveClass = ({isActive}) => isActive ? style.activeNav : '';

    return (
        <div className={style.wrap}>
            <div className={style.sideBar}>
                <NavLink to={"/profile"} className={isActiveClass}>Profile</NavLink>
                <NavLink to={"/dialogs"} className={isActiveClass}>Messages</NavLink>
                <NavLink to={"/news"} className={isActiveClass}>News</NavLink>
                <NavLink to={"/music"} className={isActiveClass}>Music</NavLink>
                <NavLink to={"/settings"} className={isActiveClass}>Settings</NavLink>
            </div>
            <FriendsNav friends={props.friends}/>
        </div>

    );
};

export default NavBar;