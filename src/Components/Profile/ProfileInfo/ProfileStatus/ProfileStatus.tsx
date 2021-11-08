import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {updateStatus} from "../../../../redux/profilleReducer";
import {Button, Input} from "antd";
import {EditOutlined} from "@ant-design/icons";

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
                    <div>
                        <span onDoubleClick={onDoubleClickHandler}>{status ? status : '-----'}</span>
                        <Button type={'text'} icon={<EditOutlined/>} onClick={onDoubleClickHandler}/>
                    </div> :
                    <Input autoFocus={true}
                           onBlur={onBlurHandler}
                           onKeyPress={onKeyPressHandler}
                           onChange={onChangeHandler}
                           value={newStatus}>
                    </Input>
                }
            </div>
        );

    }
)