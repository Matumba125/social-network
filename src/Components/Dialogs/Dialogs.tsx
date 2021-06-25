import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsDataPropsType} from "../../PropsType";


function Dialogs(props: DialogsDataPropsType) {

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {props.dialogsData.map(u => <DialogItem userName={u.userName} id={u.id}/>)}
            </div>
            <div className={style.messages}>
                {props.messageData.map(m => <Message messageText={m.messageText} id={m.id}/>)}
            </div>
        </div>

    )
}

export default Dialogs;