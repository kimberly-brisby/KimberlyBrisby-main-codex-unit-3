import { useState } from "react";

export function Main(){

    
    
    return(
        <main>
            <form onSubmit={handleSubmit}>
                <label></label>
                <input type="number" id="max" name="max" required></input>
                <button type="submit">Submit</button>
            </form>
            <output>{data.map(toDetails)}</output>
        </main>
    );

    function toDetails(item,index){
        const key = index;

        const details = <details key={key}>
            <summary>{item.title}</summary>
            <img src={item.cover} alt={item.title} />
            <p>{item.description}</p>
        </details>
    }

    return details;



    //  async function handleData(){
    //     const response = await fetch ("https://potterapi-fedeperin.vercel.app/en/books");
    //     const result = await response.json();
    //     const data = result;
    //     const details = data.map(toCharacters);
    //     setCharaters(details);
       
    // }

   
}