import React, {useState} from "react";
import defaultImg from "../../../assets/img/sveta.jpg";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css"
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {useSelector} from "react-redux";
import {getProfilePage} from "../../../redux/Selectors";
import ProfileSettings from "./ProfileSettings/ProfileSettings";
import {Button} from "antd";

function ProfileInfo() {

    const [modalStatus, setModalStatus] = useState<boolean>(false)

    const profilePage = useSelector(getProfilePage)

    const onCancelClick = () =>{
        setModalStatus(false)
    }
    const onSubmitClick = () =>{
        setModalStatus(false)
    }

    const onEditClick = () =>{
        setModalStatus(true)
    }

    if (!profilePage.profile) {
        return <Preloader/>
    } else {

        return (
            <>
                <ProfileSettings visible={modalStatus} onSubmitClick={onSubmitClick} onCancelClick={onCancelClick} profile={profilePage}/>
                <div className={style.infoContainer}>
                    <div className={style.mainInfo}>
                        <img className={style.ava} alt={`${profilePage.profile.userID} user ava`}
                             src={profilePage.profile.photos.small !== null ? profilePage.profile.photos.small : defaultImg}/>
                        <div className={style.description}>
                        <span className={style.fullName}>{profilePage.profile.fullName}
                            {!profilePage.profile.lookingForAJob &&
                            <span className={style.workStatus}>(Open to work)</span>}
                        </span>
                            <ProfileStatus status={profilePage.status}/>
                            <Button onClick={onEditClick}>Edit Profile</Button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProfileInfo