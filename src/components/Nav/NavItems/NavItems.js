import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavItems.module.css';

const navItems = () => {
  return (
    <ul className={classes.NavItems}>
      <NavItem>About</NavItem>
      <NavItem>Projects</NavItem>
      <NavItem>Skills</NavItem>
    </ul>
  );
};
export default navItems;
