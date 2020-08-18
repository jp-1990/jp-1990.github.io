import React from 'react';

import Title from './Title/Title';
import HeroNav from './HeroNav/HeroNav';
import classes from './Hero.module.css';

const hero = () => {
  return (
    <div className={classes.Hero}>
      <Title />
      <HeroNav />
    </div>
  );
};
export default hero;
