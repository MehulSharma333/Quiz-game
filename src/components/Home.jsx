import React from "react";

const Home = ({ onStartQuiz }) => {
  return (
    <div>
      <h1>Welcome to the MCQ Quiz!</h1>
      <button className="home-button" onClick={onStartQuiz}>
        Start Quiz
      </button>
    </div>
  );
};

export default Home;
