import React from 'react';
import style from './Header.module.css';
import Item from './Item';


const NavBar = () => (
    <nav className={style.nav}>
        <ul className={style.nav_list}>
            <Item link="#">Home</Item>
            <Item link="#">Project</Item>
            <Item link="#">About</Item>
        </ul>

    </nav>

);

export default NavBar;