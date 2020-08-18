import React from 'react';
import Toolbar from '../Nav/Toolbar/Toolbar';

const layout = (props) => {
  return (
    <>
      <Toolbar />
      <main>{props.children}</main>
    </>
  );
};

export default layout;
