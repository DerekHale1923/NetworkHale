import igor from "../img/1676295806122712757.png";
import masha from "../img/i.jpg";
import tima from "../img/medved-flag-rossii.jpg";

const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    dialogs: [
        {id: '000001', img: igor, name: 'Igor'},
        {id: '000002', img: masha, name: 'Masha'},
        {id: '000003', img: tima, name: 'Tima'},],
    messages: [
        {id: '000001', messages: 'Hello', img: igor, name: 'Igor',},
        {id: '000002', messages: 'This delete message', img: masha, name: 'Masha',},
        {id: '000003', messages: 'Bye', img: tima, name: 'Tima',},],
} /*обьект по умолчанию, если ничего не придет, то будет использоваться этот обьект как state*/

const DialogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {
                    id: '000001',
                    messages: action.sendMess,
                    img: igor,
                    name: 'Igor',
                }],
            }
        }
        default:
            return state;
    }
}
export const actionAddMessage = (sendMess) => ({type: ADD_MESSAGE, sendMess})

export default DialogPageReducer