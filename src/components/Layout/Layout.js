import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Header from '../UI/Header';
import Gallery from '../UI/Gallery/Gallery';

// header contains icon navBar and search form
// gallery is where all of the images will go
const Layout = (props) => {
    return (
        <Aux>
            <Header getImagesHandler={props.getImagesHandler}/>
            <main>
                <Gallery images={props.images}
                        results={props.results}
                        isLoading={props.isLoading} 
                        showModalHandler={props.showModalHandler}/>
            </main>
        </Aux>
    );
};

export default Layout;