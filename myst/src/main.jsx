import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import About from './components/about/about.jsx'
import Contact from './components/contact/contactus.jsx'
import Github from './components/github/github.jsx'
import User from './components/user/user.jsx'
import  {getinfo}  from './components/github/github.jsx'

import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./components/home/home.jsx"
const router= createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[{
    path:'',
    element: <Home/>
  },{
    path:'about',
    element: <About/>
  },

  {
    path:'contact',
    element: <Contact/>
  },
 
  
  {
    path:'user/:userid',    element: <User/>
  },
  {
    loader: getinfo,
    path:'github', element: <Github/>

  }
  
  
]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router}/>
  </StrictMode>,
)
