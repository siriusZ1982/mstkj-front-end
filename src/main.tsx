import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import LoginPage from './routes/login'
import EventNewPage from './routes/event-new'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/mstkj-front-end/">
      <Routes>
        <Route path="/" element={<Link to="/login">登录</Link>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/event/new" element={<EventNewPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
