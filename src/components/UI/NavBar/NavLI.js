import React from 'react';
import {NavLink} from 'react-router-dom';

const NavLI = props =>  (
        <li>
            <NavLink to={props.link} exact>{props.children}</NavLink>
        </li>
);

export default NavLI;