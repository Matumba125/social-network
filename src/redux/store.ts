import {v1} from "uuid";
import {ActionTypes, OldStoreType, StateType} from "./PropsType";
import dimych from "./img/dimych.jpg"
import sveta from "./img/sveta.jpg"
import andrey from "./img/andrey.jpg"
import profileReducer from "./profilleReducer";
import dialogsReducer from "./dialogsReducer";
import rightNavbarReducer from "./rightNavbarReducer";

let store: OldStoreType = {
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

    _callSubscriber(state: StateType) {
    },

    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action:ActionTypes) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.rightNavbar = rightNavbarReducer(this._state.rightNavbar, action);

        this._callSubscriber(this._state)
    },
}

export default store