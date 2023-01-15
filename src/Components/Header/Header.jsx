import React from 'react';
import './Header.css';
import Logo from '../../Assets/logo.png';

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} className="logo" />

            <ul className="header-menu">
                <li>Home</li>
                <li>Programs</li>
                <li>Why Us</li>
                <li>Plans</li>
                <li>Testimonials</li>
            </ul>
        </div>
    )
};

export default Header;