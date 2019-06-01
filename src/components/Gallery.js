import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import Aux from '../hoc/Auxiliary';
import Images from './Images';

class Gallery extends Component {
  render() {
    const { match } = this.props;
    const { path, url } = match;
    console.log(path, url);
    return (
      <Aux>
        <nav className='gallery-nav'>
          <ul>
            <li>
              <NavLink to={`${url}/astronomy`}>Astronomy</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/hiking`}>Hiking</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/puppies`}>Puppies</NavLink>
            </li>
          </ul>
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
      </Aux>
    );
  }
}

export default Gallery;
