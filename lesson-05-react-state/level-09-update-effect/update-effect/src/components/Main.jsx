import { useEffect, useState } from "react"
const [] = useState(0);

export function Main(){
    const [didMount, setDidMount] = useState(false);
    const [didUpdate, setDidUpdate] =useState(false);
    const [message, setMessage] = useState("The Main component hasn't updated.")
    useEffect(componentDidMount,[didMount, message]);
    debugger;
    return(
        <main>
            <p>{"didMount:" + didMount}</p>
            <p>{"didupdate:" + didUpdate}</p>
            <p>{message}</p>
            <p>In oreder to track the update phase </p>
            <button onClick={handleClick}>Click to update</button>

        </main>
    );
    function componentDidMount(){
        if (didMount)
        setDidMount(true);
    }

    function handleClick(event){
        event.preventDefault();
        handleClick.setMessage =("The Main component has updated.");
    }
}