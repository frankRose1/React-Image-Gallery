import React from 'react';
import Aux from '../../hoc/Auxiliary';
import SearchForm from '../UI/SearchForm';
import NavBar from '../UI/NavBar';

// header will contain the search form and the nav bar
// main will be the bulk of the content(gallery component)
const Layout = (props) => (
        <Aux>
            <header>
                <SearchForm /> 
                <NavBar 
                    imageGenres={props.imageGenres} />
            </header>
            <main>
                {props.children}
            </main>
        </Aux>
);

export default Layout;