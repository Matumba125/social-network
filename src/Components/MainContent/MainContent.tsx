import React from 'react';
import wrapper from "./img/wrapper.png";
import userAvatar from "./UserPosts/Post/img/userAvatar.jpg";
import style from './MainContent.module.css'
import UserPosts from "./UserPosts/UserPosts";

function Profile() {
    return (
        <div>
            <div className={style.topImage}>
                <img src={wrapper} alt="top"/>
            </div>
            <div className={style.userInfo}>
                <img src={userAvatar} alt="user-avatar"/>
            </div>
            <UserPosts/>
        </div>
    );
}

export default Profile;