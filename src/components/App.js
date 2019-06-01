import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import withRoot from '../withRoot';
import Layout from './Layout';
import Search from './Search';
import NotFound from './NotFound';
import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Layout>
          <Switch>
            <Route
              exact
              path='/'
              render={props => <Redirect to='/gallery' {...props} />}
            />
            <Route path='/gallery' component={Gallery} />
            <Route path='/search' component={Search} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default withRoot(App);
