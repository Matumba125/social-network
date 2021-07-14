import { RightNavDataPropsType} from "./PropsType";
import {v1} from "uuid";
import dimych from "./img/dimych.jpg";
import andrey from "./img/andrey.jpg";
import sveta from "./img/sveta.jpg";
import {ActionTypes} from "./reduxStore";

const initialState = {
    contactsData: [
        {id: v1(), userName: "Dimych", avatar: dimych},
        {id: v1(), userName: "Andrey", avatar: andrey},
        {id: v1(), userName: "Sveta", avatar: sveta}
    ]
}

export const rightNavbarReducer = (state: RightNavDataPropsType = initialState, action: ActionTypes) =>{

    return state
}

export default  rightNavbarReducer