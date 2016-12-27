import React from 'react';
import './App.css';

function NavigationButtons(props) {
  
  var questionCompleteNextButtonStyle;
  if (props.currentQuestion && props.currentQuestion.wasQuestionCompleted) {
    questionCompleteNextButtonStyle = { 
      backgroundColor: '#e1fbe1',
      color: '#138a13'
    }
  }

  if (props.answerIndex === 0) {
    return (
      <div className="buttonContainer floatRight"> 
        <button className="footerButton nextQuestion soloButton" onClick={() => props.onClickNext()} style={questionCompleteNextButtonStyle}>Next</button>
      </div>
    );    
  } else if (props.answerIndex < props.questionArrayLength) {
    return (
      <div className="buttonContainer floatRight"> 
        <button className="footerButton previousQuestion" onClick={() => props.onClickPrevious()}>Previous</button>
        <button className="footerButton nextQuestion" onClick={() => props.onClickNext()} style={questionCompleteNextButtonStyle}>Next</button>
      </div>
    );    
  } else {
    return (
      <div className="buttonContainer floatRight"> 
        <button className="footerButton previousQuestion soloButton" onClick={() => props.onClickPrevious()}>Previous</button>
      </div>
    );        
  }
}

export default NavigationButtons;