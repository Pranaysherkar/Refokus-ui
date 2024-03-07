import React from 'react'

function Marquee({url}) {
  return (
    <div className='flex w-full py-8 gap-20 overflow-hidden'>
       {url.map((items,index)=> <img src={items} className='w-32 flex-shrink-0'/>) }
       {url.map((items,index)=> <img src={items} className='w-32 flex-shrink-0'/>) }
    </div>
  )
}

export default Marquee