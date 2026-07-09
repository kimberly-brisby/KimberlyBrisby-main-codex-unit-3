import { useEffect, useState } from "react"
import { data } from "../data/data.js";

export function Main(){
    const [didMount, setDidMount] =useState(false);
    const [subjects, setSubjects] = useState([]);
    useEffect(componentDidMount,[]);
    return (
        <main>
            <p>The way to use map to reder data is array is by creating a callback function that begiens with to and describes what is being called.</p>
            <p>{"didMount:" + didMount}</p>
            <section>{ subjects}</section>
        </main>
    );

    function componentDidMount(){
        debugger;
        setDidMount(true);
        const details = data.map(toDetails);
         setSubjects(details);
       
    };

    function toDetails(dataItem){
        const details = (<details>
            <summary>{dataItem.name}</summary>
            {dataItem.description}
        </details>
        );

        return details;
    }

    
}
