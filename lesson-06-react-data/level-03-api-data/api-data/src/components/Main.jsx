import { useEffect, useState } from "react";

export function Main(){
    
    const [characters, setCharaters] = useState();
    const [didMount, setDidMoount] = useState(false);
    useEffect(componentDidMount,[]);
    return (
        <main>
            <p>To use map in order to render data from an API you have to fetch information from the API by by using a callback function that begins with to and describes what is being called forward. </p>
            <section>{characters}</section>
            <p>{"didMount:" + didMount}</p>
        </main>
    );

    function componentDidMount(){
       
        setDidMoount(true);
        handleData();
    }

    async function handleData(){
        const response = await fetch ("https://potterapi-fedeperin.vercel.app/en/characters");
        const result = await response.json();
        const data = result;
        const details = data.map(toCharacters);
        setCharaters(details);
       
    }

   
}

 function toCharacters(dataItem){
        
        const details = ( <details>
            <summary>{dataItem.fullName}</summary>
            <figure>
                <img src={dataItem.image} />
                <figcaption>{dataItem.interpretedBy}</figcaption>
            </figure>
        </details>
        );
        
        return details;
    }
    
