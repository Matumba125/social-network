import React from "react";
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../redux/authReducer";

function Settings() {

    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(logoutUser())
    }

    return (
        <>
            Settings

            <Button variant={'outlined'} onClick={onClickHandler}>LOGOUT</Button>
        </>
    )
}

export default Settings;