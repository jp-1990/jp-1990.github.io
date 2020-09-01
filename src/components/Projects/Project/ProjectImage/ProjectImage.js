import React from 'react';
import classes from './ProjectImage.module.css';

const ProjectImage = (props) => {
  const techList = props.tech.map((el, index) => {
    return <li key={`${el}${index}`}>{el.toUpperCase()}</li>;
  });

  return (
    <div className={classes.Image}>
      <img
        className={props.side === 'left' ? classes.L : classes.R}
        src={props.image}
        alt={props.title}
      />
      <ul className={props.side === 'left' ? classes.L : classes.R}>
        {techList}
      </ul>
    </div>
  );
};

export default ProjectImage;
