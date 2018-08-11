import React from 'react';
import GalleryItem from './GalleryItem';
import NoResults from './NoResults';
import Loading from '../Loading';

//generate the images from the state
//if there are no results (length === 0), show the <NoResults /> component
//if the request is not yet resolved(props.isLoading), show the loading animation
const Gallery = props => {

    let galleryJSX;
    if (props.images.length === 0) {
        galleryJSX = <NoResults /> 
    } else {
        galleryJSX = props.images.map(img => (
                        <GalleryItem 
                            key={img.id}
                            imageTitle={img.title}
                            imageUrl={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`}
                            showModalHandler={props.showModalHandler}/>
        ))
    }

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {props.isLoading ? <Loading /> : galleryJSX}
            </ul>
        </div>
    );
};

export default Gallery;