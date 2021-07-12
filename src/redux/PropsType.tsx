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
    dialogsData: Array<DialogsItemPropsType>
    messageData: Array<MessagePropsType>
    newMessageText: string
    dispatch: (action: any) => void
}

export type DialogsPageDataType = {
    dialogsData: Array<DialogsItemPropsType>
    messageData: Array<MessagePropsType>
    newMessageText: string
}

export type PostPropsType={
    id: string
    postContent: string
    postLikes: number
}

export type PostDataPropsType={
    postsData: Array<PostPropsType>
    messageForNewPost: string
    dispatch: (action: any) => void
}

export type ProfilePageDataType={
    postsData: Array<PostPropsType>
    messageForNewPost: string
}

export type ProfilePagePropsType={
    postsData: Array<PostPropsType>
    messageForNewPost: string
    dispatch: (action: any) => void

}

export type AppPropsType={
    store: StoreType
}

export type ContactsDataPropsType={
    id: string
    userName: string
    avatar?: string
}

export type RightNavDataPropsType={
    contactsData: Array<ContactsDataPropsType>
}


export type StateType ={
    dialogsPage: DialogsPageDataType
    profilePage:ProfilePageDataType
    rightNavbar: RightNavDataPropsType
}

export type ActionType ={
    type: 'ADD-POST' | 'CHANGE-POST-TEXT' | 'ADD-MESSAGE' | 'CHANGE-MESSAGE-TEXT'
    newText: string
}

export type StoreType ={
    subscribe: (subscriber: ()=> void)=> void
    getState: ()=> StateType
    dispatch: (action: ActionType)=> void
}
export type OldStoreType ={
    _onChange: ()=>void
    _state: StateType
    subscribe: (subscriber: ()=> void)=> void
    getState: ()=> StateType
    dispatch: (action: ActionType)=> void
}