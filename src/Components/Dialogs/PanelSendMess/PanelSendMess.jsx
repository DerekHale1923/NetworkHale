import React from 'react';
import style from './PanelSendMess.module.css'
import DialogsItem from "../DialogsItem/DialogsItem";
import MyMessage from "../Message/MyMessage";
import Message from "../Message/Message";
import SendMessForm from "./SendMessForm";

const PanelSendMess = (props) => {
    const dialogsItem = props.dialogs.map((d, index) => {
        return <DialogsItem id={d.id} img={d.img} key={index}/>
    })
    const messageItem = props.messages.map((m, index) =>
        (m.id === '000001')
            ?
            <MyMessage message={m.messages} name={m.name} img={m.img} key={index}/>
            :
            <Message message={m.messages} name={m.name} img={m.img} key={index}/>
    )

    let onSubmit = (value) => {
        props.actionAddMessage(value.sendMess)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsItem}
            </div>
            <div className={style.messages}>
                {messageItem}
            </div>
            <SendMessForm value={props.value} onSubmit={onSubmit}/>
        </div>
    );
};

export default PanelSendMess;