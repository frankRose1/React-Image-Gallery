import React from 'react';

//if props.show is true return the overlay, else return null
//clicking the overlay will hide both the modal and overlay
const Overlay = props => (
    props.show ? <div className="overlay" onClick={props.hideModalHandler}></div> : null
);

export default Overlay;