import {ActionTypes} from "./reduxStore";
import {Dispatch} from "redux";
import {AuthorizeAPI} from "../api/api";
import {FormikErrorType} from "../Components/Login/Login";


export type DataType = {
    id: number | null
    email: string | null
    login: string | null
}

export type AuthInitialStateType = {
    data: DataType
    isAuth: boolean
}

const SET_USER_DATA = 'SET-USER-DATA';
const USER_BEEN_LOGINED = 'USER_BEEN_LOGINED'
const USER_BEEN_LOGINED_OUT = 'USER_BEEN_LOGINED_OUT'

let initialState: AuthInitialStateType = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false
}

const authReducer = (state: AuthInitialStateType = initialState,
                     action: ActionTypes): AuthInitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: action.data,
                isAuth: true,
            }
        case USER_BEEN_LOGINED:
            return {
                ...state,
                isAuth: true
            }
        case USER_BEEN_LOGINED_OUT:
            return {
                ...state,
                isAuth: false
            }
        default:
            return state;
    }
}

export const setUserData = (data: DataType) => ({
    type: SET_USER_DATA,
    data
} as const)

export const userBeenLogined = () => ({
    type: USER_BEEN_LOGINED
} as const)

export const userBeenLoginedOut = () => ({
    type: USER_BEEN_LOGINED_OUT
} as const)


export const authUser = () => {
    return (dispatch: Dispatch<ActionTypes>) => {
        AuthorizeAPI.authorizeUser().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data))
            }
        });
    }
}

export const loginUser = (formData: FormikErrorType) => {
    return (dispatch: Dispatch) => {
        AuthorizeAPI.loginUser(formData).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(userBeenLogined())
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