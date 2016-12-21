import React, { Component } from 'react';
import './App.css';

class Question extends React.Component {

  render() {
    return (
      <h1 className="questionText">{this.props.questionText}</h1>
    );
  }
}

export default Question;