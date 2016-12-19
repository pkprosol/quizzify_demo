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
      <div className="Quiz-container">
        <div className="Question-and-answer-container">
          <h1 className="Question-text">
            Between the two top brands of toothpaste, which is a better choice for most people: Crest Pro-Health or Colgate Total?
          </h1>
          <p className="Instruction-text">
            Select 1 Answer
          </p>
          <div className="Answer-array">
            <ol>
              <li>
                Crest, because Colgate is imported from North Korea.
              </li>
              <li>
                Crest, because it comes in a shinier tube.
              </li>
              <li>
                Whichever brand is on sale, of course.
              </li>
              <li>
                Crest, because Colgate contains a chemical that the government has banned from soap and other personal care products.
              </li>
              <li>
                Colgate, because it has more fluoride than Crest.
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
