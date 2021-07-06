import {v1} from "uuid";
import {MessagePropsType, PostPropsType, StateType} from "./PropsType";
import dimych from "./img/dimych.jpg"
import sveta from "./img/sveta.jpg"
import andrey from "./img/andrey.jpg"

let onChange = () =>{}

export const observer = (subscriber: ()=> void ) =>{
    onChange = subscriber
}

const state: StateType = {
    dialogsPage: {
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
    },

    profilePage: {
        messageForNewPost: '',
        postsData: [
            {
                id: v1(),
                postContent: "Hello World !!!",
                postLikes: 15
            },
            {
                id: v1(),
                postContent: "It's my first post!!",
                postLikes: 28
            }
        ]
    },

    rightNavbar: {
        contactsData: [
            {id: v1(), userName: "Dimych", avatar: dimych},
            {id: v1(), userName: "Andrey", avatar: andrey},
            {id: v1(), userName: "Sveta", avatar: sveta}
        ]
    }

}


export const changePostText = (newText: string) => {
    state.profilePage.messageForNewPost = newText;
    onChange();
}

export const addPost = () => {
    let newPost: PostPropsType = {
        id: v1(),
        postContent: state.profilePage.messageForNewPost,
        postLikes: 0
    };
    state.profilePage.postsData.unshift(newPost);
    changePostText('')
    onChange();
}

export const changeMessageText = (newText: string) => {
    state.dialogsPage.newMessageText = newText;
    onChange();
}

export const addMessage = () => {
    let newMessage: MessagePropsType = {
        id: v1(),
        messageText: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messageData.push(newMessage);
    changeMessageText('')
    onChange();
}


export default state