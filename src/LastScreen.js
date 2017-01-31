import React from 'react';
import './App.css';

class LastScreen extends React.Component { // Change to stateless function

  render() {
    return (
      <div className="lastScreenContainer">
        <h1 className="fontWeightNormal">Thanks for playing our demo!</h1>
        <h2 className="fontWeightNormal">Now learn more about Quizzify:</h2>
        <p>Check out our quick start guide and other <a href="http://www.quizzify.com/resources" target="_blank">resources</a></p>
        <p>See our <a href="http://www.quizzify.com/guarantees" target="_blank">guarantees</a></p>
        <p>Look at <a href="http://www.quizzify.com/pricing" target="_blank">pricing</a></p>
        <p>Or read <a href="http://www.quizzify.com/reviews" target="_blank">reviews</a></p>
      </div>
    );
  }
}

export default LastScreen;
