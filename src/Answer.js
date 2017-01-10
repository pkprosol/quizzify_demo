import React from 'react';
import './App.css';

class Answer extends React.Component {

  render() {
    const answerDictionary = this.props.answerDictionary;
    var answerText = answerDictionary.answerText;
    const explanation = answerDictionary.explanation;
    const isCorrect = answerDictionary.isCorrect;
    const linkAddress = this.props.linkAddress;
    
    var questionLink;
    if (linkAddress) {
      questionLink = <p className="answerDetail smallestFont"><a href={linkAddress} target="_blank">Learn More</a></p>;
    } 

    var pointsChange = "";
    if (this.props.pointsChange > 0) {
      pointsChange = " +" + this.props.pointsChange + " points. This question is now complete. Review or keep going.";
    } else if (this.props.pointsChange < 0) {
      pointsChange = " " + this.props.pointsChange + " points";
    } 

    var indicatorText;
    if (isCorrect) {
      indicatorText = <p className="answerDetail correctAnswer smallerFont">{explanation}<strong>{pointsChange}</strong></p>
    } else {
      indicatorText = <p className="answerDetail incorrectAnswer smallerFont">{explanation}<strong>{pointsChange}</strong></p>
    }

    if (this.props.isHighlighted === this.props.arrayPositionIndex) { // arrayIndex 
      return (
        <div className="listItemContainer">
          <li>
            {getAnswerIndicator(isCorrect)}
            {answerText}
            {indicatorText}
            {questionLink}
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
    srcAttribute = 'https://raw.githubusercontent.com/pkprosol/quizzify_demo/master/public/green_check.png';
  } else {
    srcAttribute = 'https://raw.githubusercontent.com/pkprosol/quizzify_demo/master/public/red_x.png';
  }

  return <img alt="Status Indicator" height="20px" width="20px" src={srcAttribute} className="floatRight" />
}
