import React, {ChangeEvent} from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";


const Dialogs: React.FC<DialogsPropsType> =(props) =>{

    let state = props.dialogsPage

    let dialogsElement = state.dialogsData.map(u => <DialogItem key={u.id} userName={u.userName} id={u.id} avatar={u.avatar}/>)

    let messageElement = state.messageData.map(m => <Message key={m.id} messageText={m.messageText} id={m.id}/>)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeMessageText(e.currentTarget.value)
    }

    const onClickHandler = () => {
        props.addMessage()
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messageElement}
                <div className={style.addMessage}>
                    <textarea onChange={onChangeHandler} value={state.newMessageText}></textarea>
                    <button onClick={onClickHandler}>Send</button>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;