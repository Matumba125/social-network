import React from 'react';
import UserPosts from "./UserPosts/UserPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <UserPosts/>
        </div>
    );
}

export default Profile;