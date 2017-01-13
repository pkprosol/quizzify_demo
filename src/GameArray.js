import React from 'react';

function GameArray() {
  const gameArray = [
    {
      questionText: "How many times do you see sugar (of any kind) on this Quaker® Quinoa Granola Bar package?",
      answers: [
        {
          answerText: "3",
          explanation: "INCORRECT. It's a bit higher, believe it or not.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "5",
          explanation: "INCORRECT. Not quite high enough.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "7",
          explanation: "Almost there.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "10",
          explanation: "Bingo! That's right. See the highlights to identify all the different mentions of sugar.",
          isCorrect: true,
          wasSelected: false            
        },
      ],
      sidePanel: {
        image: "https://static1.squarespace.com/static/553eac55e4b088624077ce36/t/570ffd598259b56dfebd2cd5/1460665690020/quinoa_quinoa_yogurt_fruit_-amp-_nut-_5ct.jpg",
        body: <p><strong>INGREDIENTS:</strong><br />
            QUINOA, YOGURT FLAVORED COATING (<span className='highlight-text'>SUGAR</span>, PALMKERNEL AND PALM OIL, WHEY PROTEIN CONCENTRATE, DRIED NONFAT YOGURT - HEAT TREATED AFTER CULTURING [CULTURED NONFAT MILK], SOY LECITHIN, NATURAL FLAVOR, ARTIFICIAL COLOR, CITRIC ACID, SALT), <span className='highlight-text'>GLUCOSE</span>, GRANOLA (WHOLE GRAIN ROLLED OATS, WHOLEGRAIN ROLLED WHEAT, <span className='highlight-text'>BROWN SUGAR</span>, SUNFLOWER OIL, DRIED UNSWEETENED COCONUT, <span className='highlight-text'>HONEY</span>, SODIUM BICARBONATE, NATURAL FLAVOR, WHEY AND WHEY PROTEIN CONCENTRATE), BROWN RICE CRISP (WHOLE GRAIN BROWN RICE FLOUR, <span className='highlight-text'>SUGAR</span>, MALTED BARLEY FLOUR, SALT), CARAMEL FLAVORED COATING (<span className='highlight-text'>GLUCOSE</span>, <span className='highlight-text'>SUGAR</span>, PALMOIL, NONFAT MILK, GLYCERIN, BUTTER (CREAM, SALT), MODIFIED CORNSTARCH, WHEY, SALT, MONO AND DIGLYCERIDES, NATURAL AND ARTIFICIAL FLAVOR, SOY LECITHIN), <span className='highlight-text'>INVERT SUGAR</span>, <span className='highlight-text'>CORN SYRUP SOLIDS</span>, ALMONDS, GLYCERIN, PEANUTS, DRIED SWEETENED CRANBERRY PIECES (<span className='highlight-text'>SUGAR</span>, DRIED CRANBERRIES, CITRIC ACID, ELDERBERRY JUICE CONCENTRATE [COLOR], SUNFLOWER OIL), RAISINS, SUNFLOWER KERNELS (SUNFLOWER SEED, SUNFLOWER OIL AND/OR COTTONSEED OIL), VEGETABLE SHORTENING (PALM KERNEL OIL, PALM OIL, SORBITAN TRISTEARATE, TBHQ [A PRESERVATIVE], CITRIC ACID), SALT, TOCOPHEROLS (PRESERVATIVE).
          </p>
      }, 
      wasQuestionCompleted: false,
      questionType: "text-analysis",
      linkAddress: null,
      harvardApproved: false
    },
    {
      questionText: "Are eggs good for you?",
      answers: [
        {
          answerText: "Yes. They are a tasty and inexpensive source of protein and many vitamins and minerals.",
          explanation: "CORRECT. Eggs unfairly got a bad rap decades ago, and they still haven't overcome it. As Churchill said: 'A lie travels halfway around the world before the truth can get its pants on.'",
          isCorrect: true,
          wasSelected: false
        },
        {
          answerText: "Kind of. They have vitamins and protein, but are full of cholesterol.",
          explanation: "INCORRECT. Foods containing cholesterol do NOT raise most people's cholesterol levels. There is no 'kind of' or 'maybe' here. Eggs are good for us.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "Yes, if you eat the egg whites only. The yolk has the cholesterol, not the white.",
          explanation: "INCORRECT. It is perfectly OK to eat the yolk, that's where many of the vitamins are.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "No. Each egg contains about 250 milligrams of cholesterol. That is more than you should eat in a day.",
          explanation: "INCORRECT. No, no, no, and did we mention ...no? The crusade against cholesterol is based on a total myth. Unless you have a rare condition called hypercholesterolemia (and you would know it if you did), cholesterol in your diet does not increase cholesterol in your blood.",
          isCorrect: false,
          wasSelected: false            
        },
        {
          answerText: "Only if you buy the 'free range' or 'cage free' eggs, which can be very expensive.",
          explanation: "INCORRECT. There are good reasons to pay extra to support humanely raised chickens, but superior nutrition has never been proven to be among them.",
          isCorrect: false,
          wasSelected: false
        }
      ],
      wasQuestionCompleted: false,
      questionType: "basic",
      linkAddress: "http://www.webmd.com/diet/features/good-eggs-for-nutrition-theyre-hard-to-beat#1",
      harvardApproved: false
    },
    {
      questionText: "Between the two top brands of toothpaste, which is a better choice for most people: Crest Pro-Health or Colgate Total?",
      answers: [
        {
          answerText: "Crest, because Colgate is imported from North Korea.",
          explanation: "North Korea exports cheap clothes, counterfeit currency, and the occasional bomb.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "Crest, because it comes in a shinier tube.",
          explanation: "Unless the tube is shiny enough to use if your mirror is all fogged up.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "Whichever brand is on sale, of course.",
          explanation: "Any difference in price would amount to a fraction of a penny per use.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "Crest, because Colgate contains a chemical that the government has banned from soap and other personal care products.",
          explanation: "Colgate Total contains a bacteria-killer called 'triclosan', which the government has banned from most other products. Particularly if you are pregnant, we'd recommend switching. On the other hand, people with gum disease might want to stick with Colgate to kill more harmful bacteria, despite the other risks.",
          isCorrect: true,
          wasSelected: false            
        },
        {
          answerText: "Colgate, because it has more fluoride than Crest.",
          explanation: "Both have roughly the same amount — meaning, the right amount — of fluoride. Adding 'more fluoride' to toothpaste would be like adding more water to a glass that's already full.",
          isCorrect: false,
          wasSelected: false
        }
      ],
      wasQuestionCompleted: false,
      questionType: "basic",
      linkAddress: "http://www.nytimes.com/2016/09/07/well/live/why-your-toothpaste-has-triclosan.html",
      harvardApproved: false 
    },
    {
      questionText: "How does the radiation in a CT ('CAT') scan compare to the radiation in an X-ray?",
      answers: [
        {
          answerText: "A CT scan has about 500 times as much as an x-ray.",
          explanation: "Most have between 100 and 1000 times as much radiation. We aren't saying: 'Never get a CT scan.' We are saying: 'Make sure to consider the risks.' This is especially true for your children.",
          isCorrect: true,
          wasSelected: false
        },
        {
          answerText: "A CT scan has about 5 times as much as an x-ray.",
          explanation: "You’re not gonna believe this, but it’s a lot worse. Try again.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "They are about the same.",
          explanation: "You’re not gonna believe this, but it’s a lot worse. Try again.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "The X-ray has more. CT technology doesn’t involve radiation at all.",
          explanation: "Alas, no. Perhaps on some other planet, but here on earth, CT Scans involve lots of radiation. Try again to guess how much. (Hint: it's a lot!)",
          isCorrect: false,
          wasSelected: false                
        },
        {
          answerText: "By law, a CT scanner may not produce radiation.",
          explanation: "You can't make laws against facts. And the fact is, CT scans produce lots of radiation. Exposure to CT radiation has been linked to an increased risk of cancer.",
          isCorrect: false,
          wasSelected: false
        }
      ],
      wasQuestionCompleted: false,
      questionType: "basic",
      linkAddress: "http://khn.org/news/heavy-use-of-ct-scans-raises-concerns-about-patients-exposure-to-radiation/?utm_campaign=KFF%3A+The+Latest&utm_source=hs_email&utm_medium=email&utm_content=25041928&_hsenc=p2ANqtz-_ul8b5fOMKvnvr97BPY0fjlL4Zjmm_pSIlZEVBqcYVbkQNvLsDoaWsHnpTK8uJtTeZRWGQHLFQd2tSVLG22troANRgiPH53pg8DjS8Wedi2S_pIzo&_hsmi=25041928",
      harvardApproved: true    
    },
    {
      questionText: "Long-term daily use of Nexium, Prilosec or Prevacid is suspected to increase your risk of:",
      answers: [
        {
          answerText: "Kidney disease.",
          explanation: "Ask your doctor about Zantac, Pepcid, or Tums. That's what we take here at Quizzify. Regular use of Nexium-type drugs has too many suspected long-term side effects for us to take the chance.",
          isCorrect: true,
          wasSelected: false
        },
        {
          answerText: "Bone fractures (especially if you are female).",
          explanation: "Especially if you have thin or thinning bones, ask your doctor about Zantac, Pepcid, or Tums. Or try active-culture yogurt to restore the natural bacteria to your stomach.",
          isCorrect: true,
          wasSelected: false
        },
        {
          answerText: "Flatulence (especially if you are male).",
          explanation: "Though many guys we know would love to have this excuse.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "Heart attacks (especially if you are high-risk to begin with).",
          explanation: "Ask your doctor about switching to Zantac, Pepcid or Tums. Try active-culture yogurt. Most of all, see for yourself, starting with the link.",
          isCorrect: true,
          wasSelected: false                
        },
        {
          answerText: "Ring Around the Collar.",
          explanation: "And if it does, there is an easy solution — Wisk around the collar beats Ring Around the Collar every time. (see YouTube for more details.)",
          isCorrect: false,
          wasSelected: false
        }
      ],
      wasQuestionCompleted: false,
      questionType: "basic",
      linkAddress: "http://www.npr.org/sections/health-shots/2015/06/11/413433350/data-dive-suggests-link-between-heartburn-drugs-and-heart-attacks",
      harvardApproved: true
    },
    {
      questionText: "Custom Question: As an employee of [Company Name], you save on generic prescriptions because you only pay:",
      answers: [
        {
          answerText: "[Insert the company-specific answer, like “$10”.]",
          explanation: "CORRECT. Our employees get a great deal on generics! The exact same drug, with a brand name, would cost you [amount]. So it's important to ask, 'Is a generic available?', when someone is writing you a prescription.",
          isCorrect: true,
          wasSelected: false
        },
        {
          answerText: "$25",
          explanation: "INCORRECT.",
          isCorrect: false,
          wasSelected: false                
        },
        {
          answerText: "$40",
          explanation: "INCORRECT.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "[Insert the price for a brand name with a generic equivalent here]",
          explanation: "This is what you would pay for the same drug, if it's advertised on TV. But both drugs have the same active ingredient. You're just paying extra for the brand.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "Whatever you can negotiate with the pharmacist, perhaps by threatening to take your business elsewhere.",
          explanation: "However, if this works for you, let us know, and we'll make sure to give you credit for this answer.",
          isCorrect: false,
          wasSelected: false
        },
      ],
      wasQuestionCompleted: false,
      questionType: "basic",
      linkAddress: null,
      harvardApproved: false
    }
  ];

  return gameArray;
}

export default GameArray;