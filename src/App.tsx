import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import Options from './components/Options/Options'
import { optionsInfo } from '../public/data/db'

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
      <Options options={optionsInfo} page={page}></Options>
      <Button text='Next Page' onClick={incrementPage}></Button>
      <Button text='Previous Page' onClick={decrementPage}></Button>
    </>
  )
}

export default App
