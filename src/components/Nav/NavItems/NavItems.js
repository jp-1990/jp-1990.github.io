import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavItems.module.css';

const navItems = (props) => {
  return (
    <ul className={props.styles || classes.NavItems}>
      <NavItem>About</NavItem>
      <NavItem>Projects</NavItem>
      <NavItem>Skills</NavItem>
    </ul>
  );
};
export default navItems;
