import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '150px',
    width: '100%'
  }
}));

const NoResults = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='h3' align='center' component='h1' gutterBottom>
        No Results Found.
      </Typography>
      <Typography variant='h5' align='center' component='p'>
        Your search did not return any results. Please try again.
      </Typography>
    </div>
  );
};

export default NoResults;
