import React from 'react';
import style from './Header.module.css';

const Item = (props) => (
    <li className={style.nav__item}>
        <a href={props.link} className={style.nav__text}>
            {props.children}
        </a>
    </li>
    
);

export default Item;