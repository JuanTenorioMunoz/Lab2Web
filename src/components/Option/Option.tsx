import "./Option.css"

interface optionProps {
    text: string;
    image: string;
}

const Option = ({text, image}:optionProps) => {
    return (
        <div className='optionContainer'>
            <img className="optionImg" src={image}></img>
            <h1 className="optionText">{text}</h1>
        </div>
    )
    
}

export default Option
export type {optionProps}