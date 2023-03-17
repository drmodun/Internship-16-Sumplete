import { Board } from "./components/Game/Board"
import "./index.css";
import { values as initValues, resultRows as initResultRows, resultColumns as initResultColumns, Generate as Reset, statesToWin as finishStates, Generate, resultRows, resultColumns } from "./data.js";
import { useState } from "react";
const App = () => {
    const [completedText, setCompletedText] = useState("");
    const [buttonState, setButtonState] = useState("none"); 
    function finishedGame() {
        setCompletedText("Zavrseno");
        setButtonState("flex");
    }
    function newGame() {
        setCompletedText("");
        setButtonState("none");
        Reset();
    }
    return (
        <div>
            <h1>Sumplete</h1>
            <Board finishedGame = {finishedGame} initValues={initValues} initResultRows = {initResultRows} initResultColumns = {initResultColumns} finishStates = {finishStates} >

            </Board>
            <span>{completedText}</span>
            <button style = {{display : buttonState}}onClick={newGame}>Reload game</button>
        </div>
        );}
export default App; 
