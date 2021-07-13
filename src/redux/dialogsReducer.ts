import {
    ActionTypes,
    DialogsPageDataType,
    MessagePropsType
} from "./PropsType";
import {v1} from "uuid";
import dimych from "./img/dimych.jpg";
import andrey from "./img/andrey.jpg";
import sveta from "./img/sveta.jpg";

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
    ],
    newMessageText: '',
    messageData: [
        {id: v1(), messageText: "HI"},
        {id: v1(), messageText: "Hello"},
        {id: v1(), messageText: "YO"}
    ]
}

const dialogsReducer = (state: DialogsPageDataType = initialState,
                        action: ActionTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessagePropsType = {
                id: v1(),
                messageText: state.newMessageText
            };
            state.messageData.push(newMessage);
            state.newMessageText = '';
            return state;
        case CHANGE_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state;
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