import { useEffect, useState } from "react";

export function Main(){
    const [didMount, setDidMount] = useState(false)
    useEffect(componentDidMount,[]);
    debugger;
    return(
        <main>
            <p>{"didMount: " + didMount}</p>
            <p>The useEffect is a function that takes a function and list of variables, it then calls back those variables that change.</p>
        </main>
    );
    function componentDidMount(){
       setDidMount(true);
       debugger;
    }
}