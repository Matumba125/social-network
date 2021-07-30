import {ActionTypes} from "./reduxStore";
import {ProfileInitialStateType} from "./profilleReducer";

type DialogsItemPropsType = {
    id: string
    userName: string
    avatar?: string
}
type MessagePropsType = {
    messageText: string
    id: string
}

export type DialogsPagePropsType = {
    dialogsPage: DialogsPageDataType
    addMessage: ()=> void
    changeMessageText: (text: string) => void
}

type DialogsPageDataType = {
    dialogsData: Array<DialogsItemPropsType>
    messageData: Array<MessagePropsType>
    newMessageText: string
}

export type PostPropsType = {
    id: string
    postContent: string
    postLikes: number
}

export type ProfilePageDataType = {
    postsData: Array<PostPropsType>
    messageForNewPost: string
}

export type ContactsDataPropsType = {
    id: string
    userName: string
    avatar: string
}

export type RightNavDataPropsType = {
    contactsData: Array<ContactsDataPropsType>
}


//ActionCreators


//StoreTypes

export type StateType = {
    dialogsPage: DialogsPageDataType
    profilePage: ProfileInitialStateType
    rightNavbar: RightNavDataPropsType
}
export type OldStoreType = {
    _callSubscriber: (state: StateType) => void
    _state: StateType
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}