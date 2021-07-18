import {ActionTypes} from "./reduxStore";

/*type AddressType ={
    country: string
    city: string
}*/

type PhotosType ={
    large: string
    small: string
}

export type UserType ={
    id: number
    name: string
    avatar: string
    followed: boolean
    status: string
    photos: PhotosType
    /*address: AddressType*/
}

export type InitialStateType ={
    users: Array<UserType>
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState: InitialStateType = {
        users: []
}

const usersReducer = (state:InitialStateType = initialState,
                      action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
               users: state.users.map(m =>
                   m.id === action.id ? {...m, followed: true} : m),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(m =>
                m.id === action.id ? {...m, followed: false} : m)
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (id: number) => ({
    type: FOLLOW, id: id
} as const)
export const unfollowAC = (id: number) => ({
    type: UNFOLLOW,
    id: id
} as const)
export const setUsersAC = (users: Array<UserType>) => ({
    type: SET_USERS,
    users: users
} as const)


export default usersReducer