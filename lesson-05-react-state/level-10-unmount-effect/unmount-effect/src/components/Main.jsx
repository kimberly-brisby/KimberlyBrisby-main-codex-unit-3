import { useState, useEffect } from "react";

export function Main(){
    const [unmount, setUnmount] = useState(false);
    useEffect(componentDidUnmount, []);
    
  
    return (
        <main>            
            <p>The unmount phase  does not unmount itself it must unmount by a parent component, when I function is returned.</p>
            <button onClick={handleClick}>Click to unmount</button>
        </main>
    );

    function componentDidUnmount(){
       
    }

    function handleClick(event){   
        event.preventDefault();
        setUnmount(true);
        alert("The Main component has unmounted.")

    }

    
}