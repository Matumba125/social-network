import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import TextArea from "antd/lib/input/TextArea";
import style from './AddMessageForm.module.css'
import {Button} from "antd";
import {SendOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {sendMessage} from '../../../../redux/chatReducer';
import {AppStateType} from "../../../../redux/reduxStore";


export const AddMessageForm: React.FC = () => {

    const [newMessage, setNewMessage] = useState<string>('')

    const isReady = useSelector<AppStateType, boolean>(state => state.chat.isReady)

   const dispatch = useDispatch()

    const onMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessage(e.target.value)
    }

    const onEnterPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === 'Enter' && !e.shiftKey){
            e.preventDefault()
            sendMessageHandler()
        }
    }

    const sendMessageHandler = () => {
        if (!newMessage) {
            return
        }
        dispatch(sendMessage(newMessage))
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
                onClick={sendMessageHandler}
                disabled={!isReady}
            />
        </div>
    );
};