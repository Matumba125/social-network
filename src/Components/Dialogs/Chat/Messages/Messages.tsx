import React, {useEffect, useState} from 'react';

import Message from "./Message/Message";
import style from './Messages.module.css'


export type ChatMessageType = {
    message: string
    photo: string
    userId: string
    userName: string
    first?: boolean
    last?: boolean
    unique?: boolean
}

type MessagesType = {
    wsChannel: WebSocket | null
}

export const Messages: React.FC<MessagesType> = ({wsChannel, ...restProps}) => {

    const [messages, setMessages] = useState<ChatMessageType[]>([])
    const [finalSortedMessages, setFinalSortedMessages] = useState<ChatMessageType[]>([])

    useEffect(()=>{
        const sortedMessages = messages.slice()
        if (messages) {
            for (let i = 0; i < sortedMessages.length; i++) {
                if (sortedMessages[i].userId === sortedMessages[i + 1]?.userId && sortedMessages[i].userId !== sortedMessages[i - 1]?.userId) {
                    sortedMessages[i].first = true
                    sortedMessages[i].unique = false
                    let k = i
                    while (sortedMessages[k].userId === sortedMessages[k + 1]?.userId && sortedMessages[k + 1].userId) {
                        k++
                    }
                    sortedMessages[k-1].last = false
                    sortedMessages[k].last = true
                    i = k
                }
                if (sortedMessages[i].userId !== sortedMessages[i + 1]?.userId && !sortedMessages[i].last) {
                    sortedMessages[i].unique = true
                }
            }
        }
        setFinalSortedMessages(sortedMessages)
    }, [messages])


    useEffect(() => {
        const onOpenHandler = (e: MessageEvent) => {
            const newMessages = JSON.parse(e.data);
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
            const elem = document.getElementById('data');
            setTimeout(() => {if(elem) {
                elem.scrollTop = elem.scrollHeight;
            }}, 5)
        };
        wsChannel?.addEventListener('message', onOpenHandler)

        return () => {
            wsChannel?.removeEventListener('message', onOpenHandler)
        }
    }, [wsChannel])

    return (
        <div id={'data'} className={style.messagesWrapper}>
            {finalSortedMessages.map((m: ChatMessageType, i) =>
                <Message
                    key={i}
                    userName={m.userName}
                    message={m.message}
                    userId={m.userId}
                    photo={m.photo}
                    first={m.first}
                    last={m.last}
                    unique={m.unique}
                />
            )}
        </div>
    );
};