import React from "react";

const Question = ({ question, handleAnswerClick }) => {
  return (
    <div className="question">
      <h2>{question.question}</h2>
      <ul className="options-list">
        {question.options.map((option, index) => (
          <li key={index}>
            <button
              className="option-button"
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
