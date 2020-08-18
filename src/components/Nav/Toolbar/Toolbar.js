import React from 'react';
import NavItems from '../NavItems/NavItems';
import classes from './Toolbar.module.css';

const toolbar = () => {
  return (
    <header>
      <div className={classes.Toolbar}>
        <nav>
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default toolbar;
