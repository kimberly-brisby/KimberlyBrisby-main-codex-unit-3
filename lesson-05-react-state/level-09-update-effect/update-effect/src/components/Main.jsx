import { useEffect, useState } from "react"


export function Main(){
    const [didMount, setDidMount] = useState(false);
    const [didUpdate, setDidUpdate] =useState(false);
    const [message, setMessage] = useState("The Main component hasn't updated.")
    useEffect(componentDidMount, []);
    useEffect(componentDidUpdate,[didMount, message]);
    debugger;
    return(
        <main>
            <p>{"didMount:" + didMount}</p>
            <p>{"didupdate:" + didUpdate}</p>
            <p>{message}</p>
            <p>In order to track the update phase </p>
            <button onClick={handleClick}>Click to update</button>

        </main>
    );
    function componentDidMount(){
        if (didMount)
        setDidMount(true);
        
    }

    function componentDidUpdate(){
        if(didMount)
        setDidUpdate(true);

    }

   
    function handleClick(event){
        event.preventDefault();
        setMessage("The Main component has updated.");
    }
}