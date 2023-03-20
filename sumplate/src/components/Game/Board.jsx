import { Row } from "./Row";
import { useEffect, useState } from "react";
export const Board = (props) => {
  const [values, setValue] = useState(props.initValues);
  const [states, setStates] = useState([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ]);
  const winningStates = props.finishStates
  const [resultRows, setResultRows] = useState(props.initResultRows);
  const [completed, setCompleted] = useState(false);
  const [resultColumns, setResultColumns] = useState(props.initResultColumns);
  const [columnColor, setColumnColor] = useState(["#808080", "#808080", "#808080"]);
  useEffect(() => {
    setResultColumns(props.initResultColumns);
    setResultRows(props.initResultRows);
    setValue(props.initValues);
    setStates([
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ]);
    setCompleted(false);
  }, [props.initValues])
  useEffect(() => {
    console.log(states, winningStates)
    if (JSON.stringify(states) === JSON.stringify(winningStates)) {
      console.log("You win jej ddfsdfsdf ")
      setCompleted(true);
    }
  }, [states])
  useEffect(() => {
    if (completed) {
      console.log("You win jej")
      props.finishedGame();
      return;
    }
  }, [completed])
  function changeValue(x, y) {
    console.log(x, y)
    setStates(prev => prev.map((state, i) => i === x - 1 ? state.map((state, j) => j === y ? (state === 0 ? 1 : 0) : state) : state));
  }

  useEffect(() => {
    let temp = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (states[j][i] === 1) {
          temp[i] += values[j][i];
        }
      }
      console.log(temp[i], resultColumns[i])
      if (temp[i] === resultColumns[i]) {
        setColumnColor(prev => prev.map((color, index) => index === i ? "black" : color));
      }
      else {
        setColumnColor(prev => prev.map((color, index) => index === i ? "#808080" : color));
      }
    }
  }, [states])
  return (
    <div className="column">
      <Row index={1} result={resultRows[0]} values={values[0]} changeValue={changeValue} completed={completed}></Row>
      <Row index={2} result={resultRows[1]} values={values[1]} changeValue={changeValue} completed={completed}></Row>
      <Row index={3} result={resultRows[2]} values={values[2]} changeValue={changeValue} completed={completed}></Row>
      <div className="result-row">
        {resultColumns.map((result, index) => { return <span style={{ color: columnColor[index] }}>{result}</span> })}
      </div>
    </div>
  );
}
