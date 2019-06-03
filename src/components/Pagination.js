import React from 'react';
import PropTypes from 'prop-types';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import ArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const Pagination = ({ imageIndex, pageImages, numResults }) => (
  <DialogActions>
    {imageIndex > 0 && (
      <Button onClick={() => pageImages(imageIndex, 'prev')}>
        <ArrowLeftIcon />
      </Button>
    )}

    <span>
      {imageIndex + 1} of {numResults}
    </span>
    {imageIndex < numResults - 1 && (
      <Button onClick={() => pageImages(imageIndex, 'next')}>
        <ArrowRightIcon />
      </Button>
    )}
  </DialogActions>
);

Pagination.propTypes = {
  imageIndex: PropTypes.number.isRequired,
  pageImages: PropTypes.func.isRequired,
  numResults: PropTypes.number.isRequired
};

export default Pagination;
