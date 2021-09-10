import {AppStateType} from "./reduxStore";
import {ProfileInitialStateType} from "./profilleReducer";

export const getIsAuth = (state: AppStateType):boolean=>{
    return state.auth.isAuth
 }
 export const getIsInitialized = (state: AppStateType):boolean=>{
    return state.auth.isInitialized
 }

 export const getProfilePage = (state: AppStateType):ProfileInitialStateType=>{
    return state.profilePage
 }
 export const getUserId = (state: AppStateType):string=>{
    return state.profilePage.profile.userID
 }