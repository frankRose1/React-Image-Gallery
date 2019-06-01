import React from 'react';
import Nav from './Nav';

const Layout = props => (
  <>
    <header>
      <Nav />
    </header>
    <main>{props.children}</main>
  </>
);

export default Layout;
