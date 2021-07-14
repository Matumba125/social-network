import React from 'react';
import style from './Header.module.css'
import {AppBar, Button, IconButton, TextField, Toolbar, Typography} from "@material-ui/core";
import {Menu, PeopleRounded} from "@material-ui/icons";
import {NavLink} from "react-router-dom";


function Header() {
    return (
        <AppBar color={'inherit'} position={'static'} className={style.header}>
            <Toolbar style={{justifyContent: "space-between"}}>
                <IconButton edge="start" color="primary" aria-label="menu">
                    <Menu/>
                </IconButton>
                <Typography variant="h6">
                    Lavazza
                </Typography>
                <TextField
                    size={'small'}
                    variant="outlined"
                    color={'primary'}
                    placeholder="Title"
                />
                <NavLink to="/users-page">
                    <IconButton>
                        <PeopleRounded color={'primary'}/>
                    </IconButton>
                </NavLink>
                <Button variant={"outlined"} color="primary" >Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;