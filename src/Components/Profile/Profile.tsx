import React, {useEffect} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {useDispatch} from "react-redux";
import {getProfile, getStatus} from "../../redux/profilleReducer";
import {useParams} from 'react-router-dom';
import UserPosts from "./UserPosts/UserPosts";


type UserIdType = {
    userId: string
}

export const Profile = () => {

    let params = useParams<UserIdType>()

    let userId = params.userId

    const dispatch = useDispatch()

    useEffect(()=>{
        if (!userId ||userId === ":userId") {
            userId = '18309';
        }
        dispatch(getProfile(userId))
        dispatch(getStatus(userId))
    },[userId])

    return (
        <>
            <ProfileInfo/>
            <UserPosts/>
        </>
    );
}

export default Profile;