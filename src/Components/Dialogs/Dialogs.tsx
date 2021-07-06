import React, {ChangeEvent} from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPagePropsType} from "../../redux/PropsType";


function Dialogs(props: DialogsPagePropsType) {

    let dialogsElement = props.dialogsData.map(u => <DialogItem userName={u.userName} id={u.id} avatar={u.avatar}/>)

    let messageElement = props.messageData.map(m => <Message messageText={m.messageText} id={m.id}/>)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type:'CHANGE-MESSAGE-TEXT',
            newText: e.currentTarget.value}
        )
    }

    const onClickHandler = () => {
        props.dispatch({type: 'ADD-MESSAGE'})
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messageElement}
                <div className={style.addMessage}>
                    <textarea onChange={onChangeHandler} value={props.newMessageText}></textarea>
                    <button onClick={onClickHandler}>Send</button>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;