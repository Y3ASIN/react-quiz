import React from "react";
import { useQuiz } from "../contexts/QuizContext";
function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + answer} />
      <p>
        <strong>{index + 1}</strong> / <strong>{numQuestions}</strong>
      </p>
      <p>
        <strong>{points}</strong> / <strong>{maxPossiblePoints}</strong>
      </p>
    </header>
  );
}

export default Progress;
