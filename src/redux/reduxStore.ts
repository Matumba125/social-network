import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {addPost, setLoadingStatus, setStatus, setUserProfile} from "./profilleReducer";
import dialogsReducer, {addMessage} from "./dialogsReducer";
import usersReducer, {
    changeFetchingStatus,
    changeResponseStatus,
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "./usersReducer";
import authReducer, {setAppInitialized, setUserData, userBeenLogined, userBeenLoginedOut} from "./authReducer";
import thunkMiddleware from "redux-thunk"
import chatReducer, {setIsReady, setMessages, stopChatAC} from "./chatReducer";


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
    ReturnType<typeof userBeenLoginedOut> |
    ReturnType<typeof setAppInitialized> |
    ReturnType<typeof setMessages> |
    ReturnType<typeof setIsReady> |
    ReturnType<typeof stopChatAC> |
    ReturnType<typeof setLoadingStatus>

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    users: usersReducer,
    auth: authReducer,
    chat: chatReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store