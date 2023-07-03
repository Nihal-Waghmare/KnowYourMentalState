import React, { useState } from 'react';

function WellbeingLevel() {
  const [scores, setScores] = useState(Array(16).fill(0));

  const handleOptionChange = (index, value) => {
    const updatedScores = [...scores];
    updatedScores[index] = value;
    setScores(updatedScores);
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < scores.length; i++) {
      const answer = scores[i];
      const questionScore = 7 - answer; // ((Number of scale points) + 1) - (Respondent’s answer)
      score += questionScore;
    }
    console.log(`Score for Well-being Level: ${score}`);
  };

  const questions = [
    "I like most parts of my personality",
    "When I look at the story of my life, I am pleased with how things have turned out so far",
    "Some people wander aimlessly through life, but I am not one of them",
    "The demands of everyday life often get me down",
    "In many ways, I feel disappointed about my achievements in life",
    "Maintaining close relationships has been difficult and frustrating for me",
    "I am good at managing the responsibilities of daily life",
    "I sometimes feel as if I've done all there is to do in life",
    "For me, life has been a continuous process of learning, changing, and growth",
    "I think it is important to have new experiences that challenge how I think about myself and the world",
    "People would describe me as a giving person, willing to share my time with others",
    "I gave up trying to make big improvements or changes in my life a long time ago",
    "I tend to be influenced by people with strong opinions",
    "I have not experienced many warm and trusting relationships with others",
    "I have confidence in my own opinions, even if they are different from the way most other people think",
    "I judge myself by what I think is important, not by the values of what others think is important"
  ];

  return (
    <div className="questions-section">
      <h1>Well-being Level</h1>
      {questions.map((question, index) => (
        <div className="question" key={index}>
          <p>{question}</p>
          <div className="options">
            {[1, 2, 3, 4, 5, 6].map((option) => (
              <label className="radio-inline" key={option}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={scores[index] === option}
                  onChange={() => handleOptionChange(index, option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button onClick={calculateScore}>Calculate Score</button>
    </div>
  );
}

export default WellbeingLevel;
