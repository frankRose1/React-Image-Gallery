import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Aux from '../../hoc/Auxiliary';
import NavBar from '../UI/NavBar/NavBar';
import SearchForm from '../UI/SearchForm';
import Gallery from '../UI/Gallery/Gallery';

//TODO show the results title dynamically in gallery
const Layout = props => {

    return (
        <Aux>
            <header>
                <SearchForm getImagesHandler={props.getImages}/> 
                <NavBar getImagesHandler={props.getImages}/>
            </header>
            <main>
                <Switch>
                    <Route exact path="/" render={ () => <Redirect to={'/astronomy'}/>} />
                    <Route path="/astronomy" render={ () => <Gallery images={props.images} results='Astronomy' isLoading={props.isLoading} showModalHandler={props.showModalHandler} />} />
                    <Route path="/hiking" render={ () => <Gallery images={props.images} results='Hiking' isLoading={props.isLoading} showModalHandler={props.showModalHandler}/>} />
                    <Route path="/puppies" render={ () => <Gallery images={props.images} results='Puppies' isLoading={props.isLoading} showModalHandler={props.showModalHandler}/>} />
                    <Route path="/:searchQuery" render={ () => <Gallery images={props.images} isLoading={props.isLoading} showModalHandler={props.showModalHandler} />} />
                    { /* <Route component={NotFound} /> */}
                </Switch>
            </main>
        </Aux>
    );
};

export default Layout;