import { useState } from "react";

export function Main(){

    const [didMount, setDidMount] = useState(false);
    useState(componentDidMount,[]);
    return(
        <main>
            <form onSubmit={handlesubmit}>
                <label></label>
                <input type="number" name="max"></input>
                <button type="submit">Submit</button>
            </form>
            <output>{data.map(toDetails)}</output>
        </main>
    );

    function toDetails(){
        const details = <details key={key}>
            <summary></summary>
        </details>
    }

    function componentDidMount(){
        setDidMount(true);
        handleData();
    }

     async function handleData(){
        const response = await fetch ("https://potterapi-fedeperin.vercel.app/en/books");
        const result = await response.json();
        const data = result;
        const details = data.map(toCharacters);
        setCharaters(details);
       
    }

   async function handleSubmit(event){
        event.preventDefault();
        const form = event.target;

        const data = {
            max: form.elements.max.value,
        };

        const dataString = new URLSearchParams(data);
        const response = await fetch ("https://potterapi-fedeperin.vercel.app/en/books" + "?" + "dataStirng");
        const result = await response.json();
        const key = index + item.name;
        const [item1,item2] = useHook();
        const details =data.map(toCharacters);
        setCharacters(details);
  
    }
}