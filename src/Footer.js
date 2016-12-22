import React from 'react';
import './App.css';
import Points from './Points.js';
import NavigationButtons from './NavigationButtons.js';

function Footer(props) {

  return (
    <div className="footer">
      <Points 
        currentPoints={props.currentPoints} 
        totalPoints={props.totalPoints}
        pointsStyle={props.pointsStyle} />

      <NavigationButtons 
        answerIndex={props.answerIndex} 
        questionArrayLength={props.questionArrayLength} 
        onClickPrevious={() => props.onClickPrevious()} 
        onClickNext={() => props.onClickNext()} />

      <div className="clearBoth"></div>   

    </div>
  );
}

export default Footer;