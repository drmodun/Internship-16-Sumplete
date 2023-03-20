import { useEffect, useState } from "react";
import { Square } from "./Square";
export const Row = (props) => {
    const [states, setStates] = useState([1, 1, 1]);
    const [defStates, setDefStates] = useState(["", "", ""]);
    const [values, setValues] = useState([props.values[0], props.values[1], props.values[2]]);
    const [setHighlight, setSetHighlight] = useState("#808080");
    function changeValue(index) {
        props.changeValue(props.index, index);
        setStates(prev=>prev.map((state, i) => i === index ? (state === 0 ? 1 : 0) : state));
    }
    useEffect(() => {
        if (props.completed){
            setSetHighlight("black");
            setDefStates(prev=>prev.map((state, i) => states[i] === 1 ? "O" : "X"));
            return
        }
        setDefStates(["", "", ""]);
        setSetHighlight("#808080");
        setValues([props.values[0], props.values[1], props.values[2]]);
        setStates([1, 1, 1]);
    }, [props.completed])

    useEffect(() => {
        let temp = 0;
        states.forEach((state, i) => {
            if (state === 1) {
                temp += values[i];
            }
        })
        if (temp === props.result) 
            setSetHighlight("black");
        else
            setSetHighlight("#808080");
        console.log(states, props.result)
    }, [states])
    return (
        <div className="row">
            <Square index={0} changeValue={changeValue} value={values[0]} initState = {defStates[0]} />
            <Square index={1} changeValue={changeValue} value={values[1]} initState = {defStates[1]}/>
            <Square index={2} changeValue={changeValue} value={values[2]} initState = {defStates[2]}/>
            <span style={{color : setHighlight}}>{props.result}</span>
        </div>
    );
}