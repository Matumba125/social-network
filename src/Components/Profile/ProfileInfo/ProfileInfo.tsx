import React, {ChangeEvent, useState} from "react";
import defaultImg from "../../../assets/img/sveta.jpg";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css"
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUserId, getProfilePage} from "../../../redux/Selectors";
import ProfileSettings from "./ProfileSettings/ProfileSettings";
import {Avatar, Badge, Button} from "antd";
import {updatePhoto} from "../../../redux/profilleReducer";
import ProfilePhotoChange from "./ProfilePhotoChange/ProfilePhotoChange";
import {
    EditOutlined, FacebookOutlined, GithubOutlined,
    GlobalOutlined, InstagramOutlined, ShareAltOutlined, TwitterOutlined, YoutubeOutlined
} from "@ant-design/icons";

function ProfileInfo() {

    const dispatch = useDispatch()

    const [modalStatus, setModalStatus] = useState<boolean>(false)
    const [changePhoto, setChangePhoto] = useState<boolean>(false)

    const profilePage = useSelector(getProfilePage)
    const currentUserId = useSelector(getCurrentUserId)

    const [image, setImage] = useState<File>()


    const onCancelClick = () => {
        setModalStatus(false)
    }
    const onSubmitClick = () => {
        setModalStatus(false)
    }

    const onPhotoSubmitClick = async () => {
        setChangePhoto(false)
        image && await dispatch(updatePhoto(image))
    }

    const onPhotoCloseClick = () => {
        setChangePhoto(false)
    }

    const selectPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        //@ts-ignore
        setImage(e.target.files[0])
    }

    const onEditClick = () => {
        setModalStatus(true)
    }

    const onPhotoClick = () => {
        setChangePhoto(true)
    }


    if (!profilePage.profile) {
        return <Preloader/>
    } else {

        return (
            <>
                <ProfileSettings visible={modalStatus} onSubmitClick={onSubmitClick} onCancelClick={onCancelClick}
                                 profile={profilePage}/>
                <ProfilePhotoChange visible={changePhoto} onSubmitClick={onPhotoSubmitClick}
                                    onCancelClick={onPhotoCloseClick} selectPhoto={selectPhoto}/>
                <div className={style.infoContainer}>
                    <div className={style.mainInfo}>
                        <div className={style.avaWrapper}>
                            <Avatar className={style.ava} alt={`${profilePage.profile.userId} user ava`}
                                    src={profilePage.profile.photos.small !== null ? profilePage.profile.photos.small : defaultImg}/>
                            <Button type={'text'} icon={<EditOutlined/>} onClick={onPhotoClick}/>
                        </div>
                        <div className={style.description}>
                        <span className={style.fullName}>{profilePage.profile.fullName}
                            {profilePage.profile.lookingForAJob &&
                            <span className={style.workStatus}>(Open to work)</span>}
                        </span>
                            <ProfileStatus status={profilePage.status}/>
                        </div>
                    </div>
                    <div className={style.userDataContainer}>
                        {(profilePage.profile.userId === currentUserId) &&
                        <Button className={style.editButton} onClick={onEditClick}>Edit Profile</Button>}
                        {profilePage.profile.contacts?.github &&
                        <p><GithubOutlined/> <a className={style.socialLink}>{profilePage.profile.contacts?.github}</a>
                        </p>}
                        {profilePage.profile.contacts?.facebook && <p><FacebookOutlined/> <a
                            className={style.socialLink}>{profilePage.profile.contacts?.facebook}</a></p>}
                        {profilePage.profile.contacts?.instagram && <p><InstagramOutlined/> <a
                            className={style.socialLink}>{profilePage.profile.contacts?.instagram}</a></p>}
                        {profilePage.profile.contacts?.twitter && <p><TwitterOutlined/> <a
                            className={style.socialLink}>{profilePage.profile.contacts?.twitter}</a></p>}
                        {profilePage.profile.contacts?.youtube && <p><YoutubeOutlined/> <a
                            className={style.socialLink}>{profilePage.profile.contacts?.youtube}</a></p>}
                        {profilePage.profile.contacts?.website &&
                        <p><GlobalOutlined/> <a className={style.socialLink}>{profilePage.profile.contacts?.website}</a>
                        </p>}
                        {profilePage.profile.contacts?.mainLink && <p><ShareAltOutlined/> <a
                            className={style.socialLink}>{profilePage.profile.contacts?.mainLink}</a></p>}
                    </div>
                </div>
            </>
        )
    }
}

export default ProfileInfo