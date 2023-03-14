import { Row } from "./components/Game/Row";
import { Square } from "./components/Game/Square";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Row result ={1} values = {[1,1,1]}></Row>
    </div>
  );
}

export default App;
