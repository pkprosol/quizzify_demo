import React from 'react';
import './App.css';

class Answer extends React.Component {

  render() {
    const answerDictionary = this.props.answerDictionary;
    var answerText = answerDictionary.answerText;
    const explanation = answerDictionary.explanation;
    const isCorrect = answerDictionary.isCorrect;
    const linkAddress = this.props.linkAddress;
    console.log("link: " + linkAddress);

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

    if (this.props.isHighlighted === this.props.arrayPositionIndex) {
      return (
        <div className="listItemContainer">
          <li>
            {getAnswerIndicator(isCorrect)}
            {answerText}
            {indicatorText}
            <p className="answerDetail smallestFont"><a href={linkAddress}>Learn More</a></p>
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
