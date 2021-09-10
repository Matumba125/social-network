import React from "react";
import defaultImg from "../../../assets/img/sveta.jpg";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css"
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {useSelector} from "react-redux";
import {getProfilePage} from "../../../redux/Selectors";

function ProfileInfo() {

    const profilePage = useSelector(getProfilePage)

    if (!profilePage.profile) {
        return <Preloader/>
    } else {

        return (
            <div className={style.infoContainer}>
                <div className={style.mainInfo}>
                    <img className={style.ava} alt={`${profilePage.profile.userID} user ava`}
                         src={profilePage.profile.photos.small !== null ? profilePage.profile.photos.small : defaultImg}/>
                    <div className={style.description}>
                        <span className={style.fullName}>{profilePage.profile.fullName}</span>
                        <ProfileStatus status={profilePage.status}/>
                    </div>
                </div>
            </div>

        )
    }
}

export default ProfileInfo