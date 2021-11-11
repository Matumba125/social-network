import React, {useEffect, useState} from 'react';
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


    const [userId, setUserId] = useState<string>(params.userId)

    const currentUserId = useSelector(getCurrentUserId)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!userId || userId === ":userId") {
            setUserId(currentUserId)
        }
        if (userId !== ":userId") {
            setUserId(params.userId)
        }
        dispatch(getProfile(userId))

        dispatch(getStatus(userId))
    }, [userId, params]);

    return (
        <>
            <ProfileInfo/>
            <UserPosts/>
        </>
    );
}

export default Profile;