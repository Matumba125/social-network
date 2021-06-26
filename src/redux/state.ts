import {v1} from "uuid";
import {StateType} from "./PropsType";
import dimych from "./img/dimych.jpg"
import sveta from "./img/sveta.jpg"
import andrey from "./img/andrey.jpg"

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

export default state