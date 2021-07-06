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
    addMessage: ()=> void
    changeMessageTextCallback: (newText: string) => void
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
    addPost: ()=> void
    messageForNewPost: string
    changePostTextCallback: (newText: string)=> void
}

export type ProfilePageDataType={
    postsData: Array<PostPropsType>
    messageForNewPost: string
}

export type ProfilePagePropsType={
    postsData: Array<PostPropsType>
    addPost: ()=>void
    messageForNewPost: string
    changePostTextCallback: (newText: string)=> void
}

export type AppPropsType={
    state: StateType
    addPost: ()=>void
    changePostTextCallback: (newText: string)=> void
    addMessage: ()=> void
    changeMessageTextCallback: (newText: string) => void
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