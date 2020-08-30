import React from 'react';
import classes from './NavItem.module.css';

const navItem = (props) => {
  const scrollHandler = () => {
    window.scroll({
      left: 0,
      top: props.y - 60,
      behavior: 'smooth',
    });
  };
  return (
    <li
      className={classes[props.styles] || classes.NavItem}
      onClick={scrollHandler}
    >
      <p className={classes[props.children]}>{props.children}</p>
    </li>
  );
};

export default navItem;
