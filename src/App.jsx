import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
//1.28.32
function App() {
  return (
    <div className='w-full bg-[#161618] text-white font-[Satoshi]'>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
    </div>
  )
}

export default App