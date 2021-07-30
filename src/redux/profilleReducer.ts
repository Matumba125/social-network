import {v1} from "uuid";
import {ActionTypes} from "./reduxStore";
import {PhotosType} from "./usersReducer";
import myPhoto from "../assets/img/userAvatar.jpg"


export type PostType = {
    id: string
    postContent: string
    postLikes: number
}

type ContactsType ={
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
    aboutMe?: string
    contacts?: ContactsType
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    userID?: number
    photos: PhotosType
    fullName: string
}

export type ProfileInitialStateType = {
    profile: ProfileDataType
    messageForNewPost: string
    postsData: Array<PostType>
}

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState: ProfileInitialStateType = {
    profile:{
        photos:{
            large: myPhoto,
            small: myPhoto,
        },
        fullName: 'Nikita'
    },
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
        case SET_USER_PROFILE: {
            debugger
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)

export const changePostTextActionCreator = (newText: string) => ({
        type: CHANGE_POST_TEXT,
        newText: newText
    } as const
)

export const setUserProfile = (profile: ProfileDataType) => ({
    type: SET_USER_PROFILE,
    profile
} as const)

export default profileReducer