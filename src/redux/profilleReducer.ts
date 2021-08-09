import {v1} from "uuid";
import {ActionTypes} from "./reduxStore";
import {PhotosType} from "./usersReducer";
import myPhoto from "../assets/img/userAvatar.jpg"
import {Dispatch} from "redux";
import {ProfileAPI} from "../api/api";


export type PostType = {
    id: string
    postContent: string
    postLikes: number
}

type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}


export type ProfileDataType = {
    aboutMe: string
    contacts?: ContactsType
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    userID?: number
    photos: PhotosType
    fullName: string
}

export type ProfileInitialStateType = {
    profile: ProfileDataType
    status: string
    messageForNewPost: string
    postsData: Array<PostType>
}

const ADD_POST = 'ADD-POST';
const SET_STATUS = 'SET-STATUS';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
const CHANGE_ABOUT_TEXT = 'CHANGE-ABOUT-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState: ProfileInitialStateType = {
    profile: {
        photos: {
            large: myPhoto,
            small: myPhoto,
        },
        fullName: 'Nikita',
        aboutMe: 'Zdarova',
    },
    status: '',
    messageForNewPost: '',
    postsData: [
        {
            id: v1(),
            postContent: "Hello World !!!",
            postLikes: 15,

        },
        {
            id: v1(),
            postContent: "It's my first post!!",
            postLikes: 28
        }
    ],
}

const profileReducer = (state: ProfileInitialStateType = initialState,
                        action: ActionTypes): ProfileInitialStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: v1(),
                postContent: state.messageForNewPost,
                postLikes: 0
            };
            return {
                ...state,
                postsData: [newPost, ...state.postsData],
                messageForNewPost: ''
            }

        case CHANGE_POST_TEXT:
            return {
                ...state,
                messageForNewPost: action.newText
            }/*
        case CHANGE_ABOUT_TEXT:
            return {
                ...state,
                status: action.newText
            }*/
        case SET_STATUS:
            return {
                ...state,
                status: action.newText
            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST} as const)

export const changePostText = (newText: string) => ({
    type: CHANGE_POST_TEXT,
    newText
} as const)

export const setUserProfile = (profile: ProfileDataType) => ({
    type: SET_USER_PROFILE,
    profile
} as const)

export const changeAboutText = (newText: string) => ({
    type: CHANGE_ABOUT_TEXT,
    newText
} as const)

export const setStatus = (newText: string) => ({type: SET_STATUS, newText} as const)

export const getProfile = (userId: string) => {
    return (dispatch: Dispatch<ActionTypes>) => {
        ProfileAPI.getProfileInfo(userId).then(data => {
            dispatch(setUserProfile(data))
        });
    }
}
export const getStatus = (userId: string) => {
    return (dispatch: Dispatch<ActionTypes>) => {
        ProfileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        });
    }
}
export const updateStatus = (newStatus: string) => {
    return (dispatch: Dispatch<ActionTypes>) => {
        ProfileAPI.updateStatus(newStatus).then(response => {
            console.log(response)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(newStatus))
            }
        })
    };
}


export default profileReducer