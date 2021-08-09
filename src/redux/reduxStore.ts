import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {
    addPostActionCreator, changeAboutText,
    changePostTextActionCreator,
    setAboutText,
    setUserProfile
} from "./profilleReducer";
import dialogsReducer, {addMessage, changeMessageText} from "./dialogsReducer";
import rightNavbarReducer from "./rightNavbarReducer";
import usersReducer, {
    changeFetchingStatus,
    changeResponseStatus,
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "./usersReducer";
import authReducer, {setUserData} from "./authReducer";
import thunkMiddleware from "redux-thunk"


export type ActionTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof changePostTextActionCreator> |
    ReturnType<typeof addMessage> |
    ReturnType<typeof changeMessageText> |
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof changeFetchingStatus> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setUserData> |
    ReturnType<typeof changeResponseStatus>|
    ReturnType<typeof setAboutText>|
    ReturnType<typeof changeAboutText>

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    rightNavbar: rightNavbarReducer,
    users: usersReducer,
    auth: authReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store