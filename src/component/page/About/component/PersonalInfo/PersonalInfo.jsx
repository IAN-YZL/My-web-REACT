import React from 'react';
import Avatar from './component/Avatar';
import Intro from './component/Intro';
import style from './PersonalInfo.module.scss';

const PersonalInfo = () => (
    <div className={style.container}>
        <Avatar />
        <Intro />
    </div>
);

export default PersonalInfo;