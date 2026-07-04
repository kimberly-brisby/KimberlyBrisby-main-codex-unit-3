export function Main() {
   
    let count = 0;
    return(
       
        <main>
           
            <button onClick={handleClick}>Click Counter</button>
            <p>{count}</p>
            <p>A stateless variables doesnot hold value and is reset every time function is called.</p>
        </main>
    );
  function handleClick(event){
            event.preventDefault()
            debugger
            count = count + 1;
        };
}