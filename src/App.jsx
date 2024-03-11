import React from 'react';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripes from './components/Stripes';
import Products from './components/Products';
import Marquees from './components/Marquees';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import Cursor from './components/Cursor';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=' w-full bg-[#161618] text-white font-Satoshi-variable cursor-none'>
      <Cursor/>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App