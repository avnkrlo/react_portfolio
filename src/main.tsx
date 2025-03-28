import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.tsx';
import Work from './pages/Work.tsx';
import Project from './pages/Project.tsx';
import About from './pages/About.tsx';
import Booking from './pages/Booking.tsx';

const router = createBrowserRouter([
  {
    path: "/react_portfolio/",
    element: <App/>,
    children: [
      {
        path: "/react_portfolio/",
        element: <Home/>
      },
      {
        path: "/react_portfolio/work",
        element: <Work/>
      },
      {
        path: "/react_portfolio/project",
        element: <Project/>
      },
      {
        path: "/react_portfolio/about",
        element: <About/>
      },
      {
        path: "/react_portfolio/booking",
        element: <Booking/>
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
