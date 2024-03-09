import { motion } from "framer-motion";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
function Card({ width, start, para, hover=false }) {
  const[val,setVal]= useState(false);
  return (
    <motion.div onMouseEnter={()=>(setVal(true))} onMouseLeave={()=>(setVal(false))} transition={{ease:[0.25, 1, 0.5, 1], duration:.6}} whileHover={{backgroundColor: hover ? "#7443FF" : "#3E3E46"}} className={`${width} h-[60vh] bg-zinc-800 p-5 rounded-xl  flex flex-col justify-between`}>

      <div className={`w-full px-${val && `4`} duration-500`}>
        <div className="w-full flex items-center justify-between ">
          <h3 className="text-sm">{hover ? "Get in Touch" : "Up Next: News"}</h3>
          < IoIosArrowRoundForward className="text-2xl" />
        </div>
        <h1 className={`${hover ? `min-w-1/3` : `min-w-2/3`} text-3xl font-medium mt-5`}>{hover ? "Let's get to it, together." : "Insight and behind the scenes"}</h1>
      </div>

      <div className="">
        {start && (
          <>
            <h1 className="text-[110px] font-medium">Start a Porject</h1>
            <button type="button" className="border py-2 px-5 font-medium rounded-full text-xl my-3">Contact us</button>
          </>
        )}
        {para && <p className="mt-32">Explore what drives our team.</p>}
      </div>
    </motion.div>
  );
}

export default Card;
