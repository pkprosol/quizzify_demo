import React from 'react';
import './App.css';

class LastScreen extends React.Component {

  render() {
    return (
      <div className="lastScreenContainer">
        <h1 className="fontWeightNormal">Thanks for playing!</h1>
        <h2 className="fontWeightNormal">You've completed our demo. To learn more check out the rest of our site.</h2>
        <h2 className="fontWeightNormal">If you'd like to chat about getting Quizzify please Contact Us at the bottom of this page 
        (or tap the button at the top right).</h2>
      </div>
    );
  }
}

export default LastScreen;
