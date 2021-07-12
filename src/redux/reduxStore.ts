import {combineReducers, createStore } from "redux";
import profileReducer from "./profilleReducer";
import dialogsReducer from "./dialogsReducer";
import rightNavbarReducer from "./rightNavbarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    rightNavbar: rightNavbarReducer
});

let store = createStore(reducers);


export default store