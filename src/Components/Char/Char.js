import React from 'react';
import '../Char/Char.css'

const Char = (props) => {
  return (
    <div className="CharMain">
      <p onClick={props.clicked}>{props.value}</p>
    </div>
  )
}

export default Char;