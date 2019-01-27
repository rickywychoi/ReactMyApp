import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <h1>This is My React App</h1>
      </div>
    );
  }
}

export default App;
