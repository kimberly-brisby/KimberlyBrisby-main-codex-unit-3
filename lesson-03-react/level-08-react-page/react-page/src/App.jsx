import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (<main>
    <h1>React Page</h1>
    <p>This level is teaching me how to add images to a page by using a react templete.</p>
    <div id="img">
      <img src={reactLogo}/>
    <img src={viteLogo}/>
    <img src={heroImg}/>
    </div>
  </main>);
}

export default App
