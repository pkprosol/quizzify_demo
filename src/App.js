import React from 'react';
import './App.css';
import Quiz from './Quiz.js';

class App extends React.Component {

  render() {
    return (
      <div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js"></script>
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
        <Quiz />
      </div>
    );
  }
}

export default App;
