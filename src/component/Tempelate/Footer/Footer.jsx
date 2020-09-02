import React from 'react';
import SocialList from './SocialList';
import Logo from './Logo';
import CopyRight from './CopyRight';
import style from './Footer.module.css';

const Footer = () => (
    <div className={style.footer}>
        <Logo />
        <SocialList />
        <CopyRight />
    </div>
);

export default Footer;