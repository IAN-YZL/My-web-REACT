import React from 'react';
import Icon from './Icon';
import LinkedIn from './components/LinkedIn';
import Instagram from './components/Instagram';
import Github from './components/Github';
import style from './Footer.module.css';


const SocialList = () => (
    <div className={style.social}>
        <Icon link="https://www.linkedin.com/in/ianyin/" icon={<LinkedIn/>} />
        <Icon link="https://www.instagram.com/p/BL2qxLnD9el/?utm_source=ig_web_button_share_sheet" icon={<Instagram />} />
        <Icon link="https://github.com/IAN-YZL" icon={<Github />} />
    </div>
);

export default SocialList;