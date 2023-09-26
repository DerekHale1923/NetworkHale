import ProfilePageReducer, {actionAddPost, deletePost} from "../Redux/ProfilePageReducer";
import igor from "../img/1676295806122712757.png";
import masha from "../img/i.jpg";
import tima from "../img/medved-flag-rossii.jpg";
import React, {createRoot} from "react-dom/client";
import MainApp from "../App";

let stateTest = {
    posts: [
        {id: 1,message: '1', name: 'Igor', date: Date(), likesCount: '12', img: igor},
        {id: 2,message: '2', name: 'Masha', date: Date(), likesCount: '21', img: masha},
        {id: 3,message: '3', name: 'Tima', date: Date(), likesCount: '26', img: tima}],
}

it('test add post ', () => {
    let action = actionAddPost('Hello test')
    let newState = ProfilePageReducer(stateTest, action)
    //задаем первоначальные данные тестируем добавление поста
    expect(newState.posts.length).toBe(4)
})

it('test correct postMessage', () => {
    let action = actionAddPost('Hello test')
    let newState = ProfilePageReducer(stateTest, action)
    expect(newState.posts[3].message).toBe('Hello test')
})

it('delete post profile page', () => {
    let action = deletePost(2)
    let newState = ProfilePageReducer(stateTest, action)
    expect(newState.posts.length).toBe(2)
})

it('render without crashing', () =>{
    const div = document.createElement('div')
    const root = createRoot(div)
    root.render(<MainApp/>)
    root.unmount()
})