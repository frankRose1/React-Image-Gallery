import React from 'react';
import GalleryItem from './GalleryItem';
import Loading from '../Loading';
import NoResults from './NoResults';

// if the response is not resolved yet, return the loading animation
// create the images from the response or return noResults from the search
const Images = props => {
    if (props.isLoading) {
        return <Loading />;
    } else if (props.images.length === 0) {
        return <NoResults />;
    } else {
        return ( <div className="photo-container">
                    <h2>{props.results}</h2>
                    <ul className="photo-gallery">
                    {props.images.map(img => (
                        <GalleryItem 
                            key={img.id}
                            imageTitle={img.title}
                            imageUrl={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`}
                            showModalHandler={props.showModalHandler} /> ))}
                    </ul>
                </div>
            )
    }
}

export default Images;