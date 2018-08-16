import React from 'react';
import NavLI from './NavLI';


const NavBar = (props) => (
    <nav className="gallery-nav">
        <ul>
            <NavLI link={`${props.url}/astronomy`} getImagesHandler={props.getImagesHandler} searchQuery="astronomy">Astronomy</NavLI>
            <NavLI link={`${props.url}/hiking`} getImagesHandler={props.getImagesHandler} searchQuery="hiking">Hiking</NavLI>
            <NavLI link={`${props.url}/puppies`} getImagesHandler={props.getImagesHandler} searchQuery="puppies">Puppies</NavLI>
        </ul>
    </nav>
);

export default NavBar;