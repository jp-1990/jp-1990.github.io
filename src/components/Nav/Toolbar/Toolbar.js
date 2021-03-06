import React, { useState, useEffect } from 'react';
import NavItems from '../NavItems/NavItems';
import classes from './Toolbar.module.css';

const Toolbar = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const [widthHeight, setWidthHeight] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [projectsY, setProjectsY] = useState();
  const [aboutY, setAboutY] = useState();
  const [skillsY, setSkillsY] = useState();
  const [contactY, setContactY] = useState();
  const [menuState, setMenuState] = useState('closed');

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
    setContactY(document.getElementById('Contact').offsetTop);
  }, [widthHeight]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const display =
        document.querySelector('main').getBoundingClientRect().y < 68;

      if (display !== true) {
        setScrolled(false);
        setMenuState('closed');
      } else {
        setScrolled(true);
      }
    });
    return () => {};
  }, [scrolled]);

  const toggleMenuHandler = () => {
    if (menuState === 'closed') {
      setMenuState('open');
      document.getElementById('toolbar').classList.remove(classes.closed);
      document.getElementById('toolbar').classList.add(classes.open);
    } else {
      setMenuState('closed');
      document.getElementById('toolbar').classList.remove(classes.open);
      document.getElementById('toolbar').classList.add(classes.closed);
    }
  };

  const output = () => {
    if (props.location === 'hero') {
      return (
        <div className={classes.HeroToolbar}>
          <nav className={classes.HeroNav}>
            <NavItems
              styles='HeroNavItem'
              location={props.location}
              yValues={{
                projects: projectsY,
                about: aboutY,
                skills: skillsY,
              }}
            />
          </nav>
        </div>
      );
    } else if (widthHeight[0] < 426) {
      return (
        <header>
          <div
            id='toolbar'
            className={
              scrolled
                ? `${classes.Toolbar} ${classes.Default}`
                : `${classes.Toolbar} ${classes.Hide}`
            }
          >
            <div className={scrolled ? classes.Menu : classes.None}>
              <div className={classes.Container} onClick={toggleMenuHandler}>
                <div
                  className={
                    menuState === 'open'
                      ? `${classes.Hamburger} ${classes.MenuOpen}`
                      : classes.Hamburger
                  }
                ></div>
              </div>
            </div>
            <nav
              className={menuState === 'open' ? null : classes.None}
              onClick={toggleMenuHandler}
            >
              <NavItems
                yValues={{
                  projects: projectsY,
                  about: aboutY,
                  skills: skillsY,
                  contact: contactY,
                }}
              />
            </nav>
          </div>
        </header>
      );
    } else {
      return (
        <header>
          <div className={scrolled ? classes.Toolbar : classes.Hide}>
            <nav>
              <NavItems
                yValues={{
                  projects: projectsY,
                  about: aboutY,
                  skills: skillsY,
                  contact: contactY,
                }}
              />
            </nav>
          </div>
        </header>
      );
    }
  };

  return output();
};

export default Toolbar;
