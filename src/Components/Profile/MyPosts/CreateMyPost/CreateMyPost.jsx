import React from 'react';
import style from './CreateMyPost.module.css'
import Post from "../Post/Post";
import CreatePostForm from "./CreatePostForm";

const CreateMyPost = (props) => {

    const newPost = props.posts.map((p,i) =>
        <Post message={p.message} name={p.name} date={p.date} likesCount={p.likesCount} img={p.img} key={i}/> )

    let onSubmit = (value) => {
        props.actionAddPost(value.newPostText)
    }

    return (
        <div className={style.wrapper}>
            <h1>My Posts</h1>
            <CreatePostForm newText={props.newText} onSubmit={onSubmit}/>
            {newPost}
        </div>
    );

};

export default CreateMyPost;