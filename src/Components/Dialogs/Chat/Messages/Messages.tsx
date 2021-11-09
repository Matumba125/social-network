import React, {useEffect, useState} from 'react';

import Message from "./Message/Message";
import style from './Messages.module.css'


export type ChatMessageType = {
    message: string
    photo: string
    userId: string
    userName: string
}

type MessagesType ={
    wsChannel: WebSocket | null
}

export const Messages: React.FC<MessagesType> = ({wsChannel, ...restProps}) => {

    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        const onOpenHandler = (e: MessageEvent) => {
            const newMessages = JSON.parse(e.data);
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        };
        wsChannel?.addEventListener('message', onOpenHandler)

        return()=>{
            wsChannel?.removeEventListener('message', onOpenHandler)
        }
    }, [wsChannel])


    return (
        <div className={style.messagesWrapper}>
            {messages.map((m: ChatMessageType, i) =>
                <Message
                    key={i}
                    userName={m.userName}
                    message={m.message}
                    userId={m.userId}
                    photo={m.photo}/>
            )}
        </div>
    );
};