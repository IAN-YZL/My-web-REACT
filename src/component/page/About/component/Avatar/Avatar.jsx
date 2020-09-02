import React from 'react';
import avatar from './assets/avatar.jpg';
import style from './Avatar.module.scss';

const Avatar = () => (
    <div >
        <img src={avatar} alt="avatar" className={style.avatar} />
    </div>
);

export default Avatar;