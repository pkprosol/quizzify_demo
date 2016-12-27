import React from 'react';
import './App.css';

class Question extends React.Component {

  render() {
    const questionDictionary = this.props.questionDictionary;
    const questionText = questionDictionary.questionText;
    const isHarvardApproved = questionDictionary.harvardApproved;

    if (isHarvardApproved) {
      return (
        <div>
          <div className="socialProofImageContainer floatRight">
            <img alt="HMS Logo" className="socialProofImage" src="hms_logo.png" />
          </div>
          <div className="questionContainer">
            <h1 className="questionText">{questionText}</h1>
          </div>
        </div>
      );      
    } else {
      return (
        <div>
          <h1 className="questionText">{questionText}</h1>
        </div>
      );         
    }

  }
}

export default Question;