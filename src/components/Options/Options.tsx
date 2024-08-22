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
    selectAnswer: (selectedOption: optionProps) => void;
};

const Options = ({ options, page, selectAnswer }: optionsProps) => {

    const [selection, setSelect] = useState<number | null>(null);

    const currentPage = options[page].options;
    const question = options[page].question;

    const handleOptionClick = (option: optionProps, index: number) => {
        setSelect(index);
        switch (option.type) {
            case 'toggle':
                console.log("Text option selected:", option.text);
                break;
            default:
                console.log("Unknown option type:", option.type);
        }
        selectAnswer(option);
    };

    return (
        <div className="optionsContainer">
            <h1>{question}</h1>
            {currentPage.map((option, index) => (
                <Option
                    key={index}
                    type={option.type}
                    text={option.text}
                    image={option.image}
                    isSelected={selection === index}
                    onClick={() => handleOptionClick(option, index)}
                />
            ))}
        </div>
    );
};

export default Options;
