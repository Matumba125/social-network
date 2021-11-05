import Modal from 'antd/lib/modal/Modal';
import React from 'react';
import {ProfileInitialStateType, updateProfile} from "../../../../redux/profilleReducer";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {Button, Checkbox, Input} from "antd";

type ProfileSettingsPropsType = {
    visible: boolean
    onCancelClick: () => void
    onSubmitClick: () => void
    profile: ProfileInitialStateType
}

const ProfileSettings: React.FC<ProfileSettingsPropsType> = props => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            fullName: props.profile.profile.fullName,
            lookingForAJobDescription: props.profile.profile.lookingForAJobDescription,
            lookingForAJob: props.profile.profile.lookingForAJob,
            github: props.profile.profile.contacts?.github,
            vk: props.profile.profile.contacts?.vk,
            facebook: props.profile.profile.contacts?.facebook,
            instagram: props.profile.profile.contacts?.instagram,
            twitter: props.profile.profile.contacts?.twitter,
            website: props.profile.profile.contacts?.website,
            youtube: props.profile.profile.contacts?.youtube,
            mainLink: props.profile.profile.contacts?.mainLink,
            aboutMe: '',
        },
        onSubmit: async (values) => {
            console.log(values)
            formik.resetForm();
            await dispatch (updateProfile(values));
            props.onSubmitClick()
        },
    })

    const submitForm = () =>{
        formik.handleSubmit()
    }


    return (
        <Modal title={'Profile settings'} visible={props.visible} onOk={submitForm} onCancel={props.onCancelClick}>
            <form>
                <Input
                    placeholder={'Full Name'}
                    {...formik.getFieldProps('fullName')}
                />
                <Input
                    placeholder={'Additional information for employers'}
                    {...formik.getFieldProps('lookingForAJobDescription')}
                />
                <Input
                    placeholder={'GitHub'}
                    {...formik.getFieldProps('github')}
                />
                <Input
                    placeholder={'VK'}
                    {...formik.getFieldProps('vk')}
                />
                <Input
                    placeholder={'Facebook'}
                    {...formik.getFieldProps('facebook')}
                />
                <Input
                    placeholder={'Instagram'}
                    {...formik.getFieldProps('instagram')}
                />
                <Input
                    placeholder={'Twitter'}
                    {...formik.getFieldProps('twitter')}
                />
                <Input
                    placeholder={'Website'}
                    {...formik.getFieldProps('website')}
                />
                <Input
                    placeholder={'YouTube'}
                    {...formik.getFieldProps('youtube')}
                />
                <Input
                    placeholder={'Main Link'}
                    {...formik.getFieldProps('mainLink')}
                />
                <Checkbox
                    checked={formik.values.lookingForAJob}
                    {...formik.getFieldProps('lookingForAJob')}
                >I'm open to work</Checkbox>
            </form>
        </Modal>
    );
};

export default ProfileSettings;