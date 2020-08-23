import React from 'react';

import Title from './Title/Title';
import HeroNav from './HeroNav/HeroNav';
import classes from './Hero.module.css';

const hero = () => {
  return (
    <div className={classes.Underlay}>
      <div className={classes.Hero}></div>

      <Title />
      <HeroNav />
    </div>
  );
};
export default hero;
