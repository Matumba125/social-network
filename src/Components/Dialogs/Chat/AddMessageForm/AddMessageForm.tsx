import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import TextArea from "antd/lib/input/TextArea";
import style from './AddMessageForm.module.css'
import {Button} from "antd";
import {SendOutlined} from '@ant-design/icons';

type AddMessageFormPropsType = {
    wsChannel: WebSocket | null
}

export const AddMessageForm: React.FC<AddMessageFormPropsType> = ({wsChannel, ...restProps}) => {

    const [newMessage, setNewMessage] = useState<string>('')
    const [isReady, setIsReady] = useState<boolean>(false)

    useEffect(() => {
        const openHandler = () => {
            setIsReady(true)
        };
        wsChannel && wsChannel.addEventListener('open', openHandler)
        return () => {
            wsChannel?.removeEventListener('open', openHandler)
        }
    }, [wsChannel])

    const onMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessage(e.target.value)
    }

    const onEnterPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === 'Enter' && !e.shiftKey){
            e.preventDefault()
            sendMessage()
        }
    }


    const sendMessage = () => {
        if (!newMessage) {
            return
        }
        wsChannel && wsChannel.send(newMessage)
        setNewMessage('')
    }

    return (
        <div className={style.addMessage}>

            <TextArea
                className={style.messageInput}
                autoSize={{minRows: 1,}}
                value={newMessage}
                onChange={onMessageTextHandler}
                onKeyPress={onEnterPressHandler}
            />

            <Button
                icon={<SendOutlined style={{color: 'rgba(0, 0, 0, 0.85)'}}/>}
                type={'text'}
                className={style.sendBtn}
                onClick={sendMessage}
                disabled={!isReady}
            />
        </div>
    );
};