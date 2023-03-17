import { Row } from "./components/Game/Row";
import { Square } from "./components/Game/Square";
import "./index.css";
import { useEffect, useState } from "react";
import { values as initValues, resultRows as initResultRows, resultColumns as initResultColumns, Generate as Reset, statesToWin as finishStates } from "./data.js";
function App() {
  console.log(finishStates, initResultColumns, initResultRows)
  const [values, setValues] = useState(initValues);
  const [states, setStates] = useState([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ]);
  const winningStates = [...finishStates]
  const [resultRows, setResultRows] = useState(initResultRows);
  const [completed, setCompleted] = useState(false);
  const [resultColumns, setResultColumns] = useState(initResultColumns);
  useEffect(() => {
    console.log(states, winningStates)
    if (JSON.stringify(states) === JSON.stringify(winningStates)) {
      console.log("You win jej ddfsdfsdf ")
      setCompleted(true);
    }
  }, [states])
  useEffect(() => {
    if (completed)
      return;
  }, [completed])
  function changeValue(x, y) {
    console.log(x, y)
    setStates(prev => prev.map((state, i) => i === x - 1 ? state.map((state, j) => j === y ? (state === 0 ? 1 : 0) : state) : state));
  }
  return (
    <div className="column">
      <Row index={1} result={resultRows[0]} values={values[0]} changeValue={changeValue} completed={completed}></Row>
      <Row index={2} result={resultRows[1]} values={values[1]} changeValue={changeValue} completed={completed}></Row>
      <Row index={3} result={resultRows[2]} values={values[2]} changeValue={changeValue} completed={completed}></Row>
      <div className="result-row">
        {resultColumns.map((result) => { return <span>{result}</span> })}
      </div>
    </div>
  );
}

export default App;
