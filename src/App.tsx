import { lazy, useState } from 'react'
import './App.css'
import { optionsInfo } from '../public/data/db'
import QuestionArea from './components/QuestionArea/QuestionArea'
import Result from './components/Result/Result';
import Landing from './components/Landing/Landing';

function App() {
  const [page, setPage] = useState(1)
  const [showLanding, displayLanding] = useState(true)
  const [showQuestions, displayQuestions] = useState(false)
  const [showResult, displayResult] = useState(false)

  const goToQuestions = () => {
    displayLanding(false);
    displayResult(false)
    displayQuestions(true);
  }

  const goToLanding = () => {
    displayLanding(true);
    displayResult(false)
    displayQuestions(false);
  }

  const goToResult = () => {
    displayLanding(false);
    displayResult(true)
    displayQuestions(false);
  }

  return (
    <>
      {showLanding && <Landing buttonAction={goToQuestions} />}
      {showQuestions && <QuestionArea optionsInfo={optionsInfo} />}
      {showResult && <Result />}
    </>
  )
}

export default App
