import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const message1 = "The way to create react variables is the same as a normal variable. We use let when it is flexible and const when it is a set object. ";
const message2 = "The way to use react variables is to call it and you can do that directly into the HTML using the curly brackets.";

function App() {
  return <main>
    <h1>React Variables</h1>
    <p>{message1}</p>
    <p>{message2}</p>
  </main>;
}

export default App
