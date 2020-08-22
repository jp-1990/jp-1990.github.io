import React from 'react';
import classes from './Project.module.css';
import ProjectText from './ProjectText/ProjectText';
import ProjectImage from './ProjectImage/ProjectImage';

const project = (props) => {
  let output = '';
  if (props.side === 'left') {
    output = (
      <div className={classes.ProjectL}>
        <ProjectText details={props} />
        <ProjectImage side={props.side} />
      </div>
    );
  } else {
    output = (
      <div className={classes.ProjectR}>
        <ProjectImage side={props.side} />
        <ProjectText details={props} />
      </div>
    );
  }

  return output;
};

export default project;
