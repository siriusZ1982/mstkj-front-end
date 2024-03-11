import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/mstkj-front-end/">
      <Routes>
      <Route path="/" element={<Link to="/about">Go to About</Link>} />
      <Route path="/about" element={<Link to="/">Back to Home</Link>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
