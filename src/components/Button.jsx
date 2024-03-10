import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
function Button({ title = "Start a Project" }) {
const[ishover,setHover]=useState(false);
  return (
    <button onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="w-40 h-10 bg-white text-zinc-600 text-base rounded-full overflow-hidden">
      <motion.div whileHover={{marginTop:"-40px"}} className="flex items-center justify-between px-4 py-2">
    {title}
      <BsArrowReturnRight className="text-black text-xs" />
    </motion.div>
    <motion.div className="flex items-center justify-between px-4 py-2 ">
    {title}
      <BsArrowReturnRight className="text-black text-xs" />
    </motion.div>
    </button>
  );
}

export default Button;
