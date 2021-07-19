import {combineReducers, createStore} from "redux";
import profileReducer, {addPostActionCreator, changePostTextActionCreator} from "./profilleReducer";
import dialogsReducer, {addMessageActionCreator, changeMessageTextActionCreator} from "./dialogsReducer";
import rightNavbarReducer from "./rightNavbarReducer";
import usersReducer, {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "./usersReducer";


export type ActionTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof changePostTextActionCreator> |
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof changeMessageTextActionCreator> |
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>|
    ReturnType<typeof setCurrentPageAC>|
    ReturnType<typeof setTotalUsersCountAC>

export const  rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    rightNavbar: rightNavbarReducer,
    users: usersReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer);

export default store