import React from 'react';
import logo from './img/logo.jpg'
import style from './Header.module.css'


function Header() {
    return <header className={style.header}>

        <img src={logo} alt={'projectLogo'}/>
        <h1>Lavazza</h1>
    </header>
}

export default Header;