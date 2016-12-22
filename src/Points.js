import React from 'react';
import './App.css';

function Points(props) {

  return (
    <div className="scoreBoard floatLeft">
      <div className="footerContainer scoreCurrentQuestionContainer">
        <p className="footerLabel">Points (Current Question)</p>
        <p className="scoreDisplay scoreCurrentQuestion" style={props.pointsStyle}>{props.currentPoints}</p>
      </div>
      <div className="footerContainer scoreQuizTotalContainer"> 
        <p className="footerLabel">Points (Quiz Total)</p>
        <p className="scoreDisplay scoreQuizTotal">{props.totalPoints}</p>
      </div>
    </div>
  );
}

export default Points;