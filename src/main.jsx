import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
