import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log("Vite: main.jsx loaded");
window.onerror = (msg, url, line) => {
  console.error("Vite: Global Error caught", { msg, url, line });
  document.body.innerHTML += `<div style="color: red; position: fixed; top: 0; background: white; z-index: 9999; padding: 1rem;">JS Error: ${msg} at line ${line}</div>`;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
