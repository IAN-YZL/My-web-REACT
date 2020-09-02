import React from 'react';
import style from './Project.module.css';

const Information = (props) => (
    <div className={style.description}>
        <h3 className={style.title}>{props.title}</h3>
        <p className={style.detail}>{props.children}</p>
    </div>
);

export default Information;