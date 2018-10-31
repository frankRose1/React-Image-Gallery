import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({error}) => {
  if (!error) return null
  return (
    <div className="error-message">
      <h2>Shoot! We had some trouble with your request.</h2>
      <p><span>Error: </span>{error.message}</p>
    </div>
  )
};

ErrorMessage.propTypes = {
  error: PropTypes.object
};

export default ErrorMessage;