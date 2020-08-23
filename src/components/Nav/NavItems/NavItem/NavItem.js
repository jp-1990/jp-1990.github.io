import React from 'react';
import classes from './NavItem.module.css';

// window.scroll({
//   left: 0,
//   top: document.getElementById('Projects').offsetTop - 60,
//   behavior: 'smooth',
// });

const navItem = (props) => {
  const scrollHandler = () => {
    window.scroll({
      left: 0,
      top: props.y - 40,
      behavior: 'smooth',
    });
  };
  return (
    <li className={classes.NavItem}>
      <p className={classes[props.children]} onClick={scrollHandler}>
        {props.children}
      </p>
    </li>
  );
};

export default navItem;
