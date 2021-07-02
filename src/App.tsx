import React, { useEffect, useState } from 'react';
import './App.css';
import getQuizdata from './services/quiz_service';
import { Quiz } from './types/type';
import { InitNotification } from './services/FirebaseService';
import Question from './components/Question';
import { Choice } from './services/quiz_service';

function App() {

  const [quiz, setQuiz] = useState<Quiz[]>([]);
  let [currentQuestion, setCurrentQuestion] = useState(1);
  let [increment, setIncrement] = useState(0);
  let [result, setResult] = useState(false);

  useEffect(() => {
    InitNotification();
    async function fetchData() {
      const questions: Quiz[] = await getQuizdata(6, Choice.EASY);
      console.log("Which", questions);
      setQuiz(questions);
    }
    fetchData();
  }, [])

  // console.log("How its work", quiz[currentQuestion].answer);

  const handleSubmit = (e: React.FormEvent<EventTarget>, userSelect: string) => {
    e.preventDefault();
    if (userSelect === quiz[currentQuestion]?.answer) {
      setIncrement(++increment);
    }
    if (currentQuestion !== quiz?.length - 1) {
      setCurrentQuestion(++currentQuestion);
    }
    else {
      setResult(true)
    }
  }
  if (result) {
    return (
      <React.Fragment>
        <div style={{ textAlign: 'center' }}>
          <h1>Correct Answer : {increment}</h1>
          Total Answer : {quiz?.length - 1}
        </div>
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <div className="App">
        <h1 style={{ textAlign: 'center', fontFamily: 'serif', textShadow: ' 2px 2px 4px #000000', color: 'white' }}>Quiz App</h1>

        <Question
          question={quiz[currentQuestion]?.question}
          option={quiz[currentQuestion]?.option}
          callback={handleSubmit}
          currentQuestion={currentQuestion}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
