import React from 'react';
import style from './MyMessage.module.css'

const MyMessage = (props) => {
    return (
        <div className={style.messages}>
            <div className={style.userInfo}>
                <img src={props.img} alt={'img'}/>
                {props.name}
            </div>
            <div className={style.textMessage}>
                {props.message}
            </div>
        </div>
    );
};

export default MyMessage;