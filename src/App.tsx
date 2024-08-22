import { useState } from 'react'
import './App.css'
import { optionsInfo } from '../public/data/db'
import QuestionArea from './components/QuestionArea/QuestionArea'

function App() {
  const [page, setPage] = useState(1);

  const incrementPage = () => {
    setPage(prevPage => prevPage + 1);
    console.log(page)
  };

  const decrementPage = () => {
    setPage(prevPage => prevPage - 1);
    console.log(page)
  };

  return (
    <>
      <QuestionArea optionsInfo={optionsInfo}></QuestionArea>
    </>
  )
}

export default App
