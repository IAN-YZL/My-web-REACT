import React from 'react';
import logo from '../assets/ian-logo.png';

const Logo = () => (
    <div class="logo">
        <a href="../../../index.js">
            <img className="logo__img" src={logo} alt="logo"></img>
        </a>
    </div>
);

export default Logo;