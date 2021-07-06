import {v1} from "uuid";
import {MessagePropsType, PostPropsType, StoreType} from "./PropsType";
import dimych from "./img/dimych.jpg"
import sveta from "./img/sveta.jpg"
import andrey from "./img/andrey.jpg"

let store: StoreType = {
    _state: {
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

    },
    _onChange() {
    },

    observer(subscriber: () => void) {
        this._onChange = subscriber
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: PostPropsType = {
                id: v1(),
                postContent: this._state.profilePage.messageForNewPost,
                postLikes: 0
            };
            this._state.profilePage.postsData.unshift(newPost);
            this.dispatch({type: 'CHANGE-POST-TEXT', newText:''})
            this._onChange();
        } else if (action.type === 'CHANGE-POST-TEXT') {
            this._state.profilePage.messageForNewPost = action.newText;
            this._onChange();
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage: MessagePropsType = {
                id: v1(),
                messageText: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messageData.push(newMessage);
            this.dispatch({type: 'CHANGE-MESSAGE-TEXT', newText:''})
            this._onChange();
        } else if (action.type === 'CHANGE-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._onChange();
        }
    },
}


export default store