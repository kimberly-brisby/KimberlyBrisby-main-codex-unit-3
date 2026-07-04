export function Main(){
    const results = useState(0);

    const count = results[0];
    const setCount = results[1];

   return(
   
   <main>
     function handleClick(event){
        event.preventDefault()
    }
        <button onClick={handleClick}>Click Counter</button>
        <p>{count}</p>
        <p>Use state returns an array and changes the value.</p>
    </main>
   );
}