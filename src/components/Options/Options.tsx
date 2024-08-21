import "./Options.css";
import Option, { optionProps } from "../Option/Option";

type optionsProps = {
    options: { 
        [key: string]: optionProps[] };
    page: number;
};

const Options = ({ options, page }: optionsProps) => {

    const currentPage = options[page]

    return (
        <div className="optionContainer">
            {currentPage.map((option) => (
                <Option
                    text={option.text}
                    image={option.image}
                />
            ))}
        </div>
    );
};

export default Options;
