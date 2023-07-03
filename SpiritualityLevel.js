import React, { useState } from 'react';

function SpiritualityLevel() {
  const [scores, setScores] = useState(Array(31).fill(0));

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
    console.log(`Score for Spirituality Level: ${score}`);
  };

  const questions = [
    "I don't feel particularly pleased with the way I am",
            "I am intensely interested in other people",
            "I feel that life is very rewarding",
            "I have very warm feelings towards almost everyone",
            "I rarely wake up feeling rested",
            "I am not particularly optimistic about the future",
            "I find most things amusing",
            "I am always committed and involved",
            "Life is good",
            "I don't think that the world is a good place",
            "I laugh a lot",
            "I am well satisfied about everything in my life",
            "I don't think I look attractive",
            "There is a gap between what I would like to do and what I have done",
            "I am very happy",
            "I find beauty in some things",
            "I always have a cheerful effect on others",
            "I can fit in everything I want to",
            "I feel that I am not especially in control of my life",
            "I feel able to take anything on",
            "I feel fully mentally alert",
            "I often experience joy and elation",
            "I do not find it easy to make decisions",
            "I do not have a particular sense of meaning and purpose in my life",
            "I feel I have a great deal of energy",
            "I usually have a good influence on events",
            "I do not have fun with other people",
            "I don't feel particularly healthy",
            "I do not have particularly happy memories of the past"
        


  ]

  return (
    <div className="questions-section">
      <h1>Spirituality Level</h1>
      {questions.map((question, index) => (
        <div className="question" key={index}>
          <h3>{question}</h3>
          <div className="options">
            <label className="radio-inline">
              <input
                type="radio"
                name={`question-${index}`}
                value={6}
                checked={scores[index] === 6}
                onChange={() => handleOptionChange(index, 6)}
              />
              Strongly DisAgree
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name={`question-${index}`}
                value={5}
                checked={scores[index] === 5}
                onChange={() => handleOptionChange(index, 5)}
              />
              Disgree
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name={`question-${index}`}
                value={4}
                checked={scores[index] === 4}
                onChange={() => handleOptionChange(index, 4)}
              />
              Somewhat Agree
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name={`question-${index}`}
                value={3}
                checked={scores[index] === 3}
                onChange={() => handleOptionChange(index, 3)}
              />
              Neither Agree nor Disagree
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name={`question-${index}`}
                value={2}
                checked={scores[index] === 2}
                onChange={() => handleOptionChange(index, 2)}
              />
              Agree
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name={`question-${index}`}
                value={1}
                checked={scores[index] === 1}
                onChange={() => handleOptionChange(index, 1)}
              />
              Strongly Agree
            </label>
          </div>
        </div>
      ))}
      <button onClick={calculateScore}>Calculate Score</button>
      <h1>Score for Happiness Level: {calculateScore()}</h1>
    </div>
  );
}

export default SpiritualityLevel;
