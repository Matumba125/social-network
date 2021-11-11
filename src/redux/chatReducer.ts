import {ActionTypes} from "./reduxStore";
import {Dispatch} from "redux";
import {chatAPI, ChatMessageType} from "../api/chat-api";


type ChatInitialStateType = {
    messages: ChatMessageType[]
    isReady: boolean
}

const initialState: ChatInitialStateType = {
    messages: [],
    isReady: false
}

const chatReducer = (state: ChatInitialStateType = initialState,
                     action: ActionTypes): ChatInitialStateType => {
    switch (action.type) {
        case 'chat/SET-MESSAGES':
            return {
                ...state,
                messages: [...state.messages, ...action.messages]
            }
        case 'chat/SET-IS-READY':
            return {
                ...state,
                isReady: action.isReady
            }
        case "chat/STOP-CHAT":
            return {
                ...state,
                messages: []
            }

        default:
            return state;
    }
}

export const setMessages = (messages: ChatMessageType[]) => ({
    type: 'chat/SET-MESSAGES',
    messages
} as const)
export const setIsReady = (isReady: boolean) => ({
    type: 'chat/SET-IS-READY',
    isReady
} as const)

export const stopChatAC = () =>({
    type: 'chat/STOP-CHAT'
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

let _statusHandler: ((status: boolean) => void) | null = null
const statusHandler = (dispatch: Dispatch<ActionTypes>) => {
    if (_statusHandler === null) {
        _statusHandler = (status) => {
            dispatch(setIsReady(status))
        }
    }
    return _statusHandler
}


export const startChat = () => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        chatAPI.start()
        chatAPI.subscribe('messagesReceived',newMessageHandler(dispatch));
        chatAPI.subscribe('statusChanged',statusHandler(dispatch));
    }
}

export const stopChat = () => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        chatAPI.unsubscribe('messagesReceived',newMessageHandler(dispatch));
        chatAPI.unsubscribe('statusChanged',statusHandler(dispatch));
        dispatch(stopChatAC())
        chatAPI.stop()
    }
}

export const sendMessage = (message: string) => {
    return async (dispatch: Dispatch) => {
        chatAPI.sendMessage(message)
    }
}

export default chatReducer