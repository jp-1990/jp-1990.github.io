import React from 'react';
import classes from './ProjectText.module.css';

const ProjectText = ({ details }) => {
  const { title, subtitle, description } = details;
  return (
    <div className={classes.Text}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{description}</p>
      <div className={classes.Buttons}>
        <button>
          <a href='/'>View Code</a>
        </button>
        <button>
          <a href='/'>Visit Site</a>
        </button>
      </div>
    </div>
  );
};

export default ProjectText;
