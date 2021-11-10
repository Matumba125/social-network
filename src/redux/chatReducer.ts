import {ActionTypes} from "./reduxStore";
import {Dispatch} from "redux";
import {chatAPI, ChatMessageType} from "../api/chat-api";


const initialState = {
    messages: [] as ChatMessageType[]
}

const chatReducer = (state = initialState,
                     action: ActionTypes) => {
    switch (action.type) {
        case 'chat/SET-MESSAGES':
            return {
                ...state,
                messages: [...state.messages, ...action.messages]
            }

        default:
            return state;
    }
}

export const setMessages = (messages: ChatMessageType[]) => ({
    type: 'chat/SET-MESSAGES',
    messages
} as const)

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null

const newMessageHandler = (dispatch: Dispatch<ActionTypes>) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(setMessages(messages))
        }
    }
    return _newMessageHandler
}


export const startChat = () => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        chatAPI.start()
        chatAPI.subscribe(newMessageHandler(dispatch));
    }
}

export const stopChat = () => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        chatAPI.subscribe(newMessageHandler(dispatch))();
    }
}

export const sendMessage = (message: string) => {
   return async (dispatch: Dispatch) => {
       chatAPI.sendMessage(message)
   }
}

export default chatReducer