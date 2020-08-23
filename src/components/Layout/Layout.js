import React from 'react';
import Toolbar from '../Nav/Toolbar/Toolbar';
import Footer from '../Footer/Footer';

const Layout = (props) => {
  return (
    <>
      <Toolbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
