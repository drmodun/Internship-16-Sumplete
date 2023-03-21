import { Board } from "./components/Game/Board"
import "./index.css";
import { values as initValues, resultRows as initResultRows, resultColumns as initResultColumns, Generate as Reset, statesToWin as finishStates, statesToWin } from "./data.js";
import { useState } from "react";
import { GameModeMenu } from "./components/UI/GameModeMenu";
import { ReloadGameMenu } from "./components/UI/ReloadGameMenu";
const App = () => {
    const [completedText, setCompletedText] = useState("");
    const [buttonState, setButtonState] = useState("none");
    const [values, setValues] = useState(initValues);
    const [resultRows, setResultRows] = useState(initResultRows);
    const [resultColumns, setResultColumns] = useState(initResultColumns);
    const [finishStates, setFinishStates] = useState(statesToWin);
    const [gameActive, setGameActive] = useState(false);
    const [mode, setMode] = useState(3);
    function finishedGame() {
        setCompletedText("Završeno");
        setButtonState("flex");
    }
    function startGame(mode) {
        console.log(mode)
        let newGame = Reset(mode);
        setValues(newGame.values);
        setResultRows(newGame.resultRows);
        setFinishStates(newGame.states);
        setResultColumns(newGame.resultColumns);
        setGameActive(true);
        setButtonState("none");
        setCompletedText("");
        setMode(mode);
    }
    return (
        <div className="App">
            <h1>Sumplete</h1>
            {gameActive ?
                <div className="board-element">
                    <Board mode={mode} finishedGame={finishedGame} initValues={values} initResultRows={resultRows} initResultColumns={resultColumns} finishStates={finishStates} >
                    </Board>
                    <ReloadGameMenu  completedText={completedText} buttonState={buttonState} setGameActive={setGameActive}>
                    </ReloadGameMenu>
                </div>
                : <GameModeMenu startGame={startGame}></GameModeMenu>}
        </div>
    );
}
export default App; 
