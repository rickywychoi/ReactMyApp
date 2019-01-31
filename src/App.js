import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Posts from './Components/Posts/Posts';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <div className="container pt-2 pb-4">
          <Posts />
          <Posts />
          <Posts />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
