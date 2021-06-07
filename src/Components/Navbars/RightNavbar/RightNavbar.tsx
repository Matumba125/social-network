import React from "react";
import style from './RightNavbar.module.css';

function RightNavbar() {
    return (
        <nav className={style.rightNav}>
            <div className={style.contactsNavbar}>
                <h2 className={style.navbarTitle}>Contacts</h2>
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