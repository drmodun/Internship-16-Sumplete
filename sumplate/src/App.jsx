import { Board } from "./components/Game/Board"
import "./index.css";
import { values as initValues, resultRows as initResultRows, resultColumns as initResultColumns, Generate as Reset, statesToWin as finishStates,  statesToWin } from "./data.js";
import { useState } from "react";
const App = () => {
    const [completedText, setCompletedText] = useState("");
    const [buttonState, setButtonState] = useState("none"); 
    const [values, setValues] = useState(initValues);
    const [resultRows, setResultRows] = useState(initResultRows);
    const [resultColumns, setResultColumns] = useState(initResultColumns);
    const [finishStates, setFinishStates] = useState(statesToWin);
    function finishedGame() {
        setCompletedText("Završeno");
        setButtonState("flex");
    }
    function newGame() {
        setCompletedText("");
        setButtonState("none");
        let newGame = Reset();
        setValues(newGame.values);
        setResultRows(newGame.resultRows);
        setFinishStates(newGame.states);
        setResultColumns(newGame.resultColumns);

    }
    return (
        <div className="App">
            <h1>Sumplete</h1>
            <Board finishedGame = {finishedGame} initValues={values} initResultRows = {resultRows} initResultColumns = {resultColumns} finishStates = {finishStates} >
            </Board>
            <span>{completedText}</span>
            <button style = {{display : buttonState}}onClick={newGame}>Reload game</button>
        </div>
        );}
export default App; 
