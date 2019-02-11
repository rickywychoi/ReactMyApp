import React from 'react';
import classes from './Char.css';
import withClasses from '../../../hoc/WithClasses';

const Char = (props) => <p onClick={props.clicked}>{props.value}</p>

export default withClasses(Char, classes.CharMain);