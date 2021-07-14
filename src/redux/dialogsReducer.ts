import {v1} from "uuid";
import dimych from "../assets/img/dimych.jpg";
import andrey from "../assets/img/andrey.jpg";
import sveta from "../assets/img/sveta.jpg";
import {ActionTypes} from "./reduxStore";


export type DialogsItemPropsType = {
    id: string
    userName: string
    avatar?: string
}

export type MessagePropsType = {
    messageText: string
    id: string
}

export type DialogsInitialStateType = typeof initialState




const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';

const initialState = {
    dialogsData: [
        {id: v1(), userName: "Dimych", avatar: dimych},
        {id: v1(), userName: "Andrey", avatar: andrey},
        {id: v1(), userName: "Sveta", avatar: sveta},
        {id: v1(), userName: "Sasha"},
        {id: v1(), userName: "Viktor"},
        {id: v1(), userName: "Valera"}
    ] as Array<DialogsItemPropsType>,

    messageData: [
        {id: v1(), messageText: "HI"},
        {id: v1(), messageText: "Hello"},
        {id: v1(), messageText: "YO"}
    ] as Array<MessagePropsType>,

    newMessageText: ''
}

const dialogsReducer = (state: DialogsInitialStateType = initialState,
                        action: ActionTypes): DialogsInitialStateType => {


    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessagePropsType = {
                id: v1(),
                messageText: state.newMessageText
            };
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
                newMessageText: ''
            }

        case CHANGE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state;
    }

}


export const addMessageActionCreator = () => ({type: ADD_MESSAGE} as const)

export const changeMessageTextActionCreator = (newText: string) => ({
        type: CHANGE_MESSAGE_TEXT,
        newText: newText
    } as const
)

export default dialogsReducer