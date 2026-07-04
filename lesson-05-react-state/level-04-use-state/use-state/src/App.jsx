import { useState, useEffect } from 'react';
import { Header} from "./components/Headrer.jsx";
import { Main } from "./components/Main.jsx";
import { Footer } from "./components/Footer.jsx";
import './App.css'

function App() {
 

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
