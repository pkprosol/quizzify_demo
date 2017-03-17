import React from 'react';

function GameArray() {
  const gameArray = [
    {
      questionText: "How does the radiation in a CT ('CAT') scan compare to the radiation in an X-ray?",
      answers: [
        {
          answerText: "A CT scan has about 500 times as much as an x-ray.",
          explanation: "CORRECT. Most have between 100 and 1000 times as much radiation. We aren't saying: 'Never get a CT scan.' We are saying: 'Make sure to consider the risks and discuss them with your doctor.' This is especially true for your children.",
          isCorrect: true,
          wasSelected: false
        },
        {
          answerText: "A CT scan has about 5 times as much as an x-ray.",
          explanation: "INCORRECT. You’re not gonna believe this, but it’s a lot worse. Try again.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "They are about the same.",
          explanation: "INCORRECT. You’re not gonna believe this, but it’s a lot worse. Try again.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "The X-ray has more. CT technology doesn’t involve radiation at all.",
          explanation: "INCORRECT. Alas, no. Perhaps on some other planet, but here on earth, CT Scans involve lots of radiation. Try again to guess how much. (Hint: it's a lot!)",
          isCorrect: false,
          wasSelected: false            
        }
      ],
      wasQuestionCompleted: false,
      questionType: "basic",
      linkAddress: "http://khn.org/news/heavy-use-of-ct-scans-raises-concerns-about-patients-exposure-to-radiation/",
      harvardApproved: true
    },
    {
      questionText: "The most important question to ask a surgeon is...",
      answers: [
        {
          answerText: "Have you ever been sued?",
          explanation: "INCORRECT. You can Google: getting sued doesn't automatically make someone a bad doctor. Staying in-network is your best bet because health plans keep sketchy docs out of their networks.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "How many surgeries like these have you done?",
          explanation: "CORRECT. Practice makes perfect. Go to someone who is very familiar with the type of surgery you need. This assumes you really NEED the surgery and you aren't just being talked into it.",
          isCorrect: true,
          wasSelected: false
        },
        {
          answerText: "Where did you go to medical school?",
          explanation: "INCORRECT. You can google this on your own. In any case the skills needed to get into a good medical school and to be a good surgeon are different. (And in-network doctors went to legit medical schools.)",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "Did you know that 15 minutes can save you 15% or more?",
          explanation: "INCORRECT. Most medical schools cover this during the first week.",
          isCorrect: false,
          wasSelected: false            
        }
      ],
      wasQuestionCompleted: false,
      questionType: "basic",
      linkAddress: "http://archive.ahrq.gov/patients-consumers/diagnosis-treatment/surgery/questions/surgery.pdf",
      harvardApproved: true 
    },
    {
      questionText: "On this list, the four most dangerous things to do while driving are…",
      answers: [
        {
          answerText: "Texting, or writing something, such as trivia questions.",
          explanation: "CORRECT. Texting/emailing/writing trivia questions while driving doubles your stopping distance. It is also illegal in most states.",
          isCorrect: true,
          wasSelected: false
        },
        {
          answerText: "Talking on the phone with a handset held up to your ear.",
          explanation: "CORRECT. It is also illegal in many states.",
          isCorrect: true,
          wasSelected: false
        },
        {
          answerText: "Listening to a moldy oldies station and belting out 'Jumping Jack Flash' alongside Mick Jagger.",
          explanation: "INCORRECT. It's probably not a great idea, but at least your eyes are on the road. If this increased the odds of a crash by that much, half the baby boomers listening to 'classic hits' to pretend they are still cool would be dead by now.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "Reading an email.",
          explanation: "CORRECT. Yes, we know. It's a short email and you're just reading it, not writing back, and you're still looking at the road. But even so, this increases your stopping distance by about 50%.",
          isCorrect: true,
          wasSelected: false                
        },
        {
          answerText: "Turning around to get your kids in the back seat to stop fighting.",
          explanation: "CORRECT. There's probably something funny we could say here but we couldn't think of it because we were too busy yelling at the kids to stop fighting in the back seat while we were writing this question and responding to an email.",
          isCorrect: true,
          wasSelected: false
        }
      ],
      wasQuestionCompleted: false,
      questionType: "basic",
      linkAddress: "https://www.fcc.gov/guides/texting-while-driving",
      harvardApproved: true    
    },
    {
      questionText: "If you are taking a baby aspirin to reduce your risk of a heart attack or regularly take Advil for any reason, which of the following is a very bad idea?",
      answers: [
        {
          answerText: "Driving after taking an antihistamine, such as Benadryl.",
          explanation: "CORRECT. This is true whether or not you take a baby aspirin, Advil, anything, or nothing. An antihistamine can have many of the same effects on your driving as alcohol, and you can be cited for DUI.",
          isCorrect: true,
          wasSelected: false
        },
        {
          answerText: "Eating grapefruit.",
          explanation: "INCORRECT. Eat all the grapefruit you want, if that's your idea of a good time. (Grapefruit and some antibiotics don't mix, but fruits and most other foods are fine with aspirin or Advil.)",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "Taking a Vitamin E supplement.",
          explanation: "CORRECT. Aspirin and Advil (or a generic form of Advil, known as ibuprofen) reduce your blood's ability to clot. Vitamin E supplements do the same thing. Taken together, your risk of bleeding exceeds the benefits. (Vitamin E supplements are questionable anyway).",
          isCorrect: true,
          wasSelected: false
        },
        {
          answerText: "Watching reality TV.",
          explanation: "INCORRECT. As much as we would like to attribute the world's evils to overdosing on reality TV, scientists have yet to prove that being interested in the Kardashians creates an increased risk of anything other than brain death.",
          isCorrect: false,
          wasSelected: false                
        },
        {
          answerText: "Taking Viagra.",
          explanation: "INCORRECT. Viagra shouldn't be taken with nitrates, but shoud be fine with aspirin or Advil. (Side note: if you are taking heart or blood pressure medication, ask your doctor before taking Viagra.)",
          isCorrect: false,
          wasSelected: false
        }
      ],
      wasQuestionCompleted: false,
      questionType: "basic",
      linkAddress: "https://www.drugs.com/drug-interactions/aspirin-low-strength-with-vitamin-e-243-3197-2306-0.html",
      harvardApproved: true
    },
    {
      questionText: "The best trick to avoiding the cereals with the most sugar is to...",
      answers: [
        {
          answerText: "Read the ingredients to see if sugar is first on the label, since ingredients must be listed in order of weight.",
          explanation: "This is correct, sort of. (Since it's early in the quiz we're grading generously.) Every cereal listing sugar first is largely sugar. However, most cereals simply use small amounts of many sugary sweeteners so that none of them show up first. Examples: corn syrup, malt syrup.",
          isCorrect: true,
          wasSelected: false
        },
        {
          answerText: "Go to a crunchy-granola store specializing in organic food and pick something that says: 'no added sugar.'",
          explanation: "INCORRECT. Those cereals are often sweetened with honey, agave or some other sugary stuff with a fancy name. So you still have to read the label. And those 'two scoops' of dried raisins? Full of natural sugars that won't show up in the ingredients.",
          isCorrect: false,
          wasSelected: false                
        },
        {
          answerText: "Pick one that is high in fiber.",
          explanation: "CORRECT. The more fiber there is in an ounce of cereal, the less sugar there is. So high-fiber cereals will probably have less sugar in the same size serving than other cereals. Plus, fiber helps maintain 'regularity.'",
          isCorrect: true,
          wasSelected: false
        },
        {
          answerText: "Pick one endorsed by a leprechaun, seafarer, toucan, tiger or silly rabbit.",
          explanation: "INCORRECT. In general it is not a good idea to take nutritional advice from a cartoon character, even one who insists his cereal is grrrrrreat!",
          isCorrect: false,
          wasSelected: false
        },
      ],
      wasQuestionCompleted: false,
      questionType: "basic",
      linkAddress: "http://www.fda.gov/Food/GuidanceRegulation/GuidanceDocumentsRegulatoryInformation/LabelingNutrition/ucm064880.htm",
      harvardApproved: true
    },
    {
      questionText: "Having a close friend is especially helpful in preventing which disease?",
      answers: [
        {
          answerText: "Depression.",
          explanation: "INCORRECT. Though it can't hurt.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "Lyme Disease.",
          explanation: "CORRECT. A close friend can use a magnifying glass to look for small ticks behind your knees, under your arms, and in places that can't be mentioned in a G-rated contest like Quizzify. Perform a daily check if you are walking in infested areas, in addition to taking other precautions, like using sprays and wearing long pants tucked into your socks.",
          isCorrect: true,
          wasSelected: false                
        },
        {
          answerText: "Hypertension.",
          explanation: "INCORRECT. Maintaining good relationships is good for health in general, though.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "Zika Virus.",
          explanation: "INCORRECT. Friends are always good to have, but won't help here unless they swat a mosquito on you before it bites&mdash;and the mosquito happens to carry the virus (which fortunately is very rare in most states).",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "Uterine Cancer.",
          explanation: "INCORRECT. There is no correlation.",
          isCorrect: false,
          wasSelected: false
        },
      ],
      wasQuestionCompleted: false,
      questionType: "basic",
      linkAddress: null,
      harvardApproved: true
    },
    {
      questionText: "Which of the following are true about the annual pelvic exam?",
      answers: [
        {
          answerText: "It is free.",
          explanation: "CORRECT. A 'well-woman visit' has no co-pay for you. It includes a pelvic. You may ask or demand to skip the pelvic exam.",
          isCorrect: true,
          wasSelected: false
        },
        {
          answerText: "It will not be useful for most women.",
          explanation: "CORRECT. The only people who support this exam are the gynecologists who profit from it. And even they admit there isn't any good evidence in favor of these exams.",
          isCorrect: true,
          wasSelected: false                
        },
        {
          answerText: "It is strongly recommended by the experts.",
          explanation: "INCORRECT. Expert doctors who don't make their living doing these exams usually oppose them.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "For most women, it is more likely to cause harm than provide benefits.",
          explanation: "CORRECT. Most 'findings' are false-positives that require follow-up and create anxiety and the need for extra tests. Many women really dislike these exams. If you are one of those women, read the link. You may decide to skip them.",
          isCorrect: true,
          wasSelected: false
        },
        {
          answerText: "Gynecologists say they are important but most research says to skip them.",
          explanation: "CORRECT. Gynecologists make a lot of money on these so naturally their professional group supports them even though no evidence supports them. We recommend reading the link to decide for yourself.",
          isCorrect: true,
          wasSelected: false
        },
      ],
      wasQuestionCompleted: false,
      questionType: "basic",
      linkAddress: "https://www.statnews.com/2016/06/28/pelvic-exams-no-benefit/",
      harvardApproved: true
    },
    {
      questionText: "Which are correct about the PSA blood test for prostate cancer?",
      answers: [
        {
          answerText: "Since prostate cancer is a leading killer of men, this screening is VERY important.",
          explanation: "INCORRECT. There are too many reasons to list here about why this screen is a bad idea. See the link. Short answer: even the guy who invented this test opposes its use as an automatic screen. Talk to your doctor, but he or she needs to be very convincing on why in YOUR case this screen makes sense.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "This screen is arguably the worst screen in all of screening. Don't get it as part of a routine physical.",
          explanation: "CORRECT. Even the inventor of the test thinks it's a bad idea to use as an automatic screen on healthy males. (It's not even clear you should get 'routine' physicals in the first place. That's the subject of another question.)",
          isCorrect: true,
          wasSelected: false                
        },
        {
          answerText: "Only get it if you didn't have one at last year's checkup. Once every two years is enough.",
          explanation: "INCORRECT. Once every two years is once every two years too much. Don't get it as a screen unless your doctor can provide a VERY good reason based on your own situation. See the link.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "The urology community (the experts on prostates) say we should have them annually, so get it.",
          explanation: "INCORRECT. Even the urology community, which was the last group to let go of these things because they can lead to very profitable surgeries, does not support their annual use as a screen on healthy males without symptoms.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "As a screen on males with no family history or symptoms, it's amazing this test is even still legal.",
          explanation: "CORRECT. PSA testing may have some value for males with symptoms (like difficulty peeing) or a strong family history. It has negative value as an automatic screen. It has resulted in many painful and unnecessary surgeries. 'Early detection' has had almost no effect on prostate cancer death rates.",
          isCorrect: true,
          wasSelected: false
        },
      ],
      wasQuestionCompleted: false,
      questionType: "basic",
      linkAddress: "http://www.uspreventiveservicestaskforce.org/Page/Document/UpdateSummaryFinal/prostate-cancer-screening",
      harvardApproved: true
    },
    {
      questionText: "Long-term daily use of Nexium, Prilosec or Prevacid is suspected to increase your risk of:",
      answers: [
        {
          answerText: "Kidney disease.",
          explanation: "CORRECT. Ask your doctor about Zantac, Pepcid, or Tums. That's what we take here at Quizzify. Regular use of Nexium-type drugs has too many suspected long-term side effects for us to take the chance. See the link.",
          isCorrect: true,
          wasSelected: false
        },
        {
          answerText: "Bone fractures (especially if you are female).",
          explanation: "CORRECT. Especially if you have thin or thinning bones, ask your doctor about Zantac, Pepcid, or Tums. Or try active-culture yogurt to restore the natural bacteria to your stomach.",
          isCorrect: true,
          wasSelected: false                
        },
        {
          answerText: "Flatulence (especially if you are male).",
          explanation: "INCORRECT. Though many guys we know would love to have this excuse.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "Heart attacks (especially if you are high-risk to begin with).",
          explanation: "CORRECT. Ask your doctor about switching to Zantac, Pepcid or Tums. Try active-culture yogurt. Most of all, see for yourself, starting with the link.",
          isCorrect: true,
          wasSelected: false
        },
        {
          answerText: "Ring Around the Collar.",
          explanation: "INCORRECT. And if it does, there is an easy solution &mdash; Wisk around the collar beats Ring Around the Collar every time. (see YouTube for more details.)",
          isCorrect: false,
          wasSelected: false
        },
      ],
      wasQuestionCompleted: false,
      questionType: "basic",
      linkAddress: "http://www.npr.org/sections/health-shots/2015/06/11/413433350/data-dive-suggests-link-between-heartburn-drugs-and-heart-attacks",
      harvardApproved: true
    },
    {
      questionText: "Cigarette smoke contains which four harmful chemicals?",
      answers: [
        {
          answerText: "Butane.",
          explanation: "CORRECT. Butane is also found in lighter fluid.",
          isCorrect: true,
          wasSelected: false
        },
        {
          answerText: "Acetone.",
          explanation: "CORRECT. Acetone is also found in nail polish remover.",
          isCorrect: true,
          wasSelected: false                
        },
        {
          answerText: "Tar.",
          explanation: "CORRECT. Yes, the very same 'tar' we drive on.",
          isCorrect: true,
          wasSelected: false
        },
        {
          answerText: "Dihydrogen monoxide.",
          explanation: "INCORRECT. That's water. It's not a 'harmful chemical' unless you're drowning, in which case most wellness experts would agree that smoking cessaton should probably not be your #1 priority.",
          isCorrect: false,
          wasSelected: false
        },
        {
          answerText: "Lead.",
          explanation: "CORRECT. It's no longer allowed in gasoline or paint. But it is allowed in cigarettes. Is this a great country or what?",
          isCorrect: true,
          wasSelected: false
        },
      ],
      wasQuestionCompleted: false,
      questionType: "basic",
      linkAddress: "http://www.lung.org/stop-smoking/smoking-facts/whats-in-a-cigarette.html",
      harvardApproved: true
    },
  ];

  return gameArray;
}

export default GameArray;