import { useEffect, useState } from "react";

export function Main(){
    const [secretValue, sessionStorage] = useState(false);
    useEffect(componentDidMount, [secretKey]);
    return [secretValue, handleSubmit]
    useSecret(secretKey);
    return(
        <main>
            <form>
                <label onSubmit={handleSubmit}>
                    Hook Return Values 
                    <input type="password" name="mySecretInput" id="mySecrectInput" >
                </label>
                <button type="submit">Submit</button>
            </form>
            <output>{secretValue}</output>
        </main>
    );

}

 function useSecret(secretKey){
        debugger;
        const [secretValue, setSecretValue] = useState(false);
        const savedValue = sessionStorage.setItem(secretKey);
        if(savedValue){
            setSecretValue(savedValue);
        }
    }

function handleSubmit(secretValue){
    debugger;
        event.preventDefault();
        const form = event.target;
        const value = form.elemnents[ secretKey ].value;
        sessionStorage.setItem(secretValue, value);
        setSecretValue(value);
    }

    
