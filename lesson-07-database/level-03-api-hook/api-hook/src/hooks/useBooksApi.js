import { useState } from "react";

export function useBooksApi(){
   const [data, setData] = useState();
   
   async function handleSubmit(event){
        event.preventDefault();
        const form = event.target;

        const formData = {
            max: form.elements.max.value,
        };

        const dataString = new URLSearchParams(data);
        const response = await fetch ("https://potterapi-fedeperin.vercel.app/en/books" + "?" + "dataStirng");
        const result = await response.json();
        setData(result);
        
    }

    return [data, handleSubmit];
}