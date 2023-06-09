import { Row } from "./Row";
import { useEffect, useState } from "react";
export const Board = (props) => {
  const [mode, setMode] = useState(props.mode);
  const [values, setValue] = useState(props.initValues);
  const setupStates = () => {
    let temp = [];
    for (let i = 0; i < mode; i++) {
      const row = []
      for (let j = 0; j < mode; j++) {

        row.push(1);
      }
      temp.push(row);
    }
    return temp;
  }
  const [states, setStates] = useState(setupStates()
  );

  const winningStates = props.finishStates
  const [resultRows, setResultRows] = useState(props.initResultRows);
  const [completed, setCompleted] = useState(false);
  const [resultColumns, setResultColumns] = useState(props.initResultColumns);
  const [columnColor, setColumnColor] = useState(Array.from({ length: mode }, () => "#C0C0C0"));
  useEffect(() => {
    setResultColumns(props.initResultColumns);
    setResultRows(props.initResultRows);
    setValue(props.initValues);
    setMode(props.mode);
    setStates(setupStates());
    setCompleted(false);
  }, [props.initValues])
  useEffect(() => {
    if (JSON.stringify(states) === JSON.stringify(winningStates)) {
      setCompleted(true);
    }
  }, [states])
  useEffect(() => {
    if (completed) {
      props.finishedGame();
      return;
    }
  }, [completed])
  function changeValue(x, y) {
    setStates(prev => prev.map((state, i) => i === x - 1 ? state.map((state, j) => j === y ? (state === 0 ? 1 : 0) : state) : state));
  }

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < mode; i++) {
      temp.push(0);
    }
    for (let i = 0; i < mode; i++) {
      for (let j = 0; j < mode; j++) {
        if (states[j][i] === 1) {
          temp[i] += values[j][i];
        }
      }
      if (temp[i] === resultColumns[i]) {
        setColumnColor(prev => prev.map((color, index) => index === i ? "black" : color));
      }
      else {
        setColumnColor(prev => prev.map((color, index) => index === i ? "	#C0C0C0" : color));
      }
    }
  }, [states])
  return (
    <div className="column">
      {values.map((value, index) => { return <Row index={index + 1} result={resultRows[index]} mode={mode} values={value} changeValue={changeValue} completed={completed}></Row> })}
      <div className="result-row">
        {resultColumns.map((result, index) => { return <span style={{ color: columnColor[index] }}>{result}</span> })}
      </div>
    </div>
  );
}
