import React from 'react';
import classes from './Title.module.css';

const title = () => {
  return (
    <div className={classes.Title}>
      <h1 className={classes.h1}>WEB DEVELOPER</h1>
      <h2 className={classes.h2}>James Plummer</h2>
    </div>
  );
};
export default title;
