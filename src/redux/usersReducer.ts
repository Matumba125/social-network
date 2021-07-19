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
    pageSize: number
    totalCount: number
    currentPage: number
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

let initialState: InitialStateType = {
        users: [],
        pageSize: 5,
        totalCount: 0,
        currentPage: 1
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
            return {...state, users: [ ...action.users]}
        case  SET_CURRENT_PAGE:
        {
                return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:
        {
            return {...state, totalCount: action.totalCount}
        }
        default:
            return state;
    }
}

export const followAC = (id: number) => ({
    type: FOLLOW,
    id
} as const)
export const unfollowAC = (id: number) => ({
    type: UNFOLLOW,
    id
} as const)
export const setUsersAC = (users: Array<UserType>) => ({
    type: SET_USERS,
    users
} as const)
export const setCurrentPageAC = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
} as const)
export const  setTotalUsersCountAC = (totalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
} as const)


export default usersReducer