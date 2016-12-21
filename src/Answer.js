import React, { Component } from 'react';
import './App.css';

class Answer extends React.Component {

  render() {
    const answerText = this.props.answerDictionary.answerText;
    const explanation = this.props.answerDictionary.explanation;
    const isCorrect = this.props.answerDictionary.isCorrect;

    if (this.props.isHighlighted) {
      return (
        <div className="listItemContainer">
          <li>
            {getAnswerIndicator(isCorrect)}
            {answerText}
            <p className="answerDetail">{explanation}</p>
            <p className="answerDetail"><a href="http://www.google.com">Learn More</a></p>
          </li>
        </div>
      );
    } else if (this.props.isSelected) {
      return (
        <div className="listItemContainer">
          <li onClick={() => this.props.onClick()}>
            {getAnswerIndicator(isCorrect)}
            {answerText}
          </li>
        </div>
      );
    } else {
      return (
        <div className="listItemContainer">
          <li onClick={() => this.props.onClick()}>
            {answerText}
          </li>
        </div>
      );
    }
  }
}

export default Answer;

function getAnswerIndicator(answerIsCorrect) {
  var srcAttribute; 
  if (answerIsCorrect) {
    srcAttribute = 'green_check.png';
  } else {
    srcAttribute = 'red_x.png';
  }

  return <img height="20px" width="20px" src={srcAttribute} className="floatRight" />
}
