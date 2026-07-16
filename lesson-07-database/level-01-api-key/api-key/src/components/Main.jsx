import { useEffect, useState } from "react";

export function Main(){
    const [didMount, setDidMount] = useState(false);
    const [apiKey, setApiKey] = useState(false);
    useEffect(componentDidMount,[]);
    return(
        <main>
           <form onSubmit={handleSubmit}>
            <label>
                API Key
                <input type="password" name="apiKey"></input>
            </label>
             <button type="submit">Sumbit</button> 
            </form>
            <output>{apiKey}</output>
        </main>
    );

    function componentDidMount(){
        setDidMount(true);
        const key = sessionStorage.getItem("apiKey");
    }

    function handleSubmit(event){
        event.preventDefault();
        const form = event.target;
        debugger;
        const value = form.elements.apiKey.value;
        sessionStorage.setItem("apiKey",value);
        setApiKey(value);
    }
}