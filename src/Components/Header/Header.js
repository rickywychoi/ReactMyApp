import React from 'react';
import classes from './Header.css'
import withClasses from '../../hoc/WithClasses';
import Aux from '../../hoc/Aux';

const Header = () => {
  return (
    <Aux>
      <h1>This is a header.</h1>
      <p>This should be awesome.</p>
    </Aux>
    );
};

export default withClasses(Header, classes.header);