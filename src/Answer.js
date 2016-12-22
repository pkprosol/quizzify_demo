import React from 'react';
import './App.css';

class Answer extends React.Component {

  render() {
    const answerDictionary = this.props.answerDictionary;
    const answerText = answerDictionary.answerText;
    const explanation = answerDictionary.explanation;
    const isCorrect = answerDictionary.isCorrect;

    var indicatorText;
    if (isCorrect) {
      indicatorText = <p className="answerDetail correctAnswer smallerFont">{explanation}</p>
    } else {
      indicatorText = <p className="answerDetail incorrectAnswer smallerFont">{explanation}</p>
    }

    // console.log("highlightedindex: " + this.props.isHighlighted);
    // console.log("arrayposition: " + this.props.arrayPositionIndex);
    if (this.props.isHighlighted === this.props.arrayPositionIndex) {
      return (
        <div className="listItemContainer">
          <li>
            {getAnswerIndicator(isCorrect)}
            {answerText}
            {indicatorText}
            <p className="answerDetail smallestFont"><a href="http://www.google.com">Learn More</a></p>
          </li>
        </div>
      );
    } else if (answerDictionary.wasSelected) {
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

  return <img alt="Status Indicator" height="20px" width="20px" src={srcAttribute} className="floatRight" />
}
