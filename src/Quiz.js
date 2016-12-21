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
        answerSelectedStatus: Array(gameArray[this.state.questionIndex].answers.length).fill(null)
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

  renderInstructions() {
    const answerArray = gameArray[this.state.questionIndex].answers;
    var numberOfRightAnswers = calculateRightAnswers(answerArray);
    var instructionText;

    if (numberOfRightAnswers == 1) {
      instructionText = "Choose 1 answer"
    } else if (numberOfRightAnswers < 4) {
      instructionText = "Choose " + numberOfRightAnswers + " answers"
    } else {
      instructionText = "Choose all correct answers"
    }
    return <p className="instructionText">{instructionText}</p>;
  }

  renderAnswers() {
    const answersArray = gameArray[this.state.questionIndex].answers;
    var answersList = answersArray.map((answerDictionary, i) => {

      return <Answer 
                key={'answer'+i} 
                answerDictionary={answerDictionary} 
                isHighlighted={this.state.answerHighlightedStatus[i]} 
                isSelected={this.state.answerSelectedStatus[i]} 
                onClick={() => this.handleClick(i)} />
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
          {this.renderInstructions()}
          <ol>
            {this.renderAnswers()}
          </ol>
          {this.renderFooter()}
        </div>
      </div>
    );
  }
}

export default Quiz;

function calculateRightAnswers(answerArray) {
  var rightAnswers = 0;
  for (var answerDictionary of answerArray) {
    if (answerDictionary["isCorrect"]) {
      rightAnswers += 1;
    }
  }
  console.log(rightAnswers);

  return rightAnswers;
}


