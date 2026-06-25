import { useState } from 'react'
import{ Title } from "./components/Title.jsx";
import { Info } from "./components/Info.jsx";
import globe from "./assets/globe.jpg"
import bird from "./assets/bird.jpg";
import './App.css'

function App() {
  
  return (
    
     <>
      <Title />
      <Info /> 

      <div>
        <img  alt="globe with flower" src={globe}/>
        <img alt= "bird" src={bird} />
      </div>
    </>  
  );
}

export default App
