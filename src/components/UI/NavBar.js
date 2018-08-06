import React from 'react';

const NavBar = (props) => {
    return (
        <nav class="main-nav">
            <ul>
                {props.imageGenres.map( (genre, i) => (
                    <li key={i}>
                        <a href='#'>{genre}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;