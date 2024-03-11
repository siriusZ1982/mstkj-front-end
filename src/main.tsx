import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
// import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Link to="/about">Go to About</Link></div>,
  },
  {
    path: "/about",
    element: <div><Link to="/">Back to Home</Link></div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
