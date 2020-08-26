import React from 'react';
import Logos from './Logos/Logos';
import classes from './Skills.module.css';

const skills = (props) => {
  return (
    <div id={props.id} className={classes.Skills}>
      <h1 className={classes.h1}>SKILLS</h1>
      <p className={classes.Overview}>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem.
      </p>
      <Logos />
      <h2>Transferable skills</h2>
      <p className={classes.Overview}>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem.
      </p>
      <button>
        <a href='/'>View Curriculum Vitae</a>
      </button>
    </div>
  );
};

export default skills;
