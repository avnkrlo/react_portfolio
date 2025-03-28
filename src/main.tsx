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
import NotFound from './pages/NotFound.tsx'

const router = createBrowserRouter([
  {
    path: "/react_portfolio/",
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/react_portfolio/",
        element: <Home/>,
        errorElement: <NotFound/>,
      },
      {
        path: "/react_portfolio/work",
        element: <Work/>,
        errorElement: <NotFound/>,
      },
      {
        path: "/react_portfolio/project",
        element: <Project/>,
        errorElement: <NotFound/>,
      },
      {
        path: "/react_portfolio/about",
        element: <About/>,
        errorElement: <NotFound/>,
      },
      {
        path: "/react_portfolio/booking",
        element: <Booking/>,
        errorElement: <NotFound/>,
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
