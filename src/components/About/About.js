import React from 'react';
import classes from './About.module.css';

const about = (props) => {
  return (
    <div id={props.id} className={classes.About}>
      <h1 className={classes.h1}>ABOUT</h1>
      <p className={classes.Overview}>
        As a developer I strive to complete projects to the{' '}
        <strong>satisfaction of the client</strong>, and beyond that, I embody a
        drive to <strong>learn and improve</strong> my skills. To me, this is
        not 'just a job', but a subject I am passionate about, and one that I am
        <strong> commited</strong> to continuing to enhance my skills in.
      </p>
      <div className={classes.Section}>
        <div className={classes.Image}></div>
        <div className={classes.Text}>
          <h2>The Beginning</h2>
          <p>
            My programming journey started when a previous employer was
            struggling with a growing business, and an unscalable invoicing
            system. Without the capacity to hire a developer to solve the
            problem, I offered to improve it as much as I could. With, at the
            time, very limited IT experience I elevated it from a disorganised
            static Excel spreadsheet relying on mail merge, to a VBA powered
            system allowing formatted PDF invoices to be created in just a few
            mouse clicks.
          </p>
          <p>
            <strong>
              This project opened my eyes to the world of programming, solved a
              business need, and ignited a passion which has only continued to
              grow.
            </strong>
          </p>
        </div>
      </div>
      <div className={classes.Section}>
        <div className={classes.Image}></div>
        <div className={classes.Text}>
          <h2>Personal Motivations</h2>
          <p>
            In me, you will find a developer who is passionate about problem
            solving, with the ability to relate to the multiple perspectives of
            those involved in a project. I deal with stress well, and feel a
            great deal of satisfaction on the successful completion of a
            project. Learning new technologies, and applying the skills I’ve
            learnt is of great interest to me, making me an adaptable and
            versatile member of the team.
          </p>
          <p>
            <strong>
              From my first experience of reading Excel cell values in VBA, to
              creating full-stack JavaScript applications, my motivations to
              improve my skills in this field have only increased.
            </strong>
          </p>
        </div>
      </div>
      <p className={classes.Overview}>
        In inviting me to join your team you will find someone who is
        <strong> self-motivated</strong> and capable of independent work, while
        also respecting the strengths gained from
        <strong> teamwork and good communication.</strong> I am someone who is
        commited to continued growth, and achieving a
        <strong> high standard of work.</strong>
      </p>
    </div>
  );
};

export default about;
