import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;