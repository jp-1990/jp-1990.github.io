import React from 'react';
import classes from './ProjectText.module.css';

const ProjectText = ({ details }) => {
  const { title, subtitle, description, github, live, liveIcon } = details;
  return (
    <div className={classes.Text}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{description}</p>
      <div className={classes.Buttons}>
        <button>
          <i className='devicon-github-plain'></i>
          <a href={github} target='_blank' rel='noopener noreferrer'>
            View Code
          </a>
        </button>
        <button>
          <i className={liveIcon}></i>
          <a href={live} target='_blank' rel='noopener noreferrer'>
            Visit Site
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectText;
