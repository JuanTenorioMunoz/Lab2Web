import "./Options.css";
import Option, { optionProps } from "../Option/Option";
import { useState } from "react";

export type optionsProps = {
    options: { 
        [key: string]: { 
            text: string; 
            options: optionProps[]; 
            question: string;
        } 
    };
    page: number;
    type: toggle;
};

const Options = ({ options, page }: optionsProps) => {

    const [selection, setSelect] = useState<number | null>(null);
    
    const currentPage = options[page].options;
    const question = options[page].question

    return (
        <div className="optionsContainer">
        <h1>{question}</h1>
            {currentPage.map((option, index) => (
                <Option
                    key={index}
                    text={option.text}
                    image={option.image}
                    isSelected={selection === index}
                    onClick={() => {setSelect(index)}}
                />
            ))}
        </div>
    );
};

export default Options;
