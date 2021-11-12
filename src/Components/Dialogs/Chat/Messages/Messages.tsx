import React, {UIEvent, useEffect, useState} from 'react';
import {ChatMessageType} from '../../../../api/chat-api';

import Message from "./Message/Message";
import style from './Messages.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/reduxStore";
import {Badge, Button} from "antd";
import {DownCircleOutlined} from '@ant-design/icons/lib/icons';
import {getCurrentUserId} from "../../../../redux/Selectors";
import UserMessage from "./Message/UserMessage";


export const Messages: React.FC = () => {

    const [finalSortedMessages, setFinalSortedMessages] = useState<ChatMessageType[]>([])

    const messages = useSelector<AppStateType, ChatMessageType[]>(state => state.chat.messages)
    const currentUserId = useSelector(getCurrentUserId)

    const [autoScroll, setAutoScroll] = useState<boolean>(true)

    const [messagesCounter, setMessagesCounter] = useState<number>(-2)

    const elem = document.getElementById('data');

    useEffect(() => {
        const sortedMessages = messages.slice()
        if (messages) {
            for (let i = 0; i < sortedMessages.length; i++) {
                if (sortedMessages[i].userId === currentUserId) {
                    sortedMessages[i].userMessage = true
                }
            }
            for (let i = 0; i < sortedMessages.length; i++) {
                if (sortedMessages[i].userId === sortedMessages[i + 1]?.userId && sortedMessages[i].userId !== sortedMessages[i - 1]?.userId) {
                    sortedMessages[i].first = true
                    sortedMessages[i].unique = false
                    let k = i
                    while (sortedMessages[k].userId === sortedMessages[k + 1]?.userId && sortedMessages[k + 1].userId) {
                        k++
                    }
                    sortedMessages[k - 1].last = false
                    sortedMessages[k].last = true
                    i = k
                }
                if (sortedMessages[i].userId !== sortedMessages[i + 1]?.userId && !sortedMessages[i].last) {
                    sortedMessages[i].unique = true
                }
            }
        }
        setFinalSortedMessages(sortedMessages)
        setMessagesCounter(messagesCounter + 1)

        setTimeout(() => {
            if (elem && autoScroll) {
                elem.scrollTop = elem.scrollHeight;
            }
        }, 5)
    }, [messages])

    const onScrollHandler = (e: UIEvent<HTMLDivElement>) => {
        const element = e.currentTarget
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 150) {
            setAutoScroll(true)
        } else {
            setAutoScroll(false)
        }
    }

    const onButtonClickHandler = () => {
        if (elem) {
            elem.scrollTop = elem.scrollHeight;
            setMessagesCounter(0)
        }
    }


    return (
        <div id={'data'} className={style.messagesWrapper} onScroll={onScrollHandler}>
            {!autoScroll && <Button
                type={"text"}
                icon={
                    <Badge count={messagesCounter} size={'small'}>
                        <DownCircleOutlined style={{fontSize: '25px'}}/>
                    </Badge>
                }
                className={style.badge}
                size={'large'}
                onClick={onButtonClickHandler}
            />}

            {finalSortedMessages.map((m: ChatMessageType, i) =>
                m.userMessage ?
                    <UserMessage
                        message={m.message}
                        last={m.last}
                        first={m.first}
                        unique={m.unique}
                    /> :
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