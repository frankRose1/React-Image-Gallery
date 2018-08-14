import React from 'react';
import Images from './Images';
import {Switch, Route, Redirect} from 'react-router-dom';
import FileNotFound from '../FileNotFound';
import Loading from '../Loading';

//if the request is not yet resolved(props.isLoading), show the loading animation
//use path for Routes and url for Links
const Gallery = (props) => {

    if (props.isLoading) {
        return <Loading />;
    }

    return (
        <div className="photo-container">
            <h2>{props.results}</h2>
                <Switch>
                    {/*redirect to the first link when the page loads*/}
                    {<Route exact path="/" render={() => <Redirect to="/astronomy" />} />}
                    <Route path="/astronomy" render={ () => <Images images={props.images} showModalHandler={props.showModalHandler}/>} />
                    <Route path="/hiking" render={ () => <Images images={props.images} showModalHandler={props.showModalHandler}/>} />
                    <Route path="/puppies" render={ () => <Images images={props.images} showModalHandler={props.showModalHandler}/>} />
                    <Route path="/search/:query" render={ () => <Images images={props.images} showModalHandler={props.showModalHandler}/>} />
                    <Route component={FileNotFound} />
                </Switch>
        </div>
    );
};

export default Gallery;