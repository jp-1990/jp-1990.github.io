import React from 'react';
import Logos from './Logos/Logos';
import classes from './Skills.module.css';

const skills = (props) => {
  return (
    <div id={props.id} className={classes.Skills}>
      <h1 className={classes.h1}>SKILLS</h1>
      <p className={classes.Overview}>
        My main experience has been in the <strong>JavaScript MERN </strong>
        stack, comprising of
        <strong> MongoDB, Express, React</strong>, and{' '}
        <strong>Node.js. </strong>
        Within my projects I have examples of all of these technologies in use.
        These are supplemented with <strong>HTML5</strong> and
        <strong> CSS3 </strong> to facilitate the creation of both content
        delivery sites, as well as full-stack web applications.
      </p>
      <Logos />
      <h2>Transferable skills</h2>
      <p className={classes.Overview}>
        I have always enjoyed challenges and <strong>problem solving</strong>,
        which has led to a natural development of this skill. During my various
        endeavours I have also cultivated good
        <strong>
          {' '}
          time management, project planning, self-motivation
        </strong> and <strong>stress management </strong>
        skills. In addition, I have experience working in a
        <strong> team environment</strong>, which necessitated
        <strong> good communication</strong> and a level of
        <strong> personal responsibility </strong>
        to ensure the team achieved the assigned target.
      </p>
      <button>
        <a href='/'>View Curriculum Vitae</a>
      </button>
    </div>
  );
};

export default skills;
