import React, {useEffect, useState} from 'react';
import {ChatMessageType} from '../../../../api/chat-api';

import Message from "./Message/Message";
import style from './Messages.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/reduxStore";


export const Messages: React.FC= () => {

    const [finalSortedMessages, setFinalSortedMessages] = useState<ChatMessageType[]>([])

    const messages = useSelector<AppStateType, ChatMessageType[]>(state => state.chat.messages)

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