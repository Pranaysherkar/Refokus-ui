import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
function Button({title="Start a Project"}) {
  return (
    <button className='w-40 bg-white text-zinc-600 text-base px-4 py-2 rounded-full flex items-center justify-between '>{title}<BsArrowReturnRight className='text-black text-xs' /></button>
  )
}

export default Button