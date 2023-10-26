import React from "react";

const Score = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="score">
      <h2>Quiz Completed!</h2>
      <p>
        Your Score: {score}/{totalQuestions}
      </p>
      <button className="home-button" onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Score;
