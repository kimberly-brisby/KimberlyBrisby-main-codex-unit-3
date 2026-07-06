import { useEffect, useState } from "react";
import { data } from "./data/data.js";
export function Main(){
    const [didMount, setDidMount] = useState(false);
    const [images, setImages] = useState([]);

    useEffect(componentDidMount,[]);
    return(
        <main>
            <p>{"didMount:" + didMount}</p>
            <section>{images}</section>
            <p>In order render data array with HTML they are retrived from the componentDidMount, then in strictmode the data is forced to mount and unmount, and this aloows useEffect to callback the function.</p>
        </main>
    );
    function componentDidMount(){
        setDidMount(true);
        const figures =[];
        figures.push(figures);
        for(let i = 0; i < data.length; i++ ){
            const figure = <figure>
                <img>{src="data"}</img>
                <figcaption>{caption="data"}</figcaption>
            </figure>
            setImages(figures);
        };
        
    };
}