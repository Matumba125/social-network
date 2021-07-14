import {v1} from "uuid";
import dimych from "./img/dimych.jpg";
import andrey from "./img/andrey.jpg";
import sveta from "./img/sveta.jpg";
import {ActionTypes} from "./reduxStore";

type AddressType ={
    country: string
    city: string
}

export type UserType ={
    id: string
    fullName: string
    avatar: string
    followed: boolean
    status: string
    address: AddressType
}

export type InitialStateType ={
    users: Array<UserType>
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState: InitialStateType = {
        users: [
            {
                id: v1(),
                fullName: "Dimych",
                avatar: dimych,
                followed: true,
                status: "React, Redux znat' budesh kruto",
                address: {
                    country: 'Belarus',
                    city: 'Minsk'
                }
            },
            {
                id: v1(),
                fullName: "Andrey",
                avatar: andrey,
                followed: false,
                status: ' 0_o ',
                address: {
                    country: 'Russia',
                    city: 'Moscow'
                }
            },
            {
                id: v1(),
                fullName: "Sveta",
                avatar: sveta,
                followed: true,
                status: 'Verstay, padla',
                address: {
                    country: 'Ukraine',
                    city: 'Kiev'
                }
            }
            /*{id: v1(), userName: "Sasha"},
            {id: v1(), userName: "Viktor"},
            {id: v1(), userName: "Valera"}*/
        ]
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

export const followAC = (id: string) => ({
    type: FOLLOW, id: id
} as const)
export const unfollowAC = (id: string) => ({
    type: UNFOLLOW,
    id: id
} as const)
export const setUsersAC = (users: Array<UserType>) => ({
    type: SET_USERS,
    users: users
} as const)


export default usersReducer