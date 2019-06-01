import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '700px',
    boxShadow: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
    margin: '50px auto',
    padding: '20px'
  },
  message: {
    fontSize: '18px',
    borderLeft: '5px solid red',
    paddingLeft: '5px',
    marginRight: '5px',
    fontWeight: 'bold'
  }
}));

const ErrorMessage = ({ error }) => {
  const classes = useStyles();
  if (!error) return null;

  return (
    <div className={classes.root}>
      <Typography align='center' component='h1' variant='h4' gutterBottom>
        We had some trouble with your request.
      </Typography>
      <p className={classes.message}>
        <span>Error: </span>
        {error.message}
      </p>
    </div>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string
  })
};

export default ErrorMessage;
