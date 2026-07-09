import { useEffect, useState } from "react";
import { data } from "../data/data.js";


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
        debugger;
        setDidMount(true);
        const figures = [images];
        
        for(let index = 0; index < data.length; index++ ){
            const item = data[index];
            const figures = <figure>
                <img>{dataItem.src}</img>
                <figcaption>{dataItem.caption}</figcaption>
            </figure>
            
            figures.push(figures);
        }

        setImages(figures);
        
    }
}