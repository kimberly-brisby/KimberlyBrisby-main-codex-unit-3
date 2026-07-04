import { useState } from "react";

export function Main(){
    const [count, setCount] = useState(0);
    debugger
    
   return(
   <main> 
        <button onClick={handleClick}>Click Counter</button>
        <p>{count}</p>
        <p>Use state returns an array and changes the value.</p>
    </main>
   );
   function handleClick(event){
        event.preventDefault()
        setCount(count + 1);
    };
}