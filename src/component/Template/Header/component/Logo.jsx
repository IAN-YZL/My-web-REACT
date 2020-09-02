import React from 'react';
import logo from '../assets/ian-logo.png';
import style from './Header.module.scss';

const Logo = () => (
    <div class="logo">
        <a href="../../../index.js">
            <img className={style.logo__img} src={logo} alt="logo"></img>
        </a>
    </div>
);

export default Logo;