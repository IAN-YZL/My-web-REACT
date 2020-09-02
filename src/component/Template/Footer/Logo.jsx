import React from 'react';
import logo from '../Header/assets/ian-logo.png';
import style from './Footer.module.css';

const Logo = () => (
    <img src={logo} alt="logo" className={style.logo}/>
);

export default Logo;