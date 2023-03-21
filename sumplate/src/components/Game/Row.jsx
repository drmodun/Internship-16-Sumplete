import { useEffect, useState } from "react";
import { Square } from "./Square";
export const Row = (props) => {
    console.log(props)
    const mode = props.mode;
    const [states, setStates] = useState(()=>   
        Array.from({length: mode}, () => 1));
    const [defStates, setDefStates] = useState(()=>
        Array.from({length: mode}, () => ""));
    const [values, setValues] = useState(props.values);
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
        setDefStates(()=>{
            let temp = [];
            for (let i = 0; i < mode; i++) {
                temp.push("");
            }
            return temp;
        })
        setSetHighlight("#808080");
        setValues(props.values);
        setStates(()=>{
            let temp = [];
            for (let i = 0; i < mode; i++) {
                temp.push(1);
            }
            return temp;
        });
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
            {values.map((value, index) => { return <Square index={index} changeValue={changeValue} value={value} initState = {defStates[index]}></Square> }
            )}
            <span style={{color : setHighlight}}>{props.result}</span>
        </div>
    );
}