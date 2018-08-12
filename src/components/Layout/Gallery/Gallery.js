import React from 'react';
import Images from './Images';
import {NavLink, Route, Redirect, withRouter} from 'react-router-dom';
import Loading from '../../UI/Loading';

//if the request is not yet resolved(props.isLoading), show the loading animation
//use path for Routes and url for Links
const Gallery = (props) => {
    const {match} = props;

    if (props.isLoading) {
        return <Loading />;
    }

    return (
        <div className="photo-container">
            <div className="gallery-header">
                <h2>{props.results || "Your Search Results"}</h2>
                <ul className="sub-nav">
                    <li onClick={ () => props.getImagesHandler('astronomy')}><NavLink to={`${match.url}/astronomy`}>Astronomy</NavLink></li>
                    <li onClick={ () => props.getImagesHandler('hiking')}><NavLink to={`${match.url}/hiking`}>Hiking</NavLink></li>
                    <li onClick={ () => props.getImagesHandler('puppies')}><NavLink to={`${match.url}/puppies`}>Puppies</NavLink></li>
                </ul>
            </div>
            <ul className="photo-gallery">
                {/*redirect to the first NavLink when /gallery is visited */}
                <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/astronomy`} />} />
                <Route path={`${match.path}/astronomy`} render={ () => <Images images={props.images} showModalHandler={props.showModalHandler}/> }/>
                <Route path={`${match.path}/hiking`} render={ () => <Images images={props.images} showModalHandler={props.showModalHandler}/> }/>
                <Route path={`${match.path}/puppies`} render={ () => <Images images={props.images} showModalHandler={props.showModalHandler}/> }/>
            </ul>
        </div>
    );
};

export default withRouter(Gallery);