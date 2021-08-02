import React from 'react';
import style from './Header.module.css'
import {AppBar, Button, IconButton, TextField, Toolbar, Typography} from "@material-ui/core";
import {Menu, PeopleRounded} from "@material-ui/icons";
import {NavLink} from "react-router-dom";
import {DataType} from "../../redux/authReducer";

type HeaderPropsType = {
    data: DataType
    isAuth: boolean
}


function Header(props: HeaderPropsType) {
    return (
        <AppBar color={'inherit'} position={'static'} className={style.header} style={{justifyContent: "center"}}>
            <Toolbar style={{justifyContent: "space-between"}}>
                <IconButton edge="start" color="primary" aria-label="menu">
                    <Menu/>
                </IconButton>
                <Typography variant="h6">
                    Social Network
                </Typography>
                <TextField
                    size={'small'}
                    variant="outlined"
                    color={'primary'}
                    placeholder="Title"
                />
                <NavLink to="/social-network/users-page">
                    <IconButton>
                        <PeopleRounded color={'primary'}/>
                    </IconButton>
                </NavLink>
                {props.isAuth ? <NavLink to="/social-network/profile">{props.data.login}</NavLink>
                    : <NavLink to="/social-network/login-page">
                        <Button variant={"outlined"} color="primary">Login</Button>
                    </NavLink>}
            </Toolbar>
        </AppBar>
    )
}

export default Header;