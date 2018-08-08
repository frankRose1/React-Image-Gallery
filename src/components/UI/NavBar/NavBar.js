import React from 'react';
import NavLI from './NavLI';

const NavBar = (props) => (
        <nav className="main-nav">
            <ul>
                <NavLI link="/space">Space</NavLI>
                <NavLI link="/hiking">Hiking</NavLI>
                <NavLI link="/puppies">Puppies</NavLI>
            </ul>
        </nav>
);

export default NavBar;