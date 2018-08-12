import React from 'react';
import Images from './Images';
import {NavLink, Route} from 'react-router-dom';
import Loading from '../../UI/Loading';

//if the request is not yet resolved(props.isLoading), show the loading animation
const Gallery = (props) => {

    if (props.isLoading) {
        return <Loading />;
    }

    return (
        <div className="photo-container">
            <div className="gallery-header">
                <h2>{props.results || "Your Search Results"}</h2>
                <ul className="sub-nav">
                    <li onClick={ () => props.getImagesHandler('astronomy')}><NavLink to="/gallery/astronomy">Astronomy</NavLink></li>
                    <li onClick={ () => props.getImagesHandler('hiking')}><NavLink to="/gallery/hiking">Hiking</NavLink></li>
                    <li onClick={ () => props.getImagesHandler('puppies')}><NavLink to="/gallery/puppies">Puppies</NavLink></li>
                </ul>
            </div>
            <ul>
                {/*routes to gallery images here Here */}
                <Route path="/gallery/astronomy" render={ () => <Images images={props.images} showModalHandler={props.showModalHandler}/> }/>
                <Route path="/gallery/hiking" render={ () => <Images images={props.images} showModalHandler={props.showModalHandler}/> }/>
                <Route path="/gallery/puppies" render={ () => <Images images={props.images} showModalHandler={props.showModalHandler}/> }/>
            </ul>
        </div>
    );
};

export default Gallery;