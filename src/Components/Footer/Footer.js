import React from 'react';
import './Footer.css'
import classes from './Footer.css';
import WithClasses from '../../hoc/WithClasses';

const Footer = () => {
  return (
    <WithClasses classes={classes.footer}>
      <h1>This is a footer.</h1>
      <p>This should be awesome.</p>
    </WithClasses>
    );
};

export default Footer;