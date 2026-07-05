import { useState } from "react";

export function Main(setUnmount){
    ueseffect(componentDidUnmount,[])
    setUnmount(true);
    
    return (
        <main>
            <p></p>
            <p></p>
            <button onClick={handleClick}>Click to unmount</button>
        </main>
    );

    function handleClick(event){
        event.preventDefault()
    }

    function componentDidUnmount(){
        return (
            alert("The Main compoent has unmounted")
        );
    }
    
}