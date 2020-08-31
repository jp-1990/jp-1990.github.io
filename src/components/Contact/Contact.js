import React from 'react';
import classes from './Contact.module.css';
import emailjs from 'emailjs-com';

const Contact = (props) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'portfolio_contact_form',
        'portfolio_contact_form',
        e.target,
        'user_Zja9UaqaNb26pNRFvD4Wo'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div id={props.id} className={classes.Contact}>
      <h1 className={classes.h1}>CONTACT</h1>
      <div className={classes.Container}>
        <ul>
          <li>
            <ion-icon name='call'></ion-icon>
            <p id='phone' className={classes.Phone}>
              07<span style={{ display: 'none' }}>sdfsadg</span>39
              <span style={{ display: 'none' }}>sdfsadg</span>3 29
              <span style={{ display: 'none' }}>sdfsadg</span>39
              <span style={{ display: 'none' }}>sdfsadg</span>27
            </p>
          </li>
          <li>
            <ion-icon name='mail'></ion-icon>
            <p id='email' className={classes.Email}>
              plum_<span style={{ display: 'none' }}>sdfsadg</span>
              1990<span style={{ display: 'none' }}>fghjtd</span>@
              <span style={{ display: 'none' }}>ytrtuy</span>hotmail.co
              <span style={{ display: 'none' }}>cvbvnm</span>.uk
            </p>
          </li>
          <li>
            <ion-icon name='logo-github'></ion-icon>
            <p>
              <a href='https://github.com/jp-1990'>github.com (jp-1990)</a>
            </p>
          </li>
        </ul>
        <form className='contact-form' onSubmit={sendEmail}>
          <input type='hidden' name='contact_number' />
          <label>Name</label>
          <input type='text' name='user_name' />
          <label>Email</label>
          <input type='email' name='user_email' />
          <label>Message</label>
          <textarea name='message' />
          <input type='submit' value='Send' />
        </form>
      </div>
    </div>
  );
};

export default Contact;
