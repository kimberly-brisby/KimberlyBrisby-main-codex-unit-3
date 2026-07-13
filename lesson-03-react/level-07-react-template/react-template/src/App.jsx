import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>React Template</h1>
      <p>In order to create  react template you have to first start a vite project. Then you will follow the instrucion in the terminal to select the type of project like react and javascript. Allow the porgram to auto fill the folders and files. Once that is finsied you can start the coding process.</p>
    </main>
  );
}

export default App
