import React, { useState } from 'react';
import classes from './Example.css';
import withClasses from '../../hoc/WithClasses';

const Example = () => {
  const [name, setName] = useState('');
  function nameChangeHandler(e) {
    setName(e.target.value);
  };
  return (
    <div>
      <input value={name} onChange={(e)=>nameChangeHandler(e)} />
      <p>Hello, {name}</p>
    </div>
  )
}

export default withClasses(Example, classes.body);