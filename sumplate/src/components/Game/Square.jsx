import { useState } from "react";

export const Square = (props) => {
    const [state, setState] = useState("");
    function handleClick() {
        if (state === "") {
            setState("X");
        }
        else if (state === "O")
            setState("");
        else if (state === "X")
            setState("O");
        props.changeValue(props.index, state);
    }
    return (    
        <div className="square">
            <div className = "overlay" style={{"color" : state === "X" ? "red" : "green"}}> 
            {state}
            </div>
            <button className="square-button" onClick={handleClick}>
                {props.value}
            </button>
        </div >
    );
}; 