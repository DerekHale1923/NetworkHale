import igor from "../img/1676295806122712757.png";
import masha from "../img/i.jpg";
import tima from "../img/medved-flag-rossii.jpg";

let initialState = {
    dialogs: [
        {id: '000001', img: igor, name: 'Igor'},
        {id: '000002', img: masha, name: 'Masha'},
        {id: '000003', img: tima, name: 'Tima'},],
}

const  SidebarReducer = (state = initialState, action) => {
    return state
}

export default SidebarReducer;