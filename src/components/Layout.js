import React from 'react';
import Aux from '../hoc/Auxiliary';
import Nav from './Nav';

const Layout = props => (
  <Aux>
    <header>
      <i className="fas fa-camera-retro"></i>
      <Nav />
    </header>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default Layout;