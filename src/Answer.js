import React, { Component } from 'react';
import './App.css';

class Answer extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: false,
      highlighted: false // this.props.highlighted
    };
  }

  selectAnswer() {
    this.setState({
      selected: true,
      highlighted: true
    });    
  }

  defineContent() {
    var answerText = this.props.answerDictionary.answerText;
    var explanation = this.props.answerDictionary.explanation;
    var isCorrect = this.props.answerDictionary.isCorrect;

    if (this.state.selected && this.state.highlighted) {
      return (
        <div>
          <li><strong>{answerText}</strong></li>
          <p>{explanation}</p>
          <p><a href="http://www.google.com">Learn More</a></p>
        </div>
      );
    } else {
      return (
        <li onClick={this.selectAnswer}>{answerText}</li>
      );
    }
  }

  render() {
    var returnValue = this.defineContent();
    return returnValue;
  }
}


