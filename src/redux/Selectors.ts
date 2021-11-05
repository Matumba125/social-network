import {AppStateType} from "./reduxStore";
import {PostType, ProfileInitialStateType} from "./profilleReducer";
import {UserType} from "./usersReducer";
import {DialogsInitialStateType} from "./dialogsReducer";

export const getIsAuth = (state: AppStateType): boolean => {
    return state.auth.isAuth
}
export const getIsInitialized = (state: AppStateType): boolean => {
    return state.auth.isInitialized
}

export const getProfilePage = (state: AppStateType): ProfileInitialStateType => {
    return state.profilePage
}
export const getUserId = (state: AppStateType): string => {
    return state.profilePage.profile.userID
}

type UsersType = Array<UserType>

export const getUsersData = (state: AppStateType): UsersType => {
    return state.users.users
}

export const getTotalUsersCount = (state: AppStateType): number => {
    return state.users.totalCount
}
export const getPageSize = (state: AppStateType): number => {
    return state.users.pageSize
}
export const getCurrentPage = (state: AppStateType): number => {
    return state.users.currentPage
}
export const getFollowingUsers = (state: AppStateType): string[] => {
    return state.users.followingUsers
}
export const getDialogsPageData = (state: AppStateType): DialogsInitialStateType => {
    return state.dialogsPage
}
export const getUserPostsData = (state: AppStateType): PostType[] => {
    return state.profilePage.postsData
}

