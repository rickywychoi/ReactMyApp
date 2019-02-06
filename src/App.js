import React, { Component } from 'react';
import classes from './App.css';
import withClasses from './hoc/WithClasses';
import Aux from './hoc/Aux';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Posts from './Components/Posts/Posts';
import Footer from './Components/Footer/Footer';
import UserInput from './Components/UserInput/UserInput';
import UserOutput from './Components/UserOutput/UserOutput';
import Validate from './Components/Validate/Validate';
import Char from './Components/Char/Char';

class App extends Component {
  state = {
    username: '',
    char: '',
    validation: false
  }

  usernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  charHandler = (event) => {
    this.setState({
      char: event.target.value
    })
  }

  validationTrue = (e) => {
    e.preventDefault();
    this.setState((prevState, props) => {
      return {
        validation: prevState.validation = true
      }
    })
  }

  validationFalse = (e) => {
    e.preventDefault();
    this.setState((prevState, props) => {
      return {
        validation: prevState.validation = false
      }
    })
  }

  charDeleteHandler = (index) => {
    const text = this.state.char.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({char: updatedText});
  }

  render() {
    let Validation = null;
    if(this.state.char) {
      Validation = (
        <div>
          <Validate 
          value={this.state.char}
          validatedTrue={this.validationTrue}
          validatedFalse={this.validationFalse}
          />
        </div>
      )
    }

    let charList = null;
    // if(this.state.validation===true) {
      charList = this.state.char.split('').map((ch, index) => 
      <Char value={ch} key={index} clicked={()=>this.charDeleteHandler(index)} />)
    // }

    return (
      <Aux>
        <NavBar />
        <Header />
        <div className="container pt-2 pb-4">
          <UserInput value={this.state.username} onChange={this.usernameHandler} />
          <UserOutput username={this.state.username} />
          <input value={this.state.char} onChange={this.charHandler} />
          {Validation}
          <p>{this.state.char}</p>
          {charList}
          <Posts />
          <Posts />
          <Posts />
        </div>
        <Footer />
      </Aux>
    );
  }
}

export default withClasses(App, classes.App);
