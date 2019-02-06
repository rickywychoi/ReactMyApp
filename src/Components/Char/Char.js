import React from 'react';
import classes from './Char.css'
import withClasses from '../../hoc/WithClasses'
import Aux from '../../hoc/Aux';

const Char = (props) => {
  return (
    <Aux>
      <p onClick={props.clicked}>{props.value}</p>
    </Aux>
      
  );
}

export default withClasses(Char, classes.CharMain);