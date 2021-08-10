import React from "react";
import style from './RightNavbar.module.css';
import Contacts from "./Contacts/Contacts";
import {Grid, Paper} from "@material-ui/core";
import {RightNavProps} from "./RightNavbarContainer";

function RightNavbar(props: RightNavProps) {

    const state = props.rightnavData

    let contactsElement = state.contactsData.map(u => <Contacts key={u.id} userName={u.userName} id={u.id}
                                                                avatar={u.avatar}/>)

    return (
        <Grid item className={style.rightNav}>
            <Paper color={'inherit'} className={style.rightNavItem}>
                <div className={style.rightNavItem}>
                    <h2 className={style.navbarTitle}>Contacts</h2>
                    {contactsElement}
                </div>
                <div className={style.groupsNavbar}>
                    <h2 className={style.navbarTitle}>Groups</h2>
                </div>
                <div className={style.pagesNavbar}>
                    <h2 className={style.navbarTitle}>Pages</h2>
                </div>
            </Paper>
        </Grid>
    );
}

export default RightNavbar;