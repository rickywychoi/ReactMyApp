import React from 'react';

const errorStyle = {
  color: 'red'
}

const Validate = (props) => {
  let message = null;
  if(props.value.length < 5){
    message = <p style={errorStyle} onLoad={props.validatedFalse}>The input value is less than 5 letters.</p>
  }else {
    message = <p onLoad={props.validatedTrue}>Long enough!</p>
  }

  return (
    <div>
      {message}
    </div>
  )
}

export default Validate;