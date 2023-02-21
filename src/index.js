import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client'
//import App from './components/App'
import App from './components/App1';

const root = createRoot(document.getElementById('root'))

root.render(
  <Router>
    <App />
  </Router>
)
