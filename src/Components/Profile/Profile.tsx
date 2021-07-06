import React from 'react';
import UserPosts from "./UserPosts/UserPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../redux/PropsType";

function Profile(props: ProfilePagePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <UserPosts postsData={props.postsData}
                       addPost={props.addPost}
                       messageForNewPost={props.messageForNewPost}
                       changePostTextCallback={props.changePostTextCallback}
            />
        </div>
    );
}

export default Profile;