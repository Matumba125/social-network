import {v1} from "uuid";
import dimych from "./img/dimych.jpg";
import andrey from "./img/andrey.jpg";
import sveta from "./img/sveta.jpg";
import {ActionTypes} from "./reduxStore";

type ContactsDataType = {
    id: string
    userName: string
    avatar: string
}

export type RightNavInitialStateType = typeof InitialState

const InitialState = {
    contactsData: [
        {id: v1(), userName: "Dimych", avatar: dimych},
        {id: v1(), userName: "Andrey", avatar: andrey},
        {id: v1(), userName: "Sveta", avatar: sveta}
    ] as Array<ContactsDataType>
}

export const rightNavbarReducer = (state: RightNavInitialStateType = InitialState, action: ActionTypes): RightNavInitialStateType =>{

    return state
}

export default  rightNavbarReducer