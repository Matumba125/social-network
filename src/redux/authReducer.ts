import {ActionTypes} from "./reduxStore";
import {Dispatch} from "redux";
import {AuthorizeAPI} from "../api/api";
import {FormDataType} from "../Components/Login/Login";


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
        default:
            return state;
    }
}

export const setUserData = (data: DataType) => ({
    type: SET_USER_DATA,
    data
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

export const loginUser = (formData: FormDataType) => {
    return (dispatch: Dispatch) => {
        AuthorizeAPI.loginUser(formData).then(response => {
            console.log(response)
            if (response.data.resultCode === 0) {
            }
        })
    }
}
export const logoutUser = () => {
    return (dispatch: Dispatch) => {
        AuthorizeAPI.logoutUser().then(response => {
            if (response.data.resultCode === 0) {
            }
        })
    }
}

export default authReducer;