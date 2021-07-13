import React from "react";
import style from './RightNavbar.module.css';
import Contacts from "./Contacts/Contacts";
import {RightNavDataPropsType} from "../../../redux/PropsType";

function RightNavbar(props: RightNavDataPropsType) {

    let contactsElement = props.contactsData.map(u => <Contacts key={u.id} userName={u.userName} id={u.id} avatar={u.avatar}/>)

    return (
        <nav className={style.rightNav}>
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
        </nav>
    );
}

export default RightNavbar;