export function Main(props) {
    
    return (
        // <main>
        //     <p>{ props.message }</p>
        // </main>,
      <button onClick={handleClick}>Click Event</button>  
    );
}



function handleClick(event){
    debugger
    event.preventDefault()
    console.log("To use the click event in reaction you add a button tag then you create a function named handleClick for the event.");    
}

