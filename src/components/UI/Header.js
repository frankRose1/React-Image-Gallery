import React from 'react';
import Icon from './Icon';
import SearchForm from './SearchForm';
import NavBar from './NavBar/NavBar';

const Header = props => {
    return (
        <header>
            <Icon />
            <SearchForm getImagesHandler={props.getImagesHandler}/>
            <NavBar getImagesHandler={props.getImagesHandler}/>
        </header>
    );
};

export default Header;