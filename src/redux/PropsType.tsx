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
}

export type ProfilePagePropsType={
        postsData: Array<PostPropsType>
}

type SidebarType={}

export type AppPropsType={
    state: StateType
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
    profilePage:ProfilePagePropsType
    rightNavbar: RightNavDataPropsType
}