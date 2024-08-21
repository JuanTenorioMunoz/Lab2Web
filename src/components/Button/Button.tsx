import "./Button.css"

type buttonProps = {
    text: string;
}

const Button = ({text}:buttonProps) => {
    return(
        <button className="button">{text}</button>
    )
}

export default Button