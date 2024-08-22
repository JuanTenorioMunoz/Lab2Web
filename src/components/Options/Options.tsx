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
        switch (option.type) {
            case 'normal':
                setSelect(null);
                setSelect(index);
                console.log("selectedIndex" + selection)
                break;

            case 'toggle':
                setSelect(index);
                break;

            default:
                console.log("what type is this?", option.type);
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
