import React from 'react';
import NavBar from './component/Navbar';
import Logo from './component/Logo';
import style from './Header.module.scss';
// import './Header.scss';

const Header = () => (
    <header className={style.container}>
        <Logo />
        <NavBar />
    </header>
);

export default Header;