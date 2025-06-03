import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/Landing.tsx'
import Home from './pages/Home.tsx';
import Work from './pages/Work.tsx';
import Project from './pages/Project.tsx';
import About from './pages/About.tsx';
import Booking from './pages/Booking.tsx';
import Contact from './pages/Contact.tsx';
import NotFound from './pages/NotFound.tsx'

const router = createBrowserRouter([
  {
    path: "/react_portfolio/",
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Landing/>,
      },
      {
        path: "/react_portfolio/home",
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
      {
        path: "/react_portfolio/contact",
        element: <Contact/>,
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
