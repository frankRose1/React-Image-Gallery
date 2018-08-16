import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Header from '../UI/Header';

//props.children will either be the gallerry or the search form depending on what was clicked in the navigation
const Layout = (props) => {
    return (
        <Aux>
            <Header/>
            <main>
                {props.children}
            </main>
        </Aux>
    );
};

export default Layout;