import { useState } from "react";

export const GameModeMenu = (props) => {
    const [mode, setMode] = useState("3");

    function handleSubmit(e) {
        e.preventDefault();
        props.startGame(Number(mode));
    }
    return (
        <div className="game-mode-menu-container">
            <span>Game Mode Menu</span>
            <form className="game-mode-menu" onSubmit={handleSubmit}>
                <select className="game-mode-menu-switch" value={mode} onChange={e => setMode(e.target.value[0])}>
                    <option value="3">3*3 (easy)</option>
                    <option value="4">4*4 (medium)</option>
                    <option value="5">5*5 (hard)</option>
                </select>
                <button type="submit" className="start-game-button">Choose GameMode</button>
            </form>
        </div>
    );
}



