import {useState} from "react";
import {Calculator as Calc} from 'shared'

export function Calculator() {
    let calculator = new Calc();
    const [input1, setInput1] = useState<number>(0);
    const [input2, setInput2] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    const onClick = () => {
        setResult(calculator.add(input1, input2))
    }

    return (
        <div>
            <input value={input1} onChange={e => {
                if (isValidInt(e.target.value)) setInput1(parseInt(e.target.value))
            }}></input>
            <input value={input2} onChange={e => {
                if (isValidInt(e.target.value)) setInput2(parseInt(e.target.value))
            }}></input>
            <button onClick={onClick}>Add</button>
            <p>Result: {result}</p>
        </div>
    );
}

function isValidInt(str: string): boolean {
    const num = parseInt(str, 10);
    return !isNaN(num) && Number.isInteger(num) && str.trim() !== '';
}