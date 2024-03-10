import { motion } from 'framer-motion'
import React from 'react'

function Marquee({url,direction}) {
  return (
    <div className='flex w-full py-8  gap-20 overflow-hidden'>
      <motion.div initial={{x:direction === 'left' ? "0" : "-100%"}} animate={{x:direction === 'left' ? "-100%" : "0"}} transition={{ease:"linear", duration:80, repeat:Infinity}} className="flex pr-16 flex-shrink-0 gap-36">{url.map((items,index)=> <img key={index} src={items} className='w-32 flex-shrink-0'/>) }</motion.div>
      <motion.div initial={{x:direction === 'left' ? "0" : "-100%"}} animate={{x:direction === 'left' ? "-100%" : "0"}} transition={{ease:"linear", duration:80, repeat:Infinity}} className="flex pr-16 flex-shrink-0 gap-36">{url.map((items,index)=> <img key={index} src={items} className='w-32 flex-shrink-0'/>) }</motion.div>
    </div>
  )
}

export default Marquee