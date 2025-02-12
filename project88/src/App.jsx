import React from 'react'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  return (
    <>
    
    <div>
      <Navbar/>
      </div>
      <div>
      <Home/>
      </div>
      <div>
      <Cards/>  
  
    </div>
    </>
  )
}

export default App