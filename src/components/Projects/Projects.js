import React from 'react';
import Project from './Project/Project';
import classes from './Projects.module.css';
import taskTrackerImg from '../../assets/images/tasktracker.png';

const projects = () => {
  const projectsArray = [
    {
      title: 'Task Tracker',
      subtitle: 'My first project',
      description: `While I was initially learning to code I was tracking my learning time using spreadsheets, but the format was not ideal for my purposes. With that in mind, I thought I would consolidate my knowledge by creating a web application to solve this problem.`,
      technologies: [
        'html',
        'css',
        'javascript',
        'nodejs',
        'express',
        'mongodb',
      ],
      image: taskTrackerImg,
    },
    {
      title: 'Placeholder test',
      subtitle: 'Testing dynamic generation',
      description: `While I was initially learning to code I was tracking my learning time using spreadsheets, but the format was not ideal for my purposes. With that in mind, I thought I would consolidate my knowledge by creating a web application to solve this problem.`,
      technologies: ['html', 'css', 'javascript', 'react'],
      image: null,
    },
    {
      title: 'Second test',
      subtitle: 'Testing generation again',
      description: `While I was initially learning to code I was tracking my learning time using spreadsheets, but the format was not ideal for my purposes. With that in mind, I thought I would consolidate my knowledge by creating a web application to solve this problem.`,
      technologies: [
        'html',
        'css',
        'javascript',
        'react',
        'nodejs',
        'mongodb',
        'express',
      ],
      image: null,
    },
  ];

  const displayProjects = projectsArray.map((el, index) => {
    return (
      <Project
        key={`${el.title}${index}`}
        title={el.title}
        subtitle={el.subtitle}
        description={el.description}
        technologies={el.technologies}
        image={el.image}
        side={index % 2 === 0 ? 'left' : 'right'}
      />
    );
  });

  return (
    <div className={classes.Projects}>
      <h1 className={classes.h1}>PROJECTS</h1>
      {displayProjects}
    </div>
  );
};

export default projects;
