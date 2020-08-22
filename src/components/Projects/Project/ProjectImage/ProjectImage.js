import React from 'react';
import classes from './ProjectImage.module.css';

const ProjectImage = (props) => {
  // const colors = {
  //   javascript: '#f7df1e',
  //   nodejs: '#3C873A',
  //   express: '#129cd6',
  //   mongodb: '#589636',
  //   react: '#61DBFB',
  //   html: '#e34c26',
  //   css: '#2965f1',
  // };
  return (
    <div className={classes.Image}>
      <div className={classes.Img}>Image placeholder</div>
      <ul className={props.side === 'left' ? classes.L : classes.R}>
        <li>js</li>
        <li>node</li>
        <li>mongoDB</li>
        <li>express</li>
        <li>react</li>
      </ul>
    </div>
  );
};

export default ProjectImage;
