import React from 'react';

//clicking on an li should show a modal with an enlarged version of that image
const GalleryItem = props =>  (
        <li onClick={ () => props.showModalHandler(props.imageUrl, props.imageTitle) }>
            <img src={props.imageUrl} alt={props.imageTitle} />
        </li>
);

export default GalleryItem;