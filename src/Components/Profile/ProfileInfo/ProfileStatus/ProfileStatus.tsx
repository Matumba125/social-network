import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {setAboutText} from "../../../../redux/profilleReducer";

type ProfileStatusPropsType = {
    aboutMe: string
}

const ProfileStatus = ({aboutMe, ...restProps}: ProfileStatusPropsType) => {

    const dispatch = useDispatch()

    const [editMode, setEditMode] = useState<boolean>(false)
    const [newAboutText, setNewAboutText] = useState<string>(aboutMe)

    const onBlurHandler = ()=>{
        setEditMode(false)
        dispatch(setAboutText(newAboutText))
    }
    const onChangeHandler =(e: ChangeEvent<HTMLInputElement>) =>{
        setNewAboutText(e.currentTarget.value)
    }

        return (
            <>
                {!editMode ?
                <span onDoubleClick={() => setEditMode(true)}>{aboutMe}</span>
                :<input onBlur={onBlurHandler} onChange={onChangeHandler} value={newAboutText}></input>
            }
            </>
        );

}

    export default ProfileStatus;