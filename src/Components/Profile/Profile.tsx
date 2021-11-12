import React, {useEffect} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {getProfile, getStatus} from "../../redux/profilleReducer";
import {useParams} from 'react-router-dom';
import UserPosts from "./UserPosts/UserPosts";
import {getCurrentUserId, getIsLoading} from "../../redux/Selectors";
import Preloader from "../common/Preloader/Preloader";
import style from './Profile.module.css'

type UserIdType = {
    userId: string
}

export const Profile = () => {

    let params = useParams<UserIdType>()

    const currentUserId = useSelector(getCurrentUserId)
    const isLoading = useSelector(getIsLoading)
    const dispatch = useDispatch()

    const refreshProfile = () => {
        let userId = params.userId
        if (!userId) {
            userId = currentUserId!
        }
        dispatch(getProfile(userId))
        dispatch(getStatus(userId))
    }

    useEffect(() => {
        refreshProfile()
    }, [params.userId]);

    useEffect(() => {
        refreshProfile()
    }, []);

    if (isLoading) {
        return (
            <Preloader/>
        )
    }

    return (
        <div className={style.profileWrapper}>
            <div className={style.infoWrapper}>
                <ProfileInfo/>
                <UserPosts/>
            </div>
        </div>
    );
}

export default Profile;