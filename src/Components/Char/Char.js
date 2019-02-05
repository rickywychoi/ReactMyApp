import React from 'react';
import classes from './Char.css'
import WithClasses from '../../hoc/WithClasses'

const Char = (props) => {
  return (
    <WithClasses classes={classes.CharMain}>
      <p onClick={props.clicked}>{props.value}</p>
    </WithClasses>
      
  );
}

export default Char;