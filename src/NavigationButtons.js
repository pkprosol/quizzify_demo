import React, { Component } from 'react';
import './App.css';

function NavigationButtons(props) {
  if (props.answerIndex == 0) {
    return (
      <div className="buttonContainer floatRight"> 
        <button className="footerButton nextQuestion" onClick={() => props.onClickNext()}>Next Question</button>
      </div>
    );    
  } else if (props.answerIndex < props.questionArrayLength - 1) {
    return (
      <div className="buttonContainer floatRight"> 
        <button className="footerButton previousQuestion" onClick={() => props.onClickPrevious()}>Previous</button>
        <button className="footerButton nextQuestion" onClick={() => props.onClickNext()}>Next Question</button>
      </div>
    );    
  } else {
    return (
      <div className="buttonContainer floatRight"> 
        <button className="footerButton previousQuestion" onClick={() => props.onClickPrevious()}>Previous</button>
      </div>
    );        
  }
}

export default NavigationButtons;