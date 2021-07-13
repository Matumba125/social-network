import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import UserPostsContainer from "./UserPosts/UserPostsContainer";

function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <UserPostsContainer/>
        </div>
    );
}

export default Profile;