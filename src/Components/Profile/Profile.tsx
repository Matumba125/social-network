import React from 'react';
import UserPosts from "./UserPosts/UserPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileDataPropsType} from "../../PropsType";

function Profile(props: ProfileDataPropsType) {
    return (
        <div>
            <ProfileInfo/>
            <UserPosts postsData={props.postsData}/>
        </div>
    );
}

export default Profile;