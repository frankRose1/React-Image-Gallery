import React from 'react';
import Nav from './Nav';

const Layout = props => (
  <>
    <header>
      <Nav />
    </header>
    <main style={{ marginTop: '100px' }}>{props.children}</main>
  </>
);

export default Layout;
