import React from 'react';
import style from "./Message.module.css";
import {MessagePropsType} from "../../../redux/dialogsReducer";

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={style.message}>{props.messageText}</div>
    );
};

export default Message;