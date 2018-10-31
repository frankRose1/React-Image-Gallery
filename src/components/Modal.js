import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../hoc/Auxiliary';
import Overlay from './Overlay';

const Modal = ({show, hideModalHandler, imgLink, imgTitle}) => {
  let modalClass;
  if (show) {
      modalClass = "modal";
  } else {
      modalClass = "modal hide";
  }

  return (
    <Aux>
      <Overlay 
        show={show} 
        hideModalHandler={hideModalHandler}/>
      <div className={modalClass}>
        <h3>{imgTitle}</h3>
        <img src={imgLink} alt={imgTitle}/>
      </div>
    </Aux>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  hideModalHandler: PropTypes.func.isRequired,
  imgLink: PropTypes.string.isRequired,
  imgTitle: PropTypes.string
};

export default Modal;