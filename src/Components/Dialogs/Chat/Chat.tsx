import React, {useEffect, useState} from 'react';
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";
import {Messages} from './Messages/Messages';
import style from './Chat.module.css'


export const Chat: React.FC = props => {

    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

    useEffect(() => {

        let ws: WebSocket

        const closeHandler = () => {
            setTimeout(createChannel, 3000)
        };

        function createChannel() {

            ws?.removeEventListener('close', closeHandler)
            ws?.close()
            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

            wsChannel?.addEventListener('close', closeHandler)
            setWsChannel(ws)
        }

        createChannel()

        return () => {
            ws.removeEventListener('close', closeHandler)
            ws.close()
        }
    }, [])

    useEffect(() => {
        wsChannel?.addEventListener('close', () => {
        })
    }, [wsChannel])

    return (
        <div className={style.chatWrapper}>
            <Messages wsChannel={wsChannel}/>
            <AddMessageForm wsChannel={wsChannel}/>
        </div>
    );
};
