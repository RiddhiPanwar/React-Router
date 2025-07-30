import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import App from './App.jsx'

import Contact from './components/Contact Us/Contact.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import User from './components/User/User.jsx'
// import Github from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element : <Layout />,
    children: [
      {
        path: "",
        element : <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "User/:userid",
        element: <User />
      },
      //  {
      //   path: "github",
      //   element: <Github />
      // }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
