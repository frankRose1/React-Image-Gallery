import React from 'react';

//the idea is to wrap an image with the modal and display it when an image is clicked
const Modal = props => { 
    let modalClass;
    if (props.show) {
        modalClass = "modal";
    } else {
        modalClass = "modal-hide";
    }
    return (
        <div className={modalClass}>
            {props.children}
        </div>
    );
};

export default Modal;