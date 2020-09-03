import React from 'react';
import avatar from './assets/Ian_Yin.jpeg';
import style from './Avatar.module.scss';

const Avatar = () => (
    <div className={style.container}>
        <img src={avatar} alt="avatar" className={style.avatar} />
    </div>
);

export default Avatar;