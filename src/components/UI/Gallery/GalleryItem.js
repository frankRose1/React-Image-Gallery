import React from 'react';

const GalleryItem = props =>  (
        <li>
            <img src={props.imageUrl} alt={props.imageTitle} />
        </li>
);

export default GalleryItem;