import React, { Component } from 'react';
import './App.css';
import GameArray from './GameArray.js';
import Question from './Question.js';
import Answer from './Answer.js';
import Footer from './Footer.js';

var gameArray = GameArray();

class Quiz extends React.Component {

  constructor() {
    super();
    this.state = {
      gameArray: gameArray,
      questionIndex: 0,
      answerHighlightedStatus: Array(gameArray[0].answers.length).fill(null),
      answerSelectedStatus: Array(gameArray[0].answers.length).fill(null),
      questionArrayLength: gameArray.length
    };
  }

  handleClick(i) {
    const answerHighlightedStatus = Array(gameArray[this.state.questionIndex].answers.length).fill(null).slice();
    answerHighlightedStatus[i] = true;
    
    const answerSelectedStatus = this.state.answerSelectedStatus.slice();
    answerSelectedStatus[i] = true;

    this.setState({
      answerHighlightedStatus: answerHighlightedStatus,
      answerSelectedStatus: answerSelectedStatus
    });
  }

  handleBackButtonClick() {
    const questionIndex = this.state.questionIndex;
    if (questionIndex > 0) {
      this.setState({
        questionIndex: questionIndex - 1,
        answerHighlightedStatus: Array(gameArray[this.state.questionIndex].answers.length).fill(null),
        // answerSelectedStatus: Array(gameArray[this.state.questionIndex].answers.length).fill(null)
      });
    }    
  }
  
  handleNextButtonClick() {
    const questionIndex = this.state.questionIndex;
    const questionArrayLength = this.state.questionArrayLength;
    if (questionIndex < questionArrayLength - 1) {
      this.setState({
        questionIndex: questionIndex + 1,
        answerHighlightedStatus: Array(gameArray[this.state.questionIndex].answers.length).fill(null),
        answerSelectedStatus: Array(gameArray[this.state.questionIndex].answers.length).fill(null)
      });
    }    
  }

  renderQuestion() {
    const questionText = gameArray[this.state.questionIndex].questionText;
    return <Question questionText={questionText} />;
  }

  renderAnswers() {
    const answersArray = gameArray[this.state.questionIndex].answers;
    var answersList = answersArray.map((answerDictionary, i) => {
      return <Answer key={'answer'+i} answerDictionary={answerDictionary} isHighlighted={this.state.answerHighlightedStatus[i]} isSelected={this.state.answerSelectedStatus[i]} onClick={() => this.handleClick(i)} />
    });
    return answersList;
  }

  renderFooter() {
    return <Footer 
              answerIndex={this.state.questionIndex} 
              questionArrayLength={this.state.questionArrayLength} 
              onClickPrevious={() => this.handleBackButtonClick()} 
              onClickNext={() => this.handleNextButtonClick()} />;
  }

  render() {

    return (
      <div className="appContainer">
        <div className="quizContainer">
          {this.renderQuestion()}
          <ol>
            {this.renderAnswers()}
          </ol>
          
        </div>
      </div>
    );
  }
}

export default Quiz;




