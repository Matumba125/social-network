import {v1} from "uuid";
import store, {ActionTypes} from "./reduxStore";
import {PhotosType} from "./usersReducer";
import {Dispatch} from "redux";
import {ProfileAPI} from "../api/api";


export type PostType = {
    id: string
    postContent: string
}

type ContactsType = {
    facebook?: string
    website?: string
    vk?: string
    twitter?: string
    instagram?: string
    youtube?: string
    github?: string
    mainLink?: string
}


type AdditionalUpdatingType = {
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName: string
    aboutMe: string
}

export type ProfileUpdatingType = ContactsType & AdditionalUpdatingType


export type ProfileDataType = {
    aboutMe: string
    contacts?: ContactsType
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    userId: string
    photos: PhotosType
    fullName: string
}

export type ProfileInitialStateType = {
    profile: ProfileDataType
    status: string
    isLoading: boolean
    postsData: Array<PostType>
}

const ADD_POST = 'ADD-POST';
const SET_STATUS = 'SET-STATUS';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState: ProfileInitialStateType = {
    profile: {
        photos: {
            large: '',
            small: '',
        },
        fullName: '',
        aboutMe: '',
        userId: '',
    },
    status: '',
    isLoading: false,
    postsData: [
        {
            id: v1(),
            postContent: "It's a test data"

        },
        {
            id: v1(),
            postContent: "Current API doesn't support posts"
        }
    ],
}

const profileReducer = (state: ProfileInitialStateType = initialState,
                        action: ActionTypes): ProfileInitialStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: v1(),
                postContent: action.newPostText
            };
            return {
                ...state,
                postsData: [newPost, ...state.postsData],
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.newText
            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case "profile/SET-LOADING":
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
}

export const addPost = (newPostText: string) => ({
    type: ADD_POST,
    newPostText,
} as const)


export const setUserProfile = (profile: ProfileDataType) => ({
    type: SET_USER_PROFILE,
    profile
} as const)

export const setLoadingStatus = (isLoading: boolean) => ({
    type: 'profile/SET-LOADING',
    isLoading
} as const)

export const setStatus = (newText: string) => ({type: SET_STATUS, newText} as const)

export const getProfile = (userId: string) => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        try {
            dispatch(setLoadingStatus(true))
            const res = await ProfileAPI.getProfileInfo(userId)
            dispatch(setUserProfile(res.data))
        } finally {
            dispatch(setLoadingStatus(false))
        }
    }
}
export const getStatus = (userId: string) => {
    return (dispatch: Dispatch<ActionTypes>) => {
        ProfileAPI.getStatus(userId)
            .then(response => {
            dispatch(setStatus(response.data))
        });
    }
}
export const updateStatus = (newStatus: string) => {
    return (dispatch: Dispatch<ActionTypes>) => {
        ProfileAPI.updateStatus(newStatus).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(newStatus))
            }
        })
    };
}

export const updateProfile = (data: ProfileUpdatingType) => {
    const state = store.getState()
    const updatedProfile = {
        userID: state.profilePage.profile.userId,
        lookingForAJob: data.lookingForAJob,
        lookingForAJobDescription: data.lookingForAJobDescription ? data.lookingForAJobDescription : '-',
        fullName: data.fullName,
        aboutMe: data.aboutMe ? data.aboutMe : '-',
        contacts: {
            github: data.github,
            vk: data.vk,
            facebook: data.facebook,
            instagram: data.instagram,
            twitter: data.twitter,
            website: data.website,
            youtube: data.youtube,
            mainLink: data.mainLink,
        },
    }
    return (dispatch: Dispatch) => {
        ProfileAPI.updateProfile(updatedProfile)
            .then(() => {
                //@ts-ignore
                dispatch(getProfile(state.auth.data.id))
            })
    }
}

export const updatePhoto = (image: File) => {
    const userId = store.getState().auth.data.id
    return (dispatch: Dispatch) => {
        ProfileAPI.updatePhoto(image)
            .then(() => {
                //@ts-ignore
                dispatch(getProfile(userId))
            })
    }
}


export default profileReducer