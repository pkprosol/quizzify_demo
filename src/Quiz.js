import React, { Component } from 'react';
import './App.css';
// import Question from './Question.js';
// import Answer from './Answer.js';

class Quiz extends React.Component {

  constructor() {
    super();
    this.state = {
      answers: Array(provideGameArray().length).fill(null)
    };
  }

  renderAnswer() {
    return <h1>Hello</h1>
  }

  render() {
    return (
      <h1>Hello</h1>
    );
  }
}

export default Quiz;

function provideGameArray() {
  const gameArray = [
    {
      questionText: "Between the two top brands of toothpaste, which is a better choice for most people: Crest Pro-Health or Colgate Total?",
      answers: [
        {
          answerText: "Crest, because Colgate is imported from North Korea.",
          explanation: "North Korea exports cheap clothes, counterfeit currency, and the occasional bomb.",
          isCorrect: false
        },
        {
          answerText: "Crest, because it comes in a shinier tube.",
          explanation: "Unless the tube is shiny enough to use if your mirror is all fogged up.",
          isCorrect: false
        },
        {
          answerText: "Whichever brand is on sale, of course.",
          explanation: "Any difference in price would amount to a fraction of a penny per use.",
          isCorrect: false
        },
        {
          answerText: "Crest, because Colgate contains a chemical that the government has banned from soap and other personal care products.",
          explanation: "Colgate Total contains a bacteria-killer called 'triclosan', which the government has banned from most other products. Particularly if you are pregnant, we'd recommend switching. On the other hand, people with gum disease might want to stick with Colgate to kill more harmful bacteria, despite the other risks.",
          isCorrect: true                
        },
        {
          answerText: "Colgate, because it has more fluoride than Crest.",
          explanation: "Both have roughly the same amount — meaning, the right amount — of fluoride. Adding 'more fluoride' to toothpaste would be like adding more water to a glass that's already full.",
          isCorrect: false
        }
      ],
      questionType: "basic"
    },
    {
      questionText: "Long-term daily use of Nexium, Prilosec or Prevacid is suspected to increase your risk of:",
      answers: [
        {
          answerText: "Kidney disease.",
          explanation: "Ask your doctor about Zantac, Pepcid, or Tums. That's what we take here at Quizzify. Regular use of Nexium-type drugs has too many suspected long-term side effects for us to take the chance.",
          isCorrect: true
        },
        {
          answerText: "Bone fractures (especially if you are female).",
          explanation: "Especially if you have thin or thinning bones, ask your doctor about Zantac, Pepcid, or Tums. Or try active-culture yogurt to restore the natural bacteria to your stomach.",
          isCorrect: true
        },
        {
          answerText: "Flatulence (especially if you are male).",
          explanation: "Though many guys we know would love to have this excuse.",
          isCorrect: false
        },
        {
          answerText: "Heart attacks (especially if you are high-risk to begin with).",
          explanation: "Ask your doctor about switching to Zantac, Pepcid or Tums. Try active-culture yogurt. Most of all, see for yourself, starting with the link.",
          isCorrect: true                
        },
        {
          answerText: "Ring Around the Collar.",
          explanation: "And if it does, there is an easy solution — Wisk around the collar beats Ring Around the Collar every time. (see YouTube for more details.)",
          isCorrect: false
        }
      ],
      questionType: "basic"      
    }
  ];

  return gameArray;
}
