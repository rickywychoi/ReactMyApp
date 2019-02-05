import React from 'react';
import classes from './Header.css'
import WithClasses from '../../hoc/WithClasses';

const Header = () => {
  return (
    <WithClasses classes={classes.header}>
      <h1>This is a header.</h1>
      <p>This should be awesome.</p>
    </WithClasses>
    );
};

export default Header;