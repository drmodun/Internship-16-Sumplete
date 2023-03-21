import { useEffect, useState } from "react";

export const ReloadGameMenu = (props) => {
    const [completedText, setCompletedText] = useState(props.completedText);
    const [buttonState, setButtonState] = useState(props.buttonState);

    useEffect(() => {
        setCompletedText(props.completedText);
        setButtonState(props.buttonState);
    }, [props.completedText, props.buttonState])
    return (
        <div className="reload-game-menu-container">
            <span className="reload-text">{completedText}</span>
            <button className={"reload-button"}style={{ display: buttonState }} onClick={() => { props.setGameActive(false) }}>Reload game</button>
        </div>
    );
}