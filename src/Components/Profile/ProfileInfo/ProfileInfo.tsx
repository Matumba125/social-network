import React from "react";
import style from "./ProfileInfo.module.css";
import wrapper from "../../../assets/img/wrapper.png";
import userAvatar from "../../../assets/img/userAvatar.jpg";

function ProfileInfo() {
    return (
        <div>
            <div className={style.topImage}>
                <img src={wrapper} alt="top"/>
            </div>
            <div className={style.userInfo}>
                <img src={userAvatar} alt="user-avatar"/>
            </div>
        </div>
    )
}

export default ProfileInfo