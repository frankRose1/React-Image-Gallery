import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Images from './Images';

class Gallery extends Component {
  render() {
    const { match, classes } = this.props;
    const { path, url } = match;
    const links = [
      { path: '/astronomy', text: 'Astronomy' },
      { path: '/hiking', text: 'Hiking' },
      { path: '/puppies', text: 'Puppies' }
    ];

    return (
      <>
        <nav className={classes.galleryNav}>
          {links.map(link => (
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              key={link.text}
            >
              <NavLink className={classes.navLink} to={`${url}${link.path}`}>
                {link.text}
              </NavLink>
            </Button>
          ))}
        </nav>
        <Switch>
          <Route
            exact
            path={path}
            render={() => <Redirect to={`${path}/astronomy`} />}
          />
          <Route
            path={`${path}/:query`}
            render={({ match }) => <Images searchQuery={match.params.query} />}
          />
        </Switch>
      </>
    );
  }
}

const styles = theme => ({
  galleryNav: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      maxWidth: '350px'
    }
  },
  button: {
    marginBottom: '20px',
    [theme.breakpoints.up('sm')]: {
      marginBottom: '0'
    }
  },
  navLink: {
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: 'bold'
  }
});

export default withStyles(styles)(Gallery);
