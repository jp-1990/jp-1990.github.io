import React from 'react';
import Project from './Project/Project';
import classes from './Projects.module.css';
import taskTrackerImg from '../../assets/images/tasktracker.png';
import portfolioIMG from '../../assets/images/portfolio.png';

const projects = (props) => {
  const projectsArray = [
    {
      title: 'Task Tracker',
      subtitle: 'My first project',
      description: `While I was initially learning to code I was tracking my learning time using spreadsheets, but the format was not ideal for my purposes. With that in mind, I thought I would consolidate my knowledge by creating a web application to solve this problem. \n \n //Hosted on Heroku, allow up to 30 seconds for the server to start \n`,
      technologies: [
        'html',
        'css',
        'javascript',
        'nodejs',
        'express',
        'mongodb',
      ],
      image: taskTrackerImg,
      github: 'https://github.com/jp-1990/task-tracker',
      live: 'https://fathomless-journey-08641.herokuapp.com/',
      liveIcon: 'devicon-heroku-original',
    },
    {
      title: 'Portfolio',
      subtitle: 'Consolidating React',
      description: `At this point I was part way through a React course, and felt it would be beneficial to use the technology in order to solidify the concepts I had learnt. I also did not have a portfolio, and to make efficient use of my time, I decided to tackle both of these tasks in unison. \n \n //Hosted on GitHub Pages`,
      technologies: ['html', 'css', 'javascript', 'react'],
      image: portfolioIMG,
      github: 'https://github.com/jp-1990/jp-1990.github.io',
      live: 'https://jp-1990.github.io/',
      liveIcon: 'devicon-github-plain',
    },
    // {
    //   title: 'Second test',
    //   subtitle: 'Testing generation again',
    //   description: `While I was initially learning to code I was tracking my learning time using spreadsheets, but the format was not ideal for my purposes. With that in mind, I thought I would consolidate my knowledge by creating a web application to solve this problem.`,
    //   technologies: [
    //     'html',
    //     'css',
    //     'javascript',
    //     'react',
    //     'nodejs',
    //     'mongodb',
    //     'express',
    //   ],
    //   image: null,
    //   github: null,
    //   live: null,
    //   liveIcon: null,
    // },
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
        github={el.github}
        live={el.live}
        liveIcon={el.liveIcon}
        side={index % 2 === 0 ? 'left' : 'right'}
      />
    );
  });

  return (
    <div id={props.id} className={classes.Projects}>
      <h1 className={classes.h1}>PROJECTS</h1>
      {displayProjects}
    </div>
  );
};

export default projects;
