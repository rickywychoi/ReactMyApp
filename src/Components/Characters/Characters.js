import React from 'react';
import Char from './Char/Char';
import Aux from '../../hoc/Aux';

const characters = (props) => {
  let CharList = null;
  if(props.validation) {
    CharList = props.char.split('').map((ch, index) => 
    <Char 
    value={ch} 
    key={index} 
    clicked={()=>props.charDeleteHandler(index)} />)
  }

  return (
    <Aux>
      {CharList}
    </Aux>
  )
}

export default characters;