import React from 'react';
import './App.css';

import GameArray from './GameArray.js';
import Question from './Question.js';
import Answer from './Answer.js';
import Footer from './Footer.js';
import LastScreen from './LastScreen.js';

const gameArrayInitial = GameArray();

class Quiz extends React.Component {

  constructor() {
    super();

    this.state = {
      gameArray: gameArrayInitial,
      questionIndex: 0,
      questionArrayLength: gameArrayInitial.length,      

      answerHighlightedStatus: null, // Change to active answer status (highlighted has visual connotation)
      rightAnswersRemaining: calculateRightAnswers(gameArrayInitial[0].answers),

      currentPoints: 0,
      totalPoints: 0,
      pointsChange: 0,
      pointsStyle: {},

      lastScreen: false
    };
  }

  handleClick(i) {
    const questionIndex = this.state.questionIndex;
    const gameArray = this.state.gameArray;
    const answersArray = gameArray[questionIndex].answers;
    var answerSelected = answersArray[i];
    const wasAlreadySelected = answerSelected.wasSelected;

    answerSelected.wasSelected = true;

    var answerHighlightedStatus = i;

    this.setState({
      answerHighlightedStatus: answerHighlightedStatus
    });

    if (wasAlreadySelected || this.isQuestionComplete) {
      this.setState({
        pointsChange: 0
      });
    }

    if (!wasAlreadySelected && !this.isQuestionComplete()) {
      const isAnswerSelectedCorrect = answerSelected.isCorrect;
      const rightAnswersRemaining = this.updateRightAnswersRemaining(isAnswerSelectedCorrect);
      this.updatePoints(isAnswerSelectedCorrect, rightAnswersRemaining);
    }
  }

  updateRightAnswersRemaining(isAnswerSelectedCorrect) {
    var rightAnswersRemaining = this.state.rightAnswersRemaining;
    if (isAnswerSelectedCorrect) {
      
      rightAnswersRemaining -= 1;
      if (rightAnswersRemaining <= 0) {
        this.markQuestionComplete();
      }      
      this.setState({
        rightAnswersRemaining: rightAnswersRemaining
      });
    }
    return rightAnswersRemaining;
  }

  markQuestionComplete() {
    var gameArray = this.state.gameArray;
    gameArray[this.state.questionIndex].wasQuestionCompleted = true;

    this.setState({
      gameArray:gameArray
    });
  }

  isQuestionComplete() {
    return this.state.gameArray[this.state.questionIndex].wasQuestionCompleted;
  }

  handleBackButtonClick() {
    const questionIndex = this.state.questionIndex;
    if (questionIndex > 0) {
      this.resetQuestion(-1); 
    }      
  }
  
  handleNextButtonClick() {
    const questionIndex = this.state.questionIndex;
    const questionArrayLength = this.state.questionArrayLength;
    if (questionIndex < questionArrayLength) {
      this.resetQuestion(1);
    } 
  }

  resetQuestion(indexChange) {
    const currentIndex = this.state.questionIndex;
    const newIndex = currentIndex + indexChange;
    if (newIndex < this.state.questionArrayLength) {
      this.setState({
        questionIndex: newIndex,
        answerHighlightedStatus: null,
        rightAnswersRemaining: calculateRightAnswers(this.state.gameArray[newIndex].answers),
        lastScreen: false
      });   
    } else {
      this.setState({
        questionIndex: newIndex,
        lastScreen: true
      });       
    }
       
  }

  renderQuestion() {
    const questionDictionary = this.state.gameArray[this.state.questionIndex];

    return <Question questionDictionary={questionDictionary} />;
  }

  renderInstructions() {
    var numberOfRightAnswers = this.state.rightAnswersRemaining;
    var instructionText;

    if (this.isQuestionComplete()) {
      instructionText = "You've completed this question!"
    } else if (numberOfRightAnswers === 1) {
      instructionText = "Choose 1 answer"
    } else if (numberOfRightAnswers <= 0) {
      instructionText = "You've completed this question!"
    } else if (numberOfRightAnswers < 4) {
      instructionText = "Choose " + numberOfRightAnswers + " answers"
    } else {
      instructionText = "Choose all correct answers"
    }
    return <p className="instructionText">{instructionText}</p>;
  }

