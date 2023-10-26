import React, { useState } from "react";
import questions from "./data";
import Home from "./components/Home";
import Question from "./components/Question";
import Score from "./components/Score";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="container">
      {quizCompleted ? (
        <Score
          score={score}
          totalQuestions={questions.length}
          onRestart={restartQuiz}
        />
      ) : quizStarted ? (
        currentQuestion < questions.length ? (
          <Question
            question={questions[currentQuestion]}
            handleAnswerClick={handleAnswerClick}
          />
        ) : (
          <Home onStartQuiz={restartQuiz} />
        )
      ) : (
        <Home onStartQuiz={startQuiz} />
      )}
    </div>
  );
}

export default App;
