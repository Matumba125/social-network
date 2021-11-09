import React, {useEffect} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {getProfile, getStatus} from "../../redux/profilleReducer";
import {useParams} from 'react-router-dom';
import UserPosts from "./UserPosts/UserPosts";
import {getCurrentUserId} from "../../redux/Selectors";


type UserIdType = {
    userId: string
}

export const Profile = () => {

    let params = useParams<UserIdType>()

    let userId = params.userId

    const currentUserId = useSelector(getCurrentUserId)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!userId || userId === ":userId") {
            userId = currentUserId;
        }
        dispatch(getProfile(userId))
        dispatch(getStatus(userId))
    }, [userId])

    return (
        <>
            <ProfileInfo/>
            <UserPosts/>
        </>
    );
}

export default Profile;