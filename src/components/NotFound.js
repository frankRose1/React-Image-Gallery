import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ErrorIcon from '@material-ui/icons/Error';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '100px auto',
    width: '70%',
    textAlign: 'center'
  },
  errorMessage: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '0 auto 30px auto',
    width: '50%',
    fontSize: '70px',
    padding: '15px'
  },
  errIcon: {
    fontSize: '140px',
    color: 'tomato'
  }
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.errorMessage}>
        <ErrorIcon className={classes.errIcon} />
        <h1>404</h1>
      </div>
      <Typography component='p' variant='h5'>
        Sorry, the page you requested could not be found.
      </Typography>
    </div>
  );
};

export default NotFound;
