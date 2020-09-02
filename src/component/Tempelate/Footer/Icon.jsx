import React from 'react';
import style from './Footer.module.css';

const Icon = (props) => (
    <div className={style.icon}>
        <a href={props.link} target="_blank" rel="noopener noreferrer">{props.icon}</a>
    </div>
);

export default Icon;