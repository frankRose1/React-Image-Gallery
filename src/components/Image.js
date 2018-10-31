import React from 'react';
import PropTypes from 'prop-types';

const Image = ({imgLink, imgTitle, showModalHandler}) => (
  <li onClick={ () => showModalHandler(imgLink, imgTitle) } >
    <img src={imgLink} alt={imgTitle}/>
  </li>
);

Image.propTypes = {
  imgLink: PropTypes.string.isRequired,
  imgTitle: PropTypes.string.isRequired,
  showModalHandler: PropTypes.func.isRequired,
};

export default Image;