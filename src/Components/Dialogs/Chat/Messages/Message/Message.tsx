import React from 'react';
import style from "./Message.module.css";
import {Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {ChatMessageType} from '../../../../../api/chat-api';
import { NavLink } from 'react-router-dom';


const Message: React.FC<ChatMessageType> = (props) => {

    const messageWrapperStyle = props.last || props.unique ? style.lastMessageWrapper : style.message
    const messageStyle = props.last || props.unique ? style.lastMessage : style.messageContent

    return (
        <div className={messageWrapperStyle}>
          {(props.last || props.unique) &&
            <NavLink to={'/social-network/profile/' + props.userId}><Avatar
                src={props.photo && props.photo}
                icon={!props.photo && <UserOutlined/>}
                className={style.avatar}
                size={40}/>
                <div className={style.svgAppendix}>
                    <svg width="9" height="20" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter x="-50%" y="-14.7%" width="200%" height="141.2%" filterUnits="objectBoundingBox"
                                    id="a">
                                <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                                <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1"
                                                result="shadowBlurOuter1"></feGaussianBlur>
                                <feColorMatrix
                                    values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0"
                                    in="shadowBlurOuter1"></feColorMatrix>
                            </filter>
                        </defs>
                        <g fill="none" fillRule="evenodd">
                            <path
                                d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z"
                                fill="rgb(24, 37, 51)" filter="url(#a)"></path>
                            <path
                                d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z"
                                fill="rgb(24, 37, 51)" className="corner"></path>
                        </g>
                    </svg>
                </div>
            </NavLink>
            }
                <div className={messageStyle}>
            {(props.first || props.unique) &&
                <NavLink to={'/social-network/profile/' + props.userId}>
                <div className={style.name}>{props.userName}</div>
                </NavLink>}
                <div className={style.text}>{props.message}</div>
                </div>
        </div>

    );
};

export default Message;