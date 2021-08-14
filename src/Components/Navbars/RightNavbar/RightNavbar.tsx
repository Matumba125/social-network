import React from "react";
import style from './RightNavbar.module.css';
import Contacts from "./Contacts/Contacts";
import {RightNavProps} from "./RightNavbarContainer";

function RightNavbar(props: RightNavProps) {

    const state = props.rightnavData

    let contactsElement = state.contactsData.map(u => <Contacts key={u.id} userName={u.userName} id={u.id}
                                                                avatar={u.avatar}/>)

    return (
        <div className={style.rightNav}>
            <div color={'inherit'} className={style.rightNavItem}>
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
            </div>
        </div>
    );
}

export default RightNavbar;