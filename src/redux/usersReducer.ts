import {ActionTypes} from "./reduxStore";
import {FollowAPI, UsersAPI} from "../api/api";
import {Dispatch} from "redux";

/*type AddressType ={
    country: string
    city: string
}*/

export type PhotosType = {
    large: string
    small: string
}

export type UserType = {
    id: string
    name: string
    avatar: string
    followed: boolean
    status: string
    photos: PhotosType
    /*address: AddressType*/
}

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    responseInProgress: boolean
    followingUsers: Array<string>
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const CHANGE_FETCHING_STATUS = 'CHANGE-FETCHING-STATUS';
const CHANGE_RESPONSE_STATUS = 'CHANGE-RESPONSE-STATUS';
const SET_PAGE_SIZE = 'SET-PAGE-SIZE';

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    responseInProgress: true,
    followingUsers: [],
}

const usersReducer = (state: InitialStateType = initialState,
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
            return {...state, users: [...action.users]}
        case  SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalCount: action.totalCount}
        }
        case CHANGE_FETCHING_STATUS: {
            return {...state, isFetching: action.isFetching}
        }
        case CHANGE_RESPONSE_STATUS: {
            return {
                ...state,
                followingUsers: action.responseInProgress
                    ? [...state.followingUsers, action.id]
                    : state.followingUsers.filter(id => id !== action.id)
            }
        }
        default:
            return state;
    }
}

export const follow = (id: string) => ({
    type: FOLLOW,
    id
} as const)
export const unfollow = (id: string) => ({
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
export const setTotalUsersCount = (totalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
} as const)
export const changeFetchingStatus = (isFetching: boolean) => ({
    type: CHANGE_FETCHING_STATUS,
    isFetching
} as const)
export const changeResponseStatus = (responseInProgress: boolean, id: string) => ({
    type: CHANGE_RESPONSE_STATUS,
    responseInProgress,
    id,
} as const)

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<ActionTypes>) => {
        dispatch(changeFetchingStatus(true))
        UsersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items))
                dispatch(setCurrentPage(currentPage))
                dispatch(setTotalUsersCount(data.totalCount))
                dispatch(changeFetchingStatus(false))

            });
    }
}

export const followUnfollow = (id: string, following: boolean) => {
    return (dispatch: Dispatch<ActionTypes>) => {
        dispatch(changeResponseStatus(true, id))
        if (following) {
            FollowAPI.unfollowUser(id)
                .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(unfollow(id))
                        dispatch(changeResponseStatus(false, id))
                    }
                })
        } else {
            FollowAPI.followUser(id)
                .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(follow(id))
                        dispatch(changeResponseStatus(false, id))
                    }
                })

        }
    }
}

export default usersReducer