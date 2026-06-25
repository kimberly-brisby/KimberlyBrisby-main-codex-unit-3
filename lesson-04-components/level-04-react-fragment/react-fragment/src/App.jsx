import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header><h1>React Fragment</h1></header>
      <main><p>React fragments return 1 Html but can be housed in an empty react fragment tag. </p></main>
      <footer>Kimberly Brisby</footer>
    </>
  )
}

export default App
