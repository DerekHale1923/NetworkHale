import igor from "../img/1676295806122712757.png";
import masha from "../img/i.jpg";
import tima from "../img/medved-flag-rossii.jpg";
import DialogPageReducer from "./DialogPageReducer";
import ProfilePageReducer from "./ProfilePageReducer";


const Store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Hello', name: 'Igor', date: Date(), likesCount: '12', img: igor,},
                {message: 'How are you', name: 'Masha', date: Date(), likesCount: '21', img: masha,},
                {message: 'Bye', name: 'Tima', date: Date(), likesCount: '26', img: tima,},],
            newPostText: '',
        },
        dialogPage: {
            dialogs: [
                {id: '000001', img: igor, name: 'Igor'},
                {id: '000002', img: masha, name: 'Masha'},
                {id: '000003', img: tima, name: 'Tima'},],
            messages: [
                {id: '000001', messages: 'Hello', img: igor, name: 'Igor',},
                {id: '000002', messages: 'This delete message', img: masha, name: 'Masha',},
                {id: '000003', messages: 'Bye', img: tima, name: 'Tima',},],
            newMessageText: '',
        },
        sideBar: {},
    },
    _callSubscriber() {
        console.log('Создаем пустую функцию, и перезаписыываем ее в колбэке на функцию обновления state')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
        /*мы спецом не обьявили переменную, чтоб она нашлась вне нашей фунции и перезаписалась*/
    },
    dispatch(action) {
         DialogPageReducer(this._state.dialogPage, action)
         ProfilePageReducer(this._state.profilePage, action)
         this._callSubscriber(this._state)
    }
}










window.Store = Store; /* для вывода всего state в консоли, мало ли понадобится */

export default Store



