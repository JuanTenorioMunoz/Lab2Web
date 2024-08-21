import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import Options from './components/Options/Options'
import {optionsInfo} from '../public/data/db'

function App() {

  const [page, setPage] = useState(1);

  return (
    <>
      <Options options={optionsInfo} page={page}></Options>
      <Button text='hello'></Button>
    </>
  )
}

export default App
