import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
function Button({ title = "Start a Project" }) {
const[ishover,setHover]=useState(false);
  return (
    <div className="w-40 h-10 bg-white text-zinc-600 text-base rounded-full overflow-hidden">
      <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className={`flex items-center justify-between px-4 py-2 duration-500 ${ishover ? `-mt-10` : ``}`}>
    {title}
      <BsArrowReturnRight className="text-black text-xs" />
    </div>
    <div className="flex items-center justify-between px-4 py-2 ">
    {title}
      <BsArrowReturnRight className="text-black text-xs" />
    </div>
    </div>
  );
}

export default Button;
