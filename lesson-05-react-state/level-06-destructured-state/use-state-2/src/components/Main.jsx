import {useState}from "react";

export function Main(){
    const[count, setCount] = useState(0);
    debugger

    return(
        <main>
            <button onClick={handleClick}>Click counter</button>
            <p>{count}</p>
            <p>The useStae is a function that return an array value and store the value of a function.</p>
        </main>
    );
    function handleClick(event){
        event. preventDefault()
        setCount(count + 1);
    };

}