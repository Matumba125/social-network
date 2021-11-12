import {ActionTypes} from "./reduxStore";
import {Dispatch} from "redux";
import {AuthorizeAPI} from "../api/api";
import {FormikErrorType} from "../Components/Login/Login";
import {getProfile, getStatus} from "./profilleReducer";


export type DataType = {
    id: string
    email: string
    login: string
}

export type AuthInitialStateType = {
    data: DataType
    isAuth: boolean
    isInitialized: boolean
}

let initialState: AuthInitialStateType = {
    data: {
        id: '',
        email: '',
        login: '',
    },
    isAuth: false,
    isInitialized: false
}

const authReducer = (state: AuthInitialStateType = initialState,
                     action: ActionTypes): AuthInitialStateType => {

    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                data: action.data,
                isAuth: true,
            }
        case 'USER_BEEN_LOGINED':
            return {
                ...state,
                isAuth: true
            }
        case 'USER_BEEN_LOGINED_OUT':
            return {
                ...state,
                isAuth: false
            }
        case 'SET-APP-INITIALIZED':
            return {
                ...state,
                isInitialized: action.isInitialized
            }
        default:
            return state;
    }
}

export const setUserData = (data: DataType) => ({
    type: 'SET-USER-DATA',
    data
} as const)
export const setAppInitialized = (isInitialized: boolean) => ({
    type: 'SET-APP-INITIALIZED',
    isInitialized
} as const)

export const userBeenLogined = () => ({
    type: 'USER_BEEN_LOGINED'
} as const)

export const userBeenLoginedOut = () => ({
    type: 'USER_BEEN_LOGINED_OUT'
} as const)


export const authUser = () => {
    return (dispatch: Dispatch<ActionTypes>) => {
        AuthorizeAPI.authorizeUser().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data))
                //@ts-ignore
                dispatch(getProfile(data.data.id))
                // @ts-ignore
                dispatch(getStatus(data.data.id))
            }
        })
            .finally(() => {
                dispatch(setAppInitialized(true))
            })
    }
}

export const loginUser = (formData: FormikErrorType) => {
    return (dispatch: Dispatch) => {
        AuthorizeAPI.loginUser(formData)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(userBeenLogined())
                    // @ts-ignore
                    dispatch(authUser())
                }
            })
    }
}
export const logoutUser = () => {
    return (dispatch: Dispatch) => {
        AuthorizeAPI.logoutUser().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(userBeenLoginedOut())
            }
        })
    }
}

export default authReducer;