import {ActionTypes} from "./reduxStore";


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


export default authReducer;