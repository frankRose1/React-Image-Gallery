import React from 'react';
import {NavLink} from 'react-router-dom';

const MainNav = () =>  (
    <nav className="main-nav">
        <ul>
            <li>
                <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
                <NavLink to="/search" >Search</NavLink>
            </li>
        </ul>
    </nav>
);

export default MainNav;