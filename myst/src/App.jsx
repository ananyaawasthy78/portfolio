import { useState } from 'react'
import Home from './components/home/home'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Contactus from './components/contact/contactus'

import { Outlet } from 'react-router-dom'



function App() {

  return (
     <>
    <Header/>
    <Outlet/>
    <Footer/>
   </>
     )    
      
            
              
   
 
}

export default App
