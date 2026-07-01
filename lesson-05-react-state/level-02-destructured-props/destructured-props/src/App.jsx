import { useState } from 'react'
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import './App.css'

function App() {
  

  return (
    <>
     <Header title =
     "Destructured Props"/>
     <Main message ="The way to destructure props is by replacing a prop in a parameter in curly braces. "/>
     <Footer closing="Kimberly Brisby"/>
    </>
  );
}

export default App
