import "./Options.css";
import Option, { optionProps } from "../Option/Option";
import { useState } from "react";

type optionsProps = {
    options: { 
        [key: string]: optionProps[] };
    page: number;
};

const Options = ({ options, page }: optionsProps) => {

    const [selection, setSelect] = useState<number | null>(null);
    const currentPage = options[page]

    return (
        <div className="optionsContainer">
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