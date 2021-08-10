import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {updateStatus} from "../../../../redux/profilleReducer";
import {TextField} from "@material-ui/core";

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

        const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
                setEditMode(false)
                dispatch(updateStatus(newStatus))
            }
        }

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setNewStatus(e.currentTarget.value)
        }

        return (
            <div style={{height: '32px'}}>
                {!editMode ?
                    <span onDoubleClick={onDoubleClickHandler}>{status ? status : '-----'}</span> :
                    <TextField autoFocus={true}
                               onBlur={onBlurHandler}
                               onKeyPress={onKeyPressHandler}
                               onChange={onChangeHandler}
                               value={newStatus}>
                    </TextField>
                }
            </div>
        );

    }
)