import "./QuestionArea.css"
import { useState } from "react";
import Options from "../Options/Options";
import Button from "../Button/Button";

type questionProps = {
    question: string;
    optionsInfo: any; 
    storeAnswers: (answer: string) => void;
}

const QuestionArea = ({question, optionsInfo, storeAnswers}: questionProps) => {
    
    const [answers, setAnswers] = useState([])
    const [page, setPage] = useState(1);

    const incrementPage = () => {
    setPage(prevPage => prevPage + 1);
    console.log(page)
    };

    const decrementPage = () => {
    setPage(prevPage => prevPage - 1);
    console.log(page)
    };

    const giveAnswer = (answer: string) => {
        storeAnswers(answer); 
    };


  return (
    <>
        <article className="QuestionArea">
        <h1>{question}</h1>
        <Options options={optionsInfo} page={page} selectAnswer={giveAnswer}></Options>
        <Button text='Previous Page' onClick={decrementPage}></Button>
        <Button text='Next Page' onClick={incrementPage}></Button>
        </article>
    </>
  )
}

export default QuestionArea;