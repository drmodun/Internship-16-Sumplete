import { useEffect, useState } from "react";
import { Square } from "./Square";

export const Row = (props) =>{
    const [states , setStates] = useState([1, 1, 1]);
    const [values, setValues] = useState([props.values[0], props.values[1], props.values[2]]);
    function changeValue(index) {
        if (states[index] === 1){
            setStates(states.map((state, i) => i === index ? (state === 0 ? 1 : 0) : state));
        }
    } 
    useEffect(() =>{
        let sum = 0;
        values.forEach((value, i)=>{
            if (states[i]===1)
                sum+=value;
        })
        if (sum===props.result){
            console.log("You win");
        }
        console.log(sum)
    }, [states])
    return (
        <div className="row">
            <Square index={0} changeValue={changeValue} value={values[0]}/>
            <Square index={1} changeValue={changeValue} value={values[1]}/>
            <Square index={2} changeValue={changeValue} value={values[2]}/>
            <span>{props.result}</span>
        </div>
    );
}