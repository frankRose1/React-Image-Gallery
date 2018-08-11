import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Aux from '../../hoc/Auxiliary';
import NavBar from '../UI/NavBar/NavBar';
import SearchForm from '../UI/SearchForm';
import Gallery from '../UI/Gallery/Gallery';
import Loading from '../UI/Loading';

//TODO do all of the routing here
// TODO refactor isLoading will need to move the isLoading prop to gallery?
//TODO show the results title dynamically in gallery
const Layout = props => {
    // let imageGallery;

    // if (props.isLoading) {
    //     imageGallery = <Loading />
    // } else {
    //     imageGallery = props.children;
    // }

    return (
        <Aux>
            <header>
                <SearchForm getImagesHandler={props.getImages}/> 
                <NavBar getImagesHandler={props.getImages}/>
            </header>
            <main>
                <Switch>
                    {/* <Route exact path="/" render={ () => <Redirect to={'/gallery/astronomy'}/>} /> */}
                    <Route path="/astronomy" render={ () => <Gallery images={props.images} showModalHandler={props.showModalHandler} />} />
                    <Route path="/hiking" render={ () => <Gallery images={props.images} />} />
                    <Route path="/puppies" render={ () => <Gallery images={props.images} />} />
                    <Route path="/:searchQuery" render={ () => <Gallery images={props.images} />} />
                    { /* <Route component={NotFound} /> */}
                </Switch>
            </main>
        </Aux>
    );
};

export default Layout;