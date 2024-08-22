import "./Option.css"

interface optionProps {
    text: string;
    image: string;
    isSelected: boolean;
    onClick: () => void;
    type: string;
}

const Option = ({text, image, onClick, isSelected, type}:optionProps) => {
    
    switch (type) {
        case 'normal':
            return (
                <div className={'optionContainer' + (isSelected ? ' selected' : '')} onClick={onClick}>
                    <img className="optionImg" src={image}></img>
                    <h1 className="optionText">{text}</h1>
                </div>
            )
            break;
        
        case 'toggle':
            return (
                <div className={'optionContainer' + (isSelected ? ' selected' : '')} onClick={onClick}>
                    <img className="optionImg" src={image}></img>
                    <h1 className="optionText">{text}</h1>
                </div>
            )
            break;
    
        default:
            return(<div>error no type my man</div>)
            break;
    }

    
}

export default Option
export type {optionProps}