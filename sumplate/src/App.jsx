import { Row } from "./components/Game/Row";
import { Square } from "./components/Game/Square";
import "./index.css";
import { useEffect, useState } from "react";
import {values as initValues, resultRows as initResultRows, resultColumns as initResultColumns, Generate as Reset, statesToWin as finishStates} from "./data.js";
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
  const [resultColumns, setResultColumns] = useState(initResultColumns);
  useEffect(() => {
    let sum = 0;
    values.forEach((value, i) => {
      values[i].forEach((value, j) => {
        if (states[i][j] === 1)
          sum += value;
      })
      if (sum === resultRows[i]) {
        console.log("You win");
        console.log(sum)
        sum = 0;
      }
      else {
        return
      }
    })
    sum=0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (states[j][i] === 1)
          sum += values[j][i];
      }
      if (sum === resultColumns[i]) {
        console.log("You win");
        console.log(sum)
        sum = 0;
      }
      else {
        return
      }
    }
  }, [states])
  function changeValue(x, y) {
    setStates(prev => prev.map((state, i) => i === x - 1 ? state.map((state, j) => j === y ? (state === 0 ? 1 : 0) : state) : state));
  }
  return (
    <div className="column">
      <Row result={resultRows[0]} values={values[0]} changeValue={changeValue}></Row>
      <Row result={resultRows[1]} values={values[1]}changeValue={changeValue}></Row>
      <Row result={resultRows[2]} values={values[2]}changeValue={changeValue}></Row>
      <div className="result-row">
        {resultColumns.map((result) => { return <span>{result}</span> })}
      </div>
    </div>
  );
}

export default App;
