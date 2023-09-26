import React from 'react';
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import img from './../../img/images.png'

const User = ({user, unfollow, follow, followingInProgress}) => {

    return (
        <div key={user.id} className={style.wrapperUser}>
            <div className={style.leftPart}>
                <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small != null ? user.photos.small : img} alt="img"
                         style={{height: '40px', width: '40px'}}/>
                </NavLink>
                {user.name}
                {user.followed ?
                    <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)
                    }}>Unfollowed</button>
                    :
                    <button disabled={followingInProgress.some(id => id === user.id)}
                        //та user.id которая будет равна id в массиве будет disable
                            onClick={() => {
                                follow(user.id)
                            }}>Followed</button>}

            </div>
            <div className={style.centerPart}>
                {user.status}
            </div>
            <div className={style.rightPart}>
                {'user.location.country'}
                <br/>
                {'user.location.city'}
            </div>
        </div>
    )
};

export default User;