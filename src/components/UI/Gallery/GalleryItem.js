import React from 'react';

const GalleryItem = props =>  (
        <li onClick={ () => props.showModalHandler(props.imageUrl, props.imageTitle) }>
            <img src={props.imageUrl} alt={props.imageTitle} />
        </li>
);

export default GalleryItem;