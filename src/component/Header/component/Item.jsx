import React from 'react';

const Item = (props) => (
    <a href={props.link} className="nav__item">
        {props.children}
    </a>
);

export default Item;