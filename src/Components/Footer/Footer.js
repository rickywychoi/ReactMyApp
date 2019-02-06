import React from 'react';
import './Footer.css'
import classes from './Footer.css';
import withClasses from '../../hoc/WithClasses';
import Aux from '../../hoc/Aux';

const Footer = () => {
  return (
    <Aux>
      <h1>This is a footer.</h1>
      <p>This should be awesome.</p>
    </Aux>
    );
};

export default withClasses(Footer, classes.footer);