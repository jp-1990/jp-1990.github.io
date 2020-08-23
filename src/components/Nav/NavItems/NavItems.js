import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavItems.module.css';

const navItems = (props) => {
  return (
    <ul className={props.styles || classes.NavItems}>
      <NavItem y={0}>JPlummer</NavItem>
      <NavItem y={props.yValues.projects}>PROJECTS</NavItem>
      <NavItem y={props.yValues.about}>ABOUT</NavItem>
      <NavItem y={props.yValues.skills}>SKILLS</NavItem>
    </ul>
  );
};
export default navItems;
