import React from 'react';
import Aux from '../../hoc/Auxiliary';
import NavBar from '../UI/NavBar/NavBar';
import SearchForm from '../UI/SearchForm';

const Layout = props => (
    <Aux>
        <header>
            <SearchForm /> 
            <NavBar getImagesHandler={props.getImages}/>
        </header>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default Layout;