import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <i className="fas fa-camera-retro"></i>
        <ul className="main-nav">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/search">Search</NavLink></li>
        </ul>
    </header>
);

export default Header;