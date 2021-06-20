import React from 'react';
import { NavLink } from 'react-router-dom';
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
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/dialogs">Messages</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/news">News</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="music">Music</NavLink>
                </div>
            </div>
            <div className={style.navBlock}>
                <h2 className={style.navbarTitle}>Account</h2>
                <div className={style.item}>
                    <NavLink to="/settings">Settings</NavLink>
                </div>
            </div>

        </nav>
    );
}

export default LeftNavbar;