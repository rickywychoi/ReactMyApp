import React, { Component } from 'react';
import classes from './App.css';
import withClasses from '../hoc/WithClasses';
import Aux from '../hoc/Aux';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Posts from '../components/Posts/Posts';
import Footer from '../components/Footer/Footer';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';
import Validate from '../components/Validate/Validate';
import Characters from '../components/Characters/Characters';
import Example from '../components/Example/Example';

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

  validationTrue = () => {
    this.setState((prevState) => {
      return {
        validation: prevState.validation = true
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
          />
        </div>
      )
    }

    return (
      <Aux>
        <NavBar />
        <Header />
        <div className="container pt-2 pb-4">
          <Example />
          <Aux className={classes.user}>
            <UserInput value={this.state.username} onChange={this.usernameHandler} />
            <UserOutput username={this.state.username} />
          </Aux>
          <Aux className={classes.char}>
            <input value={this.state.char} onChange={this.charHandler} />
            {Validation}
              <Characters 
              validation={this.state.validation} 
              char={this.state.char} 
              charDeleteHandler={this.charDeleteHandler}
              />
          </Aux>
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
