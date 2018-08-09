import React from 'react';
import Aux from '../../hoc/Auxiliary';
import NavBar from '../UI/NavBar/NavBar';
import SearchForm from '../UI/SearchForm';
import Loading from '../UI/Loading';

const Layout = props => {
    let imageGallery;

    if (props.isLoading) {
        imageGallery = <Loading />
    } else {
        imageGallery = props.children;
    }

    return (
        <Aux>
            <header>
                <SearchForm getImagesHandler={props.getImages}/> 
                <NavBar getImagesHandler={props.getImages}/>
            </header>
            <main>
                {imageGallery}
            </main>
        </Aux>
    );
};

export default Layout;