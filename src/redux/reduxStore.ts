import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {addPost, setStatus, setUserProfile} from "./profilleReducer";
import dialogsReducer, {addMessage} from "./dialogsReducer";
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
import authReducer, {setUserData, userBeenLogined, userBeenLoginedOut} from "./authReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'


export type ActionTypes =
    ReturnType<typeof addPost> |
    ReturnType<typeof addMessage> |
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof changeFetchingStatus> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setUserData> |
    ReturnType<typeof changeResponseStatus> |
    ReturnType<typeof setStatus> |
    ReturnType<typeof userBeenLogined> |
    ReturnType<typeof userBeenLoginedOut>

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    rightNavbar: rightNavbarReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store