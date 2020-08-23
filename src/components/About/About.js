import React from 'react';
import classes from './About.module.css';

const about = (props) => {
  return (
    <div id={props.id} className={classes.About}>
      <h1 className={classes.h1}>About</h1>
      <p className={classes.Overview}>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem.
      </p>
      <div className={classes.Section}>
        <div className={classes.Image}>IMAGE</div>
        <div className={classes.Text}>
          <h2>Why Programming?</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </p>
        </div>
      </div>
      <div className={classes.Section}>
        <div className={classes.Image}>IMAGE</div>
        <div className={classes.Text}>
          <h2>Future Plans</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </p>
        </div>
      </div>
      <p className={classes.Overview}>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem.
      </p>
    </div>
  );
};

export default about;
