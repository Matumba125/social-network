import React, {useEffect} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import UserPostsContainer from "./UserPosts/UserPostsContainer";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProfile, getStatus} from "../../redux/profilleReducer";
import {getIsAuth, getUserId} from "../../redux/Selectors";

function Profile() {

    let userId = useSelector(getUserId)

    const dispatch = useDispatch()

    useEffect(()=>{
        if (!userId ||userId === ":userId") {
            userId = '18309';
        }
        dispatch(getProfile(userId))
        dispatch(getStatus(userId))
    },[])

    const isAuth = useSelector(getIsAuth)

    if(!isAuth){
        return <Redirect to={'/social-network/login'}/>
    }

    return (
        <>
            <ProfileInfo/>
            <UserPostsContainer/>
        </>
    );
}

export default Profile;