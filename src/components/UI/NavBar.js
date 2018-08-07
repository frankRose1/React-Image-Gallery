import React from 'react';

const NavBar = (props) => (
        <nav className="main-nav">
            <ul>
                {props.imageGenres.map( (genre, i) => (
                    <li key={i}>
                        <a href='#'>{genre}</a>
                    </li>
                ))}
            </ul>
        </nav>
);

export default NavBar;