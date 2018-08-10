import React from 'react';

//the idea is to wrap an image with the modal and display it when an image is clicked
const Modal = props => (
    <div className="modal">
        {props.children}
    </div>
);

export default Modal;