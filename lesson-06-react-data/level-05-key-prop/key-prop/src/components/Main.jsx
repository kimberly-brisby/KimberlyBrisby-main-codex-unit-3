import { useState, useEffect } from "react";

export function Main(){
    debugger;
        const [values, setValues] = useState();
        const [didMount, setDidMount] = useState(false);
        useEffect(componentDidMount,[]);

    return (
        <main>
            <p>The key prop/atribute is a specific ID that keeps track of each element in a React. </p>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name</label>
                <input type="text" name="fullName"></input>
              </div>

              <div>
                <label>Number</label>
                <input type="text" name="number"></input>
              </div>

              <div>
                <label>Animal</label>
                <input type="text" name="animal"></input>
              </div>

              <div>
                <label>Place</label>
                <input type="text" name="place"></input>
              </div>

              <div>
                <label>Color</label>
                <input type="text" name="color"></input>
              </div>
              <button type="submit">Submit</button>
            </form>
            <output>{values}</output>
            
        </main>
    );

    function componentDidMount(){
        setDidMount(true);
        
    }
    function handleSubmit(event){
        debugger;
        event.preventDefault();
        const form = event.target;
        const formInputs = [
            {label: name, value: form.elements.name.value},
            {label: number, value: form.elements.name.value},
            {label: animal, value: form.elements.animal.value},
            {label: place, value: form.elements.place.value},
            {label:color, value: form.elements.color.value}
        ];
        const details = formInputs.map(toDetails);
        setValues(details);


    }

    function toDetails(formInput){
        debugger;
        const key = index + formInput.label;
    
        const details = <details key={key}>
            <summary>{formInput.type}</summary>

        </details>
        
    }

    return details;
}