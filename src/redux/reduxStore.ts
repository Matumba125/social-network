import {combineReducers, createStore} from "redux";
import profileReducer, {addPostActionCreator, changePostTextActionCreator, setUserProfile} from "./profilleReducer";
import dialogsReducer, {addMessageActionCreator, changeMessageTextActionCreator} from "./dialogsReducer";
import rightNavbarReducer from "./rightNavbarReducer";
import usersReducer, {
    changeFetchingStatus,
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "./usersReducer";
import authReducer, {setUserData} from "./authReducer";


export type ActionTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof changePostTextActionCreator> |
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof changeMessageTextActionCreator> |
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers>|
    ReturnType<typeof setCurrentPage>|
    ReturnType<typeof setTotalUsersCount>|
    ReturnType<typeof changeFetchingStatus>|
    ReturnType<typeof setUserProfile>|
    ReturnType<typeof setUserData>

export const  rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    rightNavbar: rightNavbarReducer,
    users: usersReducer,
    auth: authReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer);

export default store