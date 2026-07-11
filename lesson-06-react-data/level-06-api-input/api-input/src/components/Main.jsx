import { useEffect, useState } from "react";

export function Main(){
    
    const [characters, setCharaters] = useState();
    const [didMount, setDidMoount] = useState(false);
    useEffect(componentDidMount,[]);
    return (
        <main>
            <form onSubmit={handleSubmit}>
                <label>
                    Max Characters
                    <input type="number" name="max"></input>
                </label>
                <button type="submit">Submit</button>
            </form>
            <section>{characters}</section>
            <p>{"didMount:" + didMount}</p>
            <p>The way to accept user input and include API request and how it renders the results is by accepting the URL of the API and calls back the object information to be pushed through query parameters that are used. The data object should also have keys and values that are able to run the API. </p>
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

    async function handleSubmit(event){
        debugger;
        event.preventDeafult();
        const form = event.target;
        const data = {
            max: form.elements.max.value,
        };
        const dataString = new URLSearchParams(data);
        const response = await fetch ("https://potterapi-fedeperin.vercel.app/en/characters" + "dataStirng");
        const result = await response.json();
        const details =data.map(toCharacters);
        setCharacters(details);

    }

   
}

 function toCharacters(dataItem, index){
        const key = index + dataItem.fullName;
        const details = ( 
            <details key={key}>
            <summary>{dataItem.fullName}</summary>
            <figure>
                <img src={dataItem.image} />
                <figcaption>{dataItem.interpretedBy}</figcaption>
            </figure>
        </details>
        );
        
        return details;
    }
    
