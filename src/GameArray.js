function GameArray() {
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
    },
    {
      questionText: "How does the radiation in a CT ('CAT') scan compare to the radiation in an X-ray?",
      answers: [
        {
          answerText: "A CT scan has about 500 times as much as an x-ray.",
          explanation: "Most have between 100 and 1000 times as much radiation. We aren't saying: 'Never get a CT scan.' We are saying: 'Make sure to consider the risks.' This is especially true for your children.",
          isCorrect: true
        },
        {
          answerText: "A CT scan has about 5 times as much as an x-ray.",
          explanation: "You’re not gonna believe this, but it’s a lot worse. Try again.",
          isCorrect: false
        },
        {
          answerText: "They are about the same.",
          explanation: "You’re not gonna believe this, but it’s a lot worse. Try again.",
          isCorrect: false
        },
        {
          answerText: "The X-ray has more. CT technology doesn’t involve radiation at all.",
          explanation: "Alas, no. Perhaps on some other planet, but here on earth, CT Scans involve lots of radiation. Try again to guess how much. (Hint: it's a lot!)",
          isCorrect: false                
        },
        {
          answerText: "By law, a CT scanner may not produce radiation.",
          explanation: "You can't make laws against facts. And the fact is, CT scans produce lots of radiation. Exposure to CT radiation has been linked to an increased risk of cancer.",
          isCorrect: false
        }
      ],
      questionType: "basic",
      link: "http://khn.org/news/heavy-use-of-ct-scans-raises-concerns-about-patients-exposure-to-radiation/?utm_campaign=KFF%3A+The+Latest&utm_source=hs_email&utm_medium=email&utm_content=25041928&_hsenc=p2ANqtz-_ul8b5fOMKvnvr97BPY0fjlL4Zjmm_pSIlZEVBqcYVbkQNvLsDoaWsHnpTK8uJtTeZRWGQHLFQd2tSVLG22troANRgiPH53pg8DjS8Wedi2S_pIzo&_hsmi=25041928"      
    }
    ,
    {
      questionText: "We are offering employees this quiz because we want to...",
      answers: [
        {
          answerText: "Save money by showing you how to use less unnecessary or harmful healthcare.",
          explanation: "Of course we want to save money. Who doesn't? These quizzes do that by helping you choose wisely, not by denying benefits.",
          isCorrect: true
        },
        {
          answerText: "Have healthier employees, who make wiser choices in staying healthy and using medical care.",
          explanation: "This sounds hokey, but we all benefit when you make better healthcare choices.",
          isCorrect: true
        },
        {
          answerText: "Reduce our spending by keeping you from going to the doctor.",
          explanation: "Americans are HUGE over-users of healthcare, so many answers point you towards using less. Yet you saw some questions where the answer suggests more. And if you disagree with an answer, you can look it up, or send a nasty note to al@quizzify.com. (Please limit obscenities to mild ones.)",
          isCorrect: false
        },
        {
          answerText: "Help you save money on healthcare.",
          explanation: "It's not just your money. It's all of our money. When you save money, we're all saving money. That's the way insurance works. Like if no one ever had a car accident or got their stolen, auto insurance would cost less. We're all in this together.",
          isCorrect: true                
        },
        {
          answerText: "Trick you into not using healthcare so we can save money.",
          explanation: "There are a few trick questions. But if we 'trick' employees into foregoing necessary healthcare, we would all lose. Healthcare literacy helps you prevent things that can be prevented, manage things that can be managed, and leave things alone that are going to get better on their own.",
          isCorrect: false
        }
      ],
      questionType: "basic",
      link: "http://www.newyorker.com/magazine/2015/05/11/overkill-atul-gawande"    
    },
    {
      questionText: "Cigarette smoke contains which four harmful chemicals?",
      answers: [
        {
          answerText: "Butane.",
          explanation: "Butane is also found in lighter fluid.",
          isCorrect: true
        },
        {
          answerText: "Acetone.",
          explanation: "Acetone is also found in nail polish remover.",
          isCorrect: true
        },
        {
          answerText: "Tar.",
          explanation: "Yes, the very same 'tar' we drive on.",
          isCorrect: true
        },
        {
          answerText: "Dihydrogen monoxide.",
          explanation: "That's water. It's not a 'harmful chemical' unless you're drowning, in which case most wellness experts would agree that smoking cessaton should probably not be your #1 priority.",
          isCorrect: false                
        },
        {
          answerText: "Lead.",
          explanation: "It's no longer allowed in gasoline or paint. But it is allowed in cigarettes. Is this a great country or what?",
          isCorrect: true
        }
      ],
      questionType: "basic"      
    },
    {
      questionText: "Our questions allow customization to highlight your company's specific concerns. For example, as an employee of [Your Company Name], you save on generic prescriptions because you only pay:",
      answers: [
        {
          answerText: "Whatever you can negotiate with CVS, perhaps by threatening to take your business to Walmart.",
          explanation: "However, if this works for you, let us know, and we'll make sure to give you credit for this answer.",
          isCorrect: false
        },
        {
          answerText: "[You would insert the amount they’d pay for a brand name (if applicable), like '$50'.]",
          explanation: "This is what you would pay for the same drug, if it's advertised on TV. But both drugs have the same active ingredient. You're just paying extra for the brand.",
          isCorrect: false
        },
        {
          answerText: "$40",
          explanation: "INCORRECT.",
          isCorrect: false
        },
        {
          answerText: "$25",
          explanation: "INCORRECT.",
          isCorrect: false                
        },
        {
          answerText: "[You would insert the answer for your company, like “$10”.]",
          explanation: "CORRECT. Our employees get a great deal on generics! The exact same drug, with a brand name, would cost you $10. So it's important to ask, 'Is a generic available?', when someone is writing you a prescription.",
          isCorrect: true
        }
      ],
      questionType: "basic"      
    }
  ];

  return gameArray;
}

export default GameArray;