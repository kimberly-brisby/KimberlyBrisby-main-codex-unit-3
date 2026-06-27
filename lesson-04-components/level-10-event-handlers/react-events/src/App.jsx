import { useState } from 'react'
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import './App.css'

function App() {
  

  return (
    <>
     <Header title =
     "React Events"/>
     <Main message ="The way to use props is to add the word props in () after function name as a object. Then you add a function to the app.jsx and call in the corresponding file in {}. "/>
     <Footer closing="Kimberly Brisby"/>
    </>
  );
}

export default App