  renderAnswers() {

    const gameArray = this.state.gameArray;
    const questionIndex = this.state.questionIndex; 
    const linkAddress = gameArray[questionIndex].linkAddress;

    const answersArray = gameArray[questionIndex].answers;
    var answersList = answersArray.map((answerDictionary, i) => {

      return <Answer 
                key={'answer'+i} 
                linkAddress={linkAddress}
                answerDictionary={answerDictionary} 
                arrayPositionIndex={i}
                isHighlighted={this.state.answerHighlightedStatus} 
                pointsChange={this.state.pointsChange}
                onClick={() => this.handleClick(i)} />
    });

    return answersList;
  }

  renderRightPanel() {
    const currentQuestion = this.state.gameArray[this.state.questionIndex];
    const questionImageLink = currentQuestion.sidePanel.image;
    return (
      <img href={questionImageLink} alt="Illustration" />
    );
  }

  renderFooter() {

    return <Footer 
              currentQuestion={this.state.gameArray[this.state.questionIndex]}
              answerIndex={this.state.questionIndex} 
              questionArrayLength={this.state.questionArrayLength}
              currentPoints={this.state.currentPoints}
              totalPoints={this.state.totalPoints} 
              pointsStyle={this.state.pointsStyle}
              onClickPrevious={() => this.handleBackButtonClick()} 
              onClickNext={() => this.handleNextButtonClick()} 
              isLastScreen={this.state.lastScreen} />;
  }

  updatePoints(answerIsCorrect, rightAnswersRemaining) {
    const pointsChange = this.getPointsChange(answerIsCorrect, rightAnswersRemaining);
    this.setPointsState(pointsChange);
  } 

  getPointsChange(answerIsCorrect, rightAnswersRemaining) {
    const isQuestionComplete = (rightAnswersRemaining <= 0);
    if (answerIsCorrect && isQuestionComplete) {
      return 100;
    } else if (!answerIsCorrect && !isQuestionComplete) {
      return -25;
    } else {
      return 0;
    }
  }

  setPointsState(pointsChange) {
    const currentPoints = this.state.currentPoints;
    const totalPoints = this.state.totalPoints;

    const newCurrentPoints = currentPoints + pointsChange;
    const newTotalPoints = totalPoints + pointsChange;

    const newPointsStyle = this.setPointsStyleState(pointsChange);

    this.setState({
      currentPoints: newCurrentPoints,
      totalPoints: newTotalPoints,
      pointsChange: pointsChange,
      pointsStyle: newPointsStyle
    });
  }

  setPointsStyleState(pointsChange) {
    var pointsStyle;
    if (pointsChange > 0) {
      pointsStyle = { color: '#138a13' };
    } else if (pointsChange < 0) {
      pointsStyle = { color: '#bd0101' };
    }
    return pointsStyle;
  }

  render() {
    const currentQuestion = this.state.gameArray[this.state.questionIndex];
    if (this.state.lastScreen) {
      return (
        <div className="appContainer">
          <LastScreen />
          {this.renderFooter()}
        </div>
      );   
    } else if (currentQuestion.sidePanel) {
      return (
        <div className="appContainer">
          <div className="quizContainer">
            <div className="leftPanel">
              {this.renderQuestion()}
              {this.renderInstructions()}
              <ol>
                {this.renderAnswers()}
              </ol>
            </div>
            <div className="rightPanel">
              {this.renderRightPanel()}
            </div>
            {this.renderFooter()}
          </div>
        </div>
      );
    } else {
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
}

export default Quiz;

function calculateRightAnswers(answerArray) {
  var rightAnswers = 0;
  for (var answerDictionary of answerArray) {
    if (answerDictionary["isCorrect"]) {
      rightAnswers += 1;
    }
  }

  return rightAnswers;
}




