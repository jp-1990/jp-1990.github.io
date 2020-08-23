import React, { useState, useEffect } from 'react';
import NavItems from '../NavItems/NavItems';
import classes from './Toolbar.module.css';

const Toolbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [widthHeight, setWidthHeight] = useState();
  const [projectsY, setProjectsY] = useState();
  const [aboutY, setAboutY] = useState();
  const [skillsY, setSkillsY] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWidthHeight([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleResize);
    return (_) => window.removeEventListener('resize', handleResize);
  });

  useEffect(() => {
    setProjectsY(document.getElementById('Projects').offsetTop);
    setAboutY(document.getElementById('About').offsetTop);
    setSkillsY(document.getElementById('Skills').offsetTop);
  }, [widthHeight]);

  useEffect(() => {
    let result;
    window.addEventListener('scroll', () => {
      const display =
        document.querySelector('main').getBoundingClientRect().y < 68;

      if (display !== true) {
        result = false;
      } else {
        result = true;
      }
      setScrolled(result);
    });
    return () => {};
  }, [scrolled]);

  return (
    <header>
      <div className={scrolled ? classes.Toolbar : classes.Hide}>
        <nav>
          <NavItems
            yValues={{ projects: projectsY, about: aboutY, skills: skillsY }}
          />
        </nav>
      </div>
    </header>
  );
};

export default Toolbar;
