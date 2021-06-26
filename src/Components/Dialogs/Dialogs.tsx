import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPagePropsType} from "../../redux/PropsType";


function Dialogs(props: DialogsPagePropsType) {

    let dialogsElement = props.dialogsData.map(u => <DialogItem userName={u.userName} id={u.id} avatar={u.avatar}/>)

    let messageElement = props.messageData.map(m => <Message messageText={m.messageText} id={m.id}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messageElement}
            </div>
        </div>

    )
}

export default Dialogs;