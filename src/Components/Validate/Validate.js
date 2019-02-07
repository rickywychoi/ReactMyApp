import React, { Component } from 'react';

const errorStyle = {
  color: 'red'
}

class Validate extends Component {
  render() {
    let message = null;
    if(this.props.value.length < 5){
      // this.props.validatedFalse();
      message = <p style={errorStyle}>The input value should be at least 5 letters.</p>
    }else {
      // this.props.validatedTrue();
      message = (
      <div>
        <p>Long enough!</p>
        <p>Input: {this.props.value}</p>
        <button type="button" className="btn btn-outline-secondary" onClick={this.props.validatedTrue}>Show Characters</button>
      </div>
      )
    }
    return (
      <div>
        {message}
      </div>
    );
  }
}  

export default Validate;