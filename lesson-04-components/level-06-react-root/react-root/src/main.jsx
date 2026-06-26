import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// createRoot(document.getElementById('root'))(
  const divTag = document.getElementById("root");
  const root = createRoot(divTag);
  root.render(
    <main>
      <h1>React Root</h1>
      <p>React root is like a bridge between the HTML and the root elemnet.</p>
    </main>
  );
  <StrictMode>
    <App />
  </StrictMode>
// )
