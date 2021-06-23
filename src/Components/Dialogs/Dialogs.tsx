import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import Message from "./Message";


function Dialogs() {

    let dialogsData=[
        {
            id: "1",
            userName: "Dimych"
        },
        {
            id: "2",
            userName: "Andrey"
        },
        {
            id: "3",
            userName: "Sveta"
        },
        {
            id: "4",
            userName: "Sasha"
        },
        {
            id: "5",
            userName: "Viktor"
        },
        {
            id: "6",
            userName: "Valera"
        }
    ]

    let messageData=[
        {
            id: "1",
            message: "HI"
        },
        {
            id: "2",
            message: "Hello"
        },
        {
            id: "3",
            message: "YO"
        }
    ]

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {dialogsData.map(u => <DialogItem userName={u.userName} id={u.id}/>)}
            </div>
            <div className={style.messages}>
                {messageData.map(m => <Message messageText={m.message} id={m.id}/>)}
            </div>
        </div>

    )
}

export default Dialogs;