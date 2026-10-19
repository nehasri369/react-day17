import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './Components/NotFound'
import "./App.css"
const App = () => {

  let Router = createBrowserRouter([
    {
      path:"/",
      element:<div>
        <Navbar />
        <Home/>
        </div>
    },

    {
      path:"/about",
      element:<div>
        <Navbar />
        <About/>
        </div>
    },

    {
      path:"/contact",
      element:<div>
        <Navbar />
        <Contact/>
        </div>
    },

    {
      path:"*",
      element:<NotFound />
    }

  ])
  return (
    <div>
      
      <RouterProvider router={Router} />

    </div>
  )
}

export default App