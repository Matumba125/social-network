import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {updateStatus} from "../../../../redux/profilleReducer";

type ProfileStatusPropsType = {
    status: string
}

export const ProfileStatus = React.memo(({status, ...restProps}: ProfileStatusPropsType) => {

        const dispatch = useDispatch()

        const [editMode, setEditMode] = useState<boolean>(false)
        const [newStatus, setNewStatus] = useState<string>(status)

        const onDoubleClickHandler = () => {
            setEditMode(true)
            setNewStatus(status)
        }

        const onBlurHandler = () => {
            setEditMode(false)
            dispatch(updateStatus(newStatus))
        }

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setNewStatus(e.currentTarget.value)
        }

        return (
            <>
                {!editMode ?
                    <span onDoubleClick={onDoubleClickHandler}>{status}</span> :
                    <input autoFocus={true} onBlur={onBlurHandler} onChange={onChangeHandler} value={newStatus}></input>
                }
            </>
        );

    }
)