import React from 'react';
import style from './Post.module.css'


const Post = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.aboutUserPost}>
                <img src={props.img} alt={'avatar'}/>
                <p>{props.name}</p>
            </div>
            <div>
                <div className={style.date}>{props.date}</div>
                <div className={style.textPost}>
                    {props.message}
                </div>
            </div>

            <div className={style.userResponse}>
                <button>Delete</button>
                <button>Answer</button>
            </div>

            <div className={style.like} onClick={props.onClick}>&#9825; {props.likesCount}</div>
        </div>
    );
};

export default Post;