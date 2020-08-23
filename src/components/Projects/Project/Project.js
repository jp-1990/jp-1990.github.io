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
        <ProjectImage
          side={props.side}
          tech={props.technologies}
          image={props.image}
          title={props.title}
        />
      </div>
    );
  } else {
    output = (
      <div className={classes.ProjectR}>
        <ProjectImage
          side={props.side}
          tech={props.technologies}
          image={props.image}
          title={props.title}
        />
        <ProjectText details={props} />
      </div>
    );
  }

  return output;
};

export default project;
