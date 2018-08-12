import React from 'react';
import GalleryItem from './GalleryItem';
import NoResults from './NoResults'

// create the images from the response or return noResults from the search
const Images = props => {
    if (props.images.length === 0) {
        return <NoResults />;
    } else {
        return props.images.map(img => (
                            <GalleryItem 
                                key={img.id}
                                imageTitle={img.title}
                                imageUrl={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`}
                                showModalHandler={props.showModalHandler}/>
        ))
    }
}

export default Images;