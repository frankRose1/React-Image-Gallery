import React from 'react';
import PropTypes from 'prop-types';

//clicking the overlay will hide both the modal and overlay
const Overlay = ({show, hideModalHandler}) => (
  show ? <div className="overlay" onClick={hideModalHandler}></div> : null
);

Overlay.propTypes = {
  show: PropTypes.bool.isRequired,
  hideModalHandler: PropTypes.func.isRequired
}

export default Overlay;