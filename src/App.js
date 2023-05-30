import React from 'react'
import Navbar from './Components/navbar'
import Home from './Components/home'
import Footer from './Components/footer'

const App = () => {
  return (
    <div className='bg-light h-100vh'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App