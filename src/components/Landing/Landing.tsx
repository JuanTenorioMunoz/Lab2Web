import { useState } from "react";
import Button, { ButtonProps } from "../Button/Button";
import "./Landing.css"

type LandingProps = {
    buttonAction: () => void;
}

const Landing = ({buttonAction}: LandingProps) => {

    return (
        <article className="landing">
            <h1>1</h1>
            <h2>2</h2>
            <input></input>
            <Button text="Enter" onClick={buttonAction}></Button>
        </article>
    )
}

export default Landing;