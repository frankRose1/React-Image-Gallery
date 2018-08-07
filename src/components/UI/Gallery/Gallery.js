import React from 'react';
import GalleryItem from './GalleryItem';
import NoResults from './NoResults';

/* the image url takes the following format:
    https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg */
const Gallery = props => {
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {props.images.map(img => (
                    <GalleryItem 
                        key={img.id}
                        imageTitle={img.title}
                        imageUrl={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`}/>
                ))}

                <NoResults />
            </ul>
        </div>
    );
};

export default Gallery;