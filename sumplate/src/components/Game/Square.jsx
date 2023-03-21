import { useEffect, useState } from "react";

export const Square = (props) => {
    const [state, setState] = useState("");
    const [active, setActive] = useState(true);
    const [value, setValue] = useState(props.value);
    function handleClick() {
        if (!active)
            return;
        if (state === "") {
            setState("X");
            props.changeValue(props.index);
        }
        else if (state === "O")
            setState("");
        else if (state === "X") {
            setState("O");
            props.changeValue(props.index);
        }
    }
    useEffect(() => {
        if (props.initState !== "") {
            setActive(false);
            setState(props.initState);
            return
        }
        setActive(true);
        setState("");
        setValue(props.value);
    }, [props.initState])
    return (
        <div className="square">
            <div className="overlay" style={{ "color": state === "X" ? "red" : "green" }}>
                {state}
            </div>
            <button className="square-button" onClick={handleClick}>
                {value}
            </button>
        </div >
    );
}; 