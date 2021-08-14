import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import UserPostsContainer from "./UserPosts/UserPostsContainer";
import {ProfileStateType} from "./ProfileContainer";

function Profile(props: ProfileStateType) {
    return (
        <>
            <ProfileInfo profile={props.profilePage.profile} status={props.profilePage.status}/>
            <UserPostsContainer/>
        </>
    );
}

export default Profile;