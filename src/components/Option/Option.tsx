import "./Option.css"

interface optionProps {
    text: string;
    image: string;
    isSelected: boolean;
    onClick: () => void;
    type: string;
}

const Option = ({text, image, onClick, isSelected}:optionProps) => {
    return (
        <div className={'optionContainer' + (isSelected ? ' selected' : '')} onClick={onClick}>
            <img className="optionImg" src={image}></img>
            <h1 className="optionText">{text}</h1>
        </div>
    )
    
}

export default Option
export type {optionProps}