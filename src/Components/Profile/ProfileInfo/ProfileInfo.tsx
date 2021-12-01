import React, {ChangeEvent, useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css"
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUserId, getProfilePage} from "../../../redux/Selectors";
import ProfileSettings from "./ProfileSettings/ProfileSettings";
import {Avatar, Button, Card, Image} from "antd";
import {updatePhoto} from "../../../redux/profilleReducer";
import ProfilePhotoChange from "./ProfilePhotoChange/ProfilePhotoChange";
import {
    EditOutlined,
    FacebookOutlined,
    GithubOutlined,
    GlobalOutlined,
    InstagramOutlined,
    ShareAltOutlined,
    TwitterOutlined,
    UserOutlined,
    YoutubeOutlined
} from "@ant-design/icons";

function ProfileInfo() {

    const dispatch = useDispatch()

    const [modalStatus, setModalStatus] = useState<boolean>(false)
    const [changePhoto, setChangePhoto] = useState<boolean>(false)

    const profilePage = useSelector(getProfilePage)
    const currentUserId = useSelector(getCurrentUserId)
    const isProfileBelongsToUser = profilePage.profile.userId === currentUserId

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
                <ProfileSettings
                    visible={modalStatus}
                    onSubmitClick={onSubmitClick}
                    onCancelClick={onCancelClick}
                    profile={profilePage}/>

                <ProfilePhotoChange
                    visible={changePhoto}
                    onSubmitClick={onPhotoSubmitClick}
                    onCancelClick={onPhotoCloseClick}
                    selectPhoto={selectPhoto}/>

                <div className={style.infoContainer}>
                    <div className={style.mainInfo}>
                        <div className={style.avaWrapper}>
                            <Avatar
                                size={100}
                                alt={`${profilePage.profile.userId} user ava`}
                                src={profilePage.profile.photos.large && <Image src={ profilePage.profile.photos.large}/>}
                                icon={!profilePage.profile.photos.large && <UserOutlined/>}/>
                            {isProfileBelongsToUser && <Button
                                type={'text'}
                                icon={<EditOutlined/>}
                                onClick={onPhotoClick}/>}
                        </div>
                        <div className={style.description}>

                        <span className={style.fullName}>
                            {profilePage.profile.fullName}
                            {profilePage.profile.lookingForAJob &&
                            <span className={style.workStatus}>
                                (Open to work)
                            </span>}
                        </span>
                            <ProfileStatus isProfileBelongsToUser={isProfileBelongsToUser} status={profilePage.status}/>
                        </div>
                    </div>
                    <div className={style.userDataContainer}>

                        {isProfileBelongsToUser &&
                        <Button
                            type={'ghost'}
                            className={style.editButton}
                            onClick={onEditClick}>
                            Edit Profile
                        </Button>}

                        {profilePage.profile.aboutMe &&
                        <Card
                            title={'About Me:'}
                            className={style.aboutCard}>
                            {profilePage.profile.aboutMe}
                        </Card>}

                        {profilePage.profile.contacts?.github &&
                        <a
                            href={profilePage.profile.contacts?.github}
                            className={style.socialLink}>
                            <GithubOutlined/>
                            {`  ${profilePage.profile.contacts?.github}`}
                        </a>}
                        {profilePage.profile.contacts?.facebook &&
                        <a
                            href={profilePage.profile.contacts?.facebook}
                            className={style.socialLink}>
                            <FacebookOutlined/>
                            {`  ${profilePage.profile.contacts?.facebook}`}
                        </a>}

                        {profilePage.profile.contacts?.instagram &&
                        <a
                            href={profilePage.profile.contacts?.twitter}
                            className={style.socialLink}>
                            <InstagramOutlined/>
                            `{`  ${profilePage.profile.contacts?.instagram}`}
                        </a>}

                        {profilePage.profile.contacts?.twitter &&
                        <a
                            href={profilePage.profile.contacts?.twitter}
                            className={style.socialLink}>
                            <TwitterOutlined/>
                            {`  ${profilePage.profile.contacts?.twitter}`}
                        </a>}

                        {profilePage.profile.contacts?.youtube &&
                        <a
                            href={profilePage.profile.contacts?.youtube}
                            className={style.socialLink}>
                            <YoutubeOutlined/>
                            {`  ${profilePage.profile.contacts?.youtube}`}
                        </a>}

                        {profilePage.profile.contacts?.website &&
                        <a
                            href={profilePage.profile.contacts?.website}
                            className={style.socialLink}>
                            <GlobalOutlined/>
                            {`  ${profilePage.profile.contacts?.website}`}
                        </a>}

                        {profilePage.profile.contacts?.mainLink &&
                        <a
                            href={profilePage.profile.contacts?.mainLink}
                            className={style.socialLink}>
                            <ShareAltOutlined/>
                            {`  ${profilePage.profile.contacts?.mainLink}`}
                        </a>}
                    </div>
                </div>
            </>
        )
    }
}

export default ProfileInfo