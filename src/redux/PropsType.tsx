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
}

export type PostPropsType={
    id: string
    postContent: string
    postLikes: number
}

export type PostDataPropsType={
    postsData: Array<PostPropsType>
    addPost: (postMessage: string)=> void
    messageForNewPost: string
    changeNewTextCallback: (newText: string)=> void
}

export type ProfilePageDataType={
    postsData: Array<PostPropsType>
    messageForNewPost: string
}

export type ProfilePagePropsType={
    postsData: Array<PostPropsType>
    addPost: (postMessage: string)=>void
    messageForNewPost: string
    changeNewTextCallback: (newText: string)=> void
}

export type AppPropsType={
    state: StateType
    addPost: (postMessage: string)=>void
    changeNewTextCallback: (newText: string)=> void
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
    dialogsPage: DialogsPagePropsType
    profilePage:ProfilePageDataType
    rightNavbar: RightNavDataPropsType
}