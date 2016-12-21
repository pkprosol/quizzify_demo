import React, { Component } from 'react';
import './App.css';
import NavigationButtons from './NavigationButtons.js';

function Footer(props) {
  return (
    <div className="footer">
      <div className="scoreBoard floatLeft">
        <div className="footerContainer scoreCurrentQuestionContainer">
          <p className="footerLabel">Points (Current Question)</p>
          <p className="scoreDisplay scoreCurrentQuestion">{props.currentPoints}</p>
        </div>
        <div className="footerContainer scoreQuizTotalContainer"> 
          <p className="footerLabel">Points (Quiz Total)</p>
          <p className="scoreDisplay scoreQuizTotal">{props.totalPoints}</p>
        </div>
      </div>
      <NavigationButtons answerIndex={props.answerIndex} questionArrayLength={props.questionArrayLength} onClickPrevious={() => props.onClickPrevious()} onClickNext={() => props.onClickNext()} />
      <div className="clearBoth"></div>      
    </div>
  );
}

export default Footer;