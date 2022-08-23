import "./App.css";
import { useState, useEffect } from "react";
import QuestionPrompt from "./components/QuestionPrompt";
import QuestionResponses from "./components/QuestionResponses";
import ShowResults from "./components/ShowResults";

function App() {
  const questions = [
    {
      id: 1,
      question: "In The Matrix, what color is the pill Neo takes?",
      answerOptions: [
        { answer: "Black", isCorrect: false },
        { answer: "Blue", isCorrect: false },
        { answer: "Red", isCorrect: true },
        { answer: "Yellow", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "what is 2 + 2",
      answerOptions: [
        { answer: "4", isCorrect: true },
        { answer: "-4", isCorrect: false },
        { answer: "2", isCorrect: false },
        { answer: "0", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "What is the capital of the USA",
      answerOptions: [
        { answer: "New York", isCorrect: false },
        { answer: "Washington D.C", isCorrect: true },
        { answer: "Los Angeles", isCorrect: false },
        { answer: "Austin", isCorrect: false },
      ],
    },
    {
      id: 4,
      question: "Who was the first president of the USA",
      answerOptions: [
        { answer: "King George III", isCorrect: false },
        { answer: "Abraham Lincoln", isCorrect: false },
        { answer: "Andrew Jackson", isCorrect: false },
        { answer: "George Washington", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [showCorrect, setShowCorrect] = useState(false);

  function handleButton(correct) {
    if (correct === true) {
      setCorrectCount((prevCorrectCount) => prevCorrectCount + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevCount) => prevCount + 1);
    } else {
      setShowCorrect(true);
    }
  }

  function handleReset() {
    setCorrectCount(0);
    setCurrentQuestion(0);
    setShowCorrect(false);
  }

  useEffect(() => {
    console.log("correct:", correctCount);
    console.log("current:", currentQuestion);
  }, [currentQuestion]);

  const displayAnswers = questions[currentQuestion].answerOptions.map(
    (option) => (
      <QuestionResponses
        key={option.answer}
        correct={option.isCorrect}
        answer={option.answer}
        handleButton={() => handleButton(option.isCorrect)}
      />
    )
  );
  return (
    <div className="App">
      <div className="app-container">
        {showCorrect ? (
          <ShowResults
            count={correctCount}
            questions={questions}
            handleButton={handleReset}
          />
        ) : (
          <div>
            <QuestionPrompt question={questions[currentQuestion]} />
            {displayAnswers}
          </div>
        )}

        <div></div>
      </div>
    </div>
  );
}

export default App;
