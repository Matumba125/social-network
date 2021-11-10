import React, {useEffect} from 'react';
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";
import {Messages} from './Messages/Messages';
import style from './Chat.module.css'
import {useDispatch} from "react-redux";
import {startChat, stopChat} from "../../../redux/chatReducer";


export const Chat: React.FC = props => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startChat())

        return (() => {
            dispatch(stopChat())
        })
    }, [])

    return (
        <div className={style.chatWrapper}>
            <Messages/>
            <AddMessageForm/>
        </div>
    );
};
