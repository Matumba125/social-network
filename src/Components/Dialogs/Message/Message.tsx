import React from 'react';
import style from "./Message.module.css";
import {MessagePropsType} from "../../../redux/PropsType";


function Message(props: MessagePropsType) {
    return (
        <div className={style.message}>{props.messageText}</div>
    );
};

export default Message;