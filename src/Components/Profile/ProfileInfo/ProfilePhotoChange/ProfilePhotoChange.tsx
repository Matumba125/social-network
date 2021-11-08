import React, {ChangeEvent} from 'react';
import {Modal} from "antd";

type ProfilePhotoPropsType = {
    visible: boolean
    onCancelClick: () => void
    onSubmitClick: () => void
    selectPhoto: (e: ChangeEvent<HTMLInputElement>) => void
}

const ProfilePhotoChange: React.FC<ProfilePhotoPropsType> = props => {
    return (
        <Modal  visible={props.visible} onOk={props.onSubmitClick} onCancel={props.onCancelClick}>
            <input onChange={props.selectPhoto} type={'file'}/>
        </Modal>
    );
};

export default ProfilePhotoChange;