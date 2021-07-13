import {addPostActionCreator, changePostTextActionCreator} from './profilleReducer'
import {addMessageActionCreator, changeMessageTextActionCreator} from "./dialogsReducer";

export type DialogsItemPropsType = {
    id: string
    userName: string
    avatar?: string
}

export type MessagePropsType = {
    messageText: string
    id: string
}

export type DialogsPagePropsType = {
    dialogsPage: DialogsPageDataType
    addMessage: ()=> void
    changeMessageText: (text: string) => void
}

export type DialogsPageDataType = {
    dialogsData: Array<DialogsItemPropsType>
    messageData: Array<MessagePropsType>
    newMessageText: string
}

export type PostPropsType = {
    id: string
    postContent: string
    postLikes: number
}

export type PostDataPropsType = {
    postsData: Array<PostPropsType>
    messageForNewPost: string
    addPost: () => void
    changePostText: (text: string) => void
}

export type ProfilePageDataType = {
    postsData: Array<PostPropsType>
    messageForNewPost: string
}

export type ContactsDataPropsType = {
    id: string
    userName: string
    avatar?: string
}

export type RightNavDataPropsType = {
    contactsData: Array<ContactsDataPropsType>
}

export type AppPropsType={}


//ActionCreators

export type ActionTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof changePostTextActionCreator> |
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof changeMessageTextActionCreator>


//StoreTypes

export type StateType = {
    dialogsPage: DialogsPageDataType
    profilePage: ProfilePageDataType
    rightNavbar: RightNavDataPropsType
}

export type StoreType = {
    subscribe: (subscriber: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}
export type OldStoreType = {
    _callSubscriber: (state: StateType) => void
    _state: StateType
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}