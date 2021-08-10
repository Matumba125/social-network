import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './LeftNavbar.module.css';
import {Grid, Paper} from "@material-ui/core";

function LeftNavbar() {
    return (
        <Grid item className={style.leftNav}>
            <Paper className={style.navBlock}>
                <h2 className={style.navbarTitle}>New Feeds</h2>
            </Paper>
            <Paper className={style.navBlock}>
                <h2 className={style.navbarTitle}>More Pages</h2>
                <div className={style.item}>
                    <NavLink to="/social-network/profile/">Profile</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/social-network/dialogs/">Messages</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/social-network/news/">News</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/social-network/music/">Music</NavLink>
                </div>
            </Paper>
            <Paper className={style.navBlock}>
                <h2 className={style.navbarTitle}>Account</h2>
                <div className={style.item}>
                    <NavLink to="/social-network/settings/">Settings</NavLink>
                </div>
            </Paper>
        </Grid>
    );
}

export default LeftNavbar;