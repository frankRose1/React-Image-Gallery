import React from 'react';
import NavLI from './NavLI';

const NavBar = (props) => (
        <nav className="main-nav">
            <ul>
                <NavLI link="/astronomy" getImagesHandler={props.getImagesHandler} searchQuery="space">Astronomy</NavLI>
                <NavLI link="/hiking" getImagesHandler={props.getImagesHandler} searchQuery="hiking">Hiking</NavLI>
                <NavLI link="/puppies" getImagesHandler={props.getImagesHandler} searchQuery="puppies">Puppies</NavLI>
            </ul>
        </nav>
);

export default NavBar;