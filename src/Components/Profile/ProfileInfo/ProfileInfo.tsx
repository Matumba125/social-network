import React from "react";
import {ProfileDataType} from "../../../redux/profilleReducer";
import defaultImg from "../../../assets/img/sveta.jpg";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css"
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileDataType
    status: string
}

function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader/>
    } else {

        return (
            <div className={style.infoContainer}>
                <div className={style.mainInfo}>
                    <img className={style.ava} alt={`${props.profile.userID} user ava`}
                         src={props.profile.photos.small !== null ? props.profile.photos.small : defaultImg}/>
                    <div className={style.description}>
                        <span className={style.fullName}>{props.profile.fullName}</span>
                        <ProfileStatus status={props.status}/>
                    </div>
                </div>
            </div>

        )
    }
}

export default ProfileInfo