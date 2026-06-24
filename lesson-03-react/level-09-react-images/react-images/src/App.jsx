import { useState } from 'react'
import archVess from './assets/archVess.jpg'
import peachVess from './assets/peachVess.jpg'
import vessCans from './assets/vessCans.jpg'
import './App.css'

function App() {
  return <main>
    <h1>React Images</h1>
    <p>In order to add images to React you place the image in the assets file that located in the src file in your local folder. Then you import them from the assets file into the app.jsx.</p>
    <div id='img'>
      <img src={archVess}/>
    <img src={peachVess}/>
    <img src={vessCans}/>
    </div>
  </main>;
}

export default App
