import {ActionType, DialogsPageDataType, MessagePropsType, PostPropsType} from "./PropsType";
import {v1} from "uuid";

const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';

const dialogsReducer = (state: DialogsPageDataType, action: ActionType) => {
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


export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const changeMessageTextActionCreator = (text: string) => ({
    type: CHANGE_MESSAGE_TEXT,
    newText: text
})

export default dialogsReducer