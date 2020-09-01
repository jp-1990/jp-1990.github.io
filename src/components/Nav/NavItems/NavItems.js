import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavItems.module.css';

const navItems = (props) => {
  if (props.location === 'hero') {
    return (
      <ul className={classes[props.styles + 's'] || classes.NavItems}>
        <NavItem styles={props.styles} y={props.yValues.about}>
          ABOUT
        </NavItem>
        <NavItem styles={props.styles} y={props.yValues.projects}>
          PROJECTS
        </NavItem>
        <NavItem styles={props.styles} y={props.yValues.skills}>
          SKILLS
        </NavItem>
      </ul>
    );
  } else {
    return (
      <ul className={classes.NavItems}>
        <NavItem y={0}>JPlummer</NavItem>
        <NavItem y={props.yValues.projects}>PROJECTS</NavItem>
        <NavItem y={props.yValues.about}>ABOUT</NavItem>
        <NavItem y={props.yValues.skills}>SKILLS</NavItem>
        <NavItem y={props.yValues.contact}>CONTACT</NavItem>
      </ul>
    );
  }
};
export default navItems;
