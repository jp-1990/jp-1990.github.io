import React, { useState, useEffect } from 'react';
import NavItems from '../NavItems/NavItems';
import classes from './Toolbar.module.css';

const Toolbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let result;
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 520;

      if (isTop !== true) {
        result = true;
      } else {
        result = false;
      }
      setScrolled(result);
    });
    return () => {};
  }, [scrolled]);

  return (
    <header>
      <div className={scrolled ? classes.Toolbar : classes.Hide}>
        <nav>
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Toolbar;
