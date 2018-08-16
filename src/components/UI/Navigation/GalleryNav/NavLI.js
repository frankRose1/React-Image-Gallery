import React from 'react';
import {NavLink} from 'react-router-dom';

//each LI gets an event handlers that will fetch images from flickr once the link is clicked
//the search criteria is sent from here back to App.js
const NavLI = props =>  (
        <li onClick={ () => props.getImagesHandler(props.searchQuery) }>
            <NavLink to={props.link} exact>{props.children}</NavLink>
        </li>
);

export default NavLI;