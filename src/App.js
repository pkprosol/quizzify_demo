import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div>
        <div className="Question-text">
          Between the two top brands of toothpaste, which is a better choice for most people: Crest Pro-Health or Colgate Total?
        </div>
        <div className="Answer-array">
          <ol>
            <li>
              Crest, because Colgate is imported from North Korea.
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
