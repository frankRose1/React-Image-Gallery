import React from 'react';
import Aux from '../../hoc/Auxiliary';
import NavBar from '../UI/NavBar/NavBar';
import SearchForm from '../UI/SearchForm';
import Gallery from '../UI/Gallery/Gallery';

const Layout = props => (
    <Aux>
        <header>
            <SearchForm /> 
            <NavBar imageGenres={props.imageGenres} />
        </header>
        <main>
            <Gallery images={props.images}/>
        </main>
    </Aux>
);

export default Layout;