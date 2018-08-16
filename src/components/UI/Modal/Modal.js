import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Overlay from './Overlay/Overlay';

//import the overlay here because it is closely connected to the modal
    //when the modal is shown/hidden, the overlay should be shown/hidden
const Modal = props => {
    let modalClass;
    if (props.show) {
        modalClass = "modal";
    } else {
        modalClass = "modal hide";
    }

    return (
        <Aux>
            <Overlay show={props.show} hideModalHandler={props.hideModalHandler}/>
            <div className={modalClass}>
                {props.children}
            </div>
        </Aux>
    );
};

export default Modal;