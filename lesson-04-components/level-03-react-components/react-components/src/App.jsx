import { useState } from 'react'
import{ Title } from "./components/Title.jsx";
import { Info } from "./components/Info.jsx";
import globe from `./assets/globe.jpg`;
import bird from `./assets/bird.jpg`;
import './App.css'

function App() {
  
  return (
     <Main>
      <Title />
      <Info />
      <div id='img'>
        <img src={globe}/>
        <img src={bird}/>
      </div>
     </Main>
      
    
  );
}

export default App
