import React from 'react';

const NavLink = (props) => (
    <a href={props.link}>
        {props.children}
    </a>
);

export default NavLink;