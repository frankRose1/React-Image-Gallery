import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
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
            <NavLink
              className={classes.navLi}
              key={link.text}
              to={`${url}${link.path}`}
            >
              {link.text}
            </NavLink>
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
    },
    '& .active': {
      backgroundColor: '#438bbd'
    }
  },
  navLi: {
    fontSize: '.90em',
    fontWeight: 700,
    color: '#fff',
    textTransform: 'capitalize',
    display: 'block',
    padding: '0.8em',
    transition: 'all 0.5s ease-in-out',
    borderRadius: '3px',
    background: '#38ACEC',
    '&:hover': {
      backgroundColor: '#438bbd'
    }
  }
});

export default withStyles(styles)(Gallery);
