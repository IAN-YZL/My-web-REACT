import React from 'react';
import Item from './Item';

const NavBar = () => (
    <nav className="nav">
        <Item link="#">Home</Item>
        <Item link="#">Project</Item>
        <Item link="#">About</Item>
    </nav>

);

export default NavBar;