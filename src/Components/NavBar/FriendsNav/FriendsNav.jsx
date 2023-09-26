import React from 'react';
import style from './FriendsNav.module.css'
import {NavLink} from "react-router-dom";

const FriendsNav = (props) => {

    const friendsListNav = props.friends.map((f,i) => <NavLink to={'*'}  key={i} className={style.friendsMap}>
                <img src={f.img} alt="pic"/>
                <span>{f.name}</span>
            </NavLink>
        )
    friendsListNav.length = 3
    return (
        <div className={style.sideBarFriends}>
            <NavLink to={'/users'} className={style.navHeader}><h1>Friends</h1></NavLink>
            <div className={style.friends}>
                {friendsListNav}
            </div>

        </div>
    );
};

export default FriendsNav;