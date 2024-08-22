import "./QuestionArea.css";
import { useState } from "react";
import Options from "../Options/Options";
import Button from "../Button/Button";

type QuestionProps = {
    question: string;
    optionsInfo: any; 
    storeAnswers: (answer: string) => void;
    goToResult: () => void; 
};

const QuestionArea = ({ question, optionsInfo, storeAnswers, goToResult }: QuestionProps) => {
    const [answers, setAnswers] = useState<string[]>([]);
    const [page, setPage] = useState(1);

    const incrementPage = () => {
        setPage(prevPage => {
            const newPage = prevPage + 1;
            if (newPage > 4) {
                goToResult(); 
            }
            return newPage;
        });
        console.log(page);
    };

    const decrementPage = () => {
        setPage(prevPage => prevPage - 1);
        console.log(page);
    };

    const giveAnswer = (answer: string) => {
        storeAnswers(answer); 
    };

    return (
        <article className="QuestionArea">
            <h1>{question}</h1>
            <Options options={optionsInfo} page={page} selectAnswer={giveAnswer} />
            <Button text='Previous Page' onClick={decrementPage} />
            <Button text='Next Page' onClick={incrementPage} />
        </article>
    );
};

export default QuestionArea;
