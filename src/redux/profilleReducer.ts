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
    textForAboutMe: string
    messageForNewPost: string
    postsData: Array<PostType>
}

const ADD_POST = 'ADD-POST';
const SET_ABOUT = 'SET-ABOUT';
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
    textForAboutMe: '',
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
            }
        case CHANGE_ABOUT_TEXT:
            return {
                ...state,
                textForAboutMe: action.newText
            }
        case SET_ABOUT:
            return {
                ...state,
                profile:{
                    aboutMe: action.newText,
                    photos: state.profile.photos,
                    fullName: state.profile.fullName,
                },
                textForAboutMe: ''
            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)

export const changePostTextActionCreator = (newText: string) => ({
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

export const setAboutText = (newText: string) => ({type: SET_ABOUT, newText} as const)

export const getProfile = (userId: string) => {
    return (dispatch: Dispatch<ActionTypes>) => {
        ProfileAPI.getProfileInfo(userId).then(data => {
            dispatch(setUserProfile(data))
        });
    }
}

export default profileReducer