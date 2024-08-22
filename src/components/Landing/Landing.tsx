import { useState } from "react";
import Button, { ButtonProps } from "../Button/Button";
import "./Landing.css"

type LandingProps = {
    buttonAction: () => void;
}

const Landing = ({buttonAction}: LandingProps) => {

    return (
        <article className="landing">
            <h1>Don't know what to watch?</h1>
            <h2>Begin the survey to find a movie!</h2>
            <input placeholder="Enter your name"></input>
            <Button text="Enter" onClick={buttonAction}></Button>
        </article>
    )
}

export default Landing;