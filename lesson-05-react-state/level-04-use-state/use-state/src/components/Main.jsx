import { useState } from "react";

export function Main(){
    const results = useState(0);
    debugger
    const count = results[0];
    const setCount = results[1];

   return(
   
   <main>
     
        <button onClick={handleClick}>Click Counter</button>
        <p>{count}</p>
        <p>Use state returns an array and changes the value.</p>
    </main>
   );
   function handleClick(event){
        event.preventDefault()
        useState = count + 1;
    };
}