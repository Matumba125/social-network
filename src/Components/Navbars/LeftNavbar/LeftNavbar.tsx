import React from 'react';
import style from './LeftNavbar.module.css';

function LeftNavbar() {
    return (
        <nav className={style.leftNav}>
            <div className={style.navBlock}>
                <h2 className={style.navbarTitle}>New Feeds</h2>
            </div>
            <div className={style.navBlock}>
                <h2 className={style.navbarTitle}>More Pages</h2>
                <div className={style.item}>
                    <a href="/profile">Profile</a>
                </div>
                <div className={style.item}>
                    <a href="/dialogs">Messages</a>
                </div>
                <div className={style.item}>
                    <a href="/news">News</a>
                </div>
                <div className={style.item}>
                    <a href="music">Music</a>
                </div>
            </div>
            <div className={style.navBlock}>
                <h2 className={style.navbarTitle}>Account</h2>
                <div className={style.item}>
                    <a href="/settings">Settings</a>
                </div>
            </div>

        </nav>
    );
}

export default LeftNavbar;