import React, { Component } from 'react';
import classes from './App.css';
import WithClasses from './hoc/WithClasses';
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

  validationFalse = () => {
    this.setState({
      validation: false
    })
  }

  validationTrue = () => {
    this.setState({
      validation: true
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
    const charList = this.state.char.split('').map((ch, index) => 
    <Char value={ch} key={index} clicked={()=>this.charDeleteHandler(index)} />)

    return (
      <WithClasses classes={classes.App}>
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
      </WithClasses>
    );
  }
}

export default App;
