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
                    <input type="password"/>
                </label>
                <button type="submit">secretValue</button>
            </form>
            <output>{secretValue}</output>
        </main>
    );

    function handleSubmit(secretValue){
        event.preventDefault();
        const value = {form.elemnents[secretKey.value]},
        sessionStorage.setItem(secretValue)
    }

}
