import {v1} from "uuid";
import {PostPropsType, StateType} from "./PropsType";
import dimych from "./img/dimych.jpg"
import sveta from "./img/sveta.jpg"
import andrey from "./img/andrey.jpg"
import {rerenderEntireTree} from "../render";

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


export const addPost = (postMessage: string) => {
    let newPost: PostPropsType = {
        id: v1(),
        postContent: postMessage,
        postLikes: 0
    };
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
}

export const changeNewText = (newText: string) => {
    state.profilePage.messageForNewPost = newText;
    rerenderEntireTree(state)
}

export default state