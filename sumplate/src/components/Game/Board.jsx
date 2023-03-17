import { Row } from "./Row";
import { Square } from "./Square";
import { useEffect, useState } from "react";
export const Board = (props) => {
  const [values, setValues] = useState(props.initValues);
  const [states, setStates] = useState([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ]);
  const [winningStates, setWinningStates ] = useState(props.finishStates)
  const [resultRows, setResultRows] = useState(props.initResultRows);
  const [completed, setCompleted] = useState(false);
  const [resultColumns, setResultColumns] = useState(props.initResultColumns);
  useEffect(() => {
    console.log(states, winningStates)
    if (JSON.stringify(states) === JSON.stringify(winningStates)) {
      console.log("You win jej ddfsdfsdf ")
      setCompleted(true);
    }
  }, [states])
  useEffect(() => {
    if (completed){
      console.log("You win jej")
      props.finishedGame();
      return;
    }
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
