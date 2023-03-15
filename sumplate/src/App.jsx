import { Row } from "./components/Game/Row";
import { Square } from "./components/Game/Square";
import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [values, setValues] = useState([
    [1, 1, 1],
    [1, 2, 3],
    [1, 5, 7],
  ]);
  const [resultRows, setResultRows] = useState([1, 2, 3]);
  const [resultColumns, setResultColumns] = useState([1, 2, 3]);
  return (
    <div className="column">
      <Row result ={1} values = {values[0]}></Row>
      <Row result ={2} values = {values[1]}></Row>
      <Row result ={3} values = {values[2]}></Row>
      <div className="result-row">
        {resultColumns.map((result) => {return <span>{result}</span>})}
        </div>
    </div>
    );
}

export default App;
