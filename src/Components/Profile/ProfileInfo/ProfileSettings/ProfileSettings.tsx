import Modal from 'antd/lib/modal/Modal';
import React, {useEffect, useState} from 'react';
import {ProfileInitialStateType, updateProfile} from "../../../../redux/profilleReducer";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {Button, Checkbox, Input, Upload} from "antd";
import style from './ProfileSettings.module.css'
import {UploadOutlined} from "@ant-design/icons/lib/icons";
import {UploadFile} from "antd/es/upload/interface";

type ProfileSettingsPropsType = {
    visible: boolean
    onCancelClick: () => void
    onSubmitClick: () => void
    profile: ProfileInitialStateType
}

const ProfileSettings: React.FC<ProfileSettingsPropsType> = props => {

    const dispatch = useDispatch()


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            fullName: props.profile.profile.fullName,
            lookingForAJobDescription: props.profile.profile.lookingForAJobDescription === '-' ? '' : props.profile.profile.lookingForAJobDescription,
            lookingForAJob: props.profile.profile.lookingForAJob,
            aboutMe: props.profile.profile.aboutMe === '-' ? '' : props.profile.profile.aboutMe,
            github: props.profile.profile.contacts?.github,
            vk: props.profile.profile.contacts?.vk,
            facebook: props.profile.profile.contacts?.facebook,
            instagram: props.profile.profile.contacts?.instagram,
            twitter: props.profile.profile.contacts?.twitter,
            website: props.profile.profile.contacts?.website,
            youtube: props.profile.profile.contacts?.youtube,
            mainLink: props.profile.profile.contacts?.mainLink,
        },
        onSubmit: async (values) => {
            formik.resetForm();
            await dispatch(updateProfile(values));
            props.onSubmitClick()
        },
    })

    const submitForm = () => {
        formik.handleSubmit()
    }



    return (
        <Modal title={'Profile settings'} visible={props.visible} onOk={submitForm} onCancel={props.onCancelClick}>
            <form className={style.form}>
                <div>
                    <h4>Full Name</h4>
                    <Input
                        placeholder={'Full Name'}
                        {...formik.getFieldProps('fullName')}
                    />
                </div>
                <div>
                    <h4>About Me</h4>
                    <Input
                        placeholder={'About Me'}
                        {...formik.getFieldProps('aboutMe')}
                    />
                </div>
                <div>
                    <h4>Additional information for employers</h4>
                    <Input
                        placeholder={'Additional information for employers'}
                        {...formik.getFieldProps('lookingForAJobDescription')}
                    />
                </div>
                <div>
                    <h4>GitHub</h4>
                    <Input
                        placeholder={'GitHub'}
                        {...formik.getFieldProps('github')}
                    />
                </div>
                <div>
                    <h4>VK</h4>
                    <Input
                        placeholder={'VK'}
                        {...formik.getFieldProps('vk')}
                    />
                </div>
                <div>
                    <h4>Facebook</h4>
                    <Input
                        placeholder={'Facebook'}
                        {...formik.getFieldProps('facebook')}
                    />
                </div>
                <div>
                    <h4>Instagram</h4>
                    <Input
                        placeholder={'Instagram'}
                        {...formik.getFieldProps('instagram')}
                    />
                </div>
                <div>
                    <h4>Twitter</h4>
                    <Input
                        placeholder={'Twitter'}
                        {...formik.getFieldProps('twitter')}
                    />
                </div>
                <div>
                    <h4>Website</h4>
                    <Input
                        placeholder={'Website'}
                        {...formik.getFieldProps('website')}
                    />
                </div>
                <div>
                    <h4>YouTube</h4>
                    <Input
                        placeholder={'YouTube'}
                        {...formik.getFieldProps('youtube')}
                    />
                </div>
                <div>
                    <h4>Main Link</h4>
                    <Input
                        placeholder={'Main Link'}
                        {...formik.getFieldProps('mainLink')}
                    />
                </div>
                <Checkbox
                    className={style.checkbox}
                    checked={formik.values.lookingForAJob}
                    {...formik.getFieldProps('lookingForAJob')}
                >I'm open to work</Checkbox>
            </form>
        </Modal>
    );
};

export default ProfileSettings;