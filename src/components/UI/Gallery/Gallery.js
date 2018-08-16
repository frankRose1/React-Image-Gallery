import React from 'react';
import Images from './Images';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Aux from '../../../hoc/Auxiliary';
import GalleryNav from '../Navigation/GalleryNav/GalleryNav';
import FileNotFound from '../FileNotFound';

const Gallery = (props) => {
    const {match} = props;

    return (
        <Aux>
            <GalleryNav getImagesHandler={props.getImagesHandler} url={match.url}/>
            <Switch>
                {/*redirect to the first link when gallery is visited*/}
                <Route exact path={match.path} render={() => <Redirect to={`${match.path}/astronomy`} />} />
                <Route path={`${match.path}/astronomy`} render={ () => <Images isLoading={props.isLoading} results={props.results} images={props.images} showModalHandler={props.showModalHandler}/>} />
                <Route path={`${match.path}/hiking`} render={ () => <Images isLoading={props.isLoading} results={props.results} images={props.images} showModalHandler={props.showModalHandler}/>} />
                <Route path={`${match.path}/puppies`} render={ () => <Images isLoading={props.isLoading} results={props.results} images={props.images} showModalHandler={props.showModalHandler}/>} />
                <Route path="/search/:query" render={ () => <Images isLoading={props.isLoading} results={props.results} images={props.images} showModalHandler={props.showModalHandler}/>} />
                <Route component={FileNotFound} />
            </Switch>
        </Aux>
    );
};

export default withRouter(Gallery);