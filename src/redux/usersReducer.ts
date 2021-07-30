import {ActionTypes} from "./reduxStore";

/*type AddressType ={
    country: string
    city: string
}*/

export type PhotosType ={
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
    isFetching: boolean
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const CHANGE_FETCHING_STATUS = 'CHANGE-FETCHING-STATUS';

let initialState: InitialStateType = {
        users: [],
        pageSize: 5,
        totalCount: 0,
        currentPage: 1,
        isFetching: false
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
        case CHANGE_FETCHING_STATUS:
        {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const follow = (id: number) => ({
    type: FOLLOW,
    id
} as const)
export const unfollow = (id: number) => ({
    type: UNFOLLOW,
    id
} as const)
export const setUsers = (users: Array<UserType>) => ({
    type: SET_USERS,
    users
} as const)
export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
} as const)
export const  setTotalUsersCount = (totalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
} as const)
export const changeFetchingStatus = (isFetching: boolean) =>({
    type: CHANGE_FETCHING_STATUS,
    isFetching
} as const)


export default usersReducer