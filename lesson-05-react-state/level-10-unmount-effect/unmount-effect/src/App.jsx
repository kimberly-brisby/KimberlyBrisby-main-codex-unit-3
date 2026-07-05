import { useState } from 'react'
import {Header} from "./components/Header.jsx";
import {Main} from "./components/Main.jsx";
import {Footer} from "./components/Footer.jsx";
import './App.css'

function App() {
 const [unmount, setUnmount] = useState(false);
 let mainComponent = <Main setUnmount ={setUnmount}/>
 if(unMount){
  mainComponent = <></>
 }

  return (
    <>
      <Header />
      {mainComponent} 
      <Footer />
    </>
  );
}

export default App
