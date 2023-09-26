import React from 'react';
import style from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <div className={style.dialog}>
            <NavLink to={'/dialogs/' + props.id}
                     className={({isActive}) => isActive ? style.active : ''}><img
                src={props.img}
                alt={'igor'}/><span>Name</span></NavLink>

        </div>
    )
}

export default DialogsItem;