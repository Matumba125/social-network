import React from "react";
import wrapper from "../../../assets/img/wrapper.png";
import {CardMedia} from "@material-ui/core";
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
                <CardMedia style={{borderRadius: '10px', marginBottom: '10px'}} component="img" src={wrapper}/>
                <div className={style.mainInfo}>
                    <CardMedia style={{borderRadius: '50%', height: '100px', width: '100px'}} component="img"
                               className={style.ava}
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