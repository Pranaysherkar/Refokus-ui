import React, { useState } from 'react'
import { motion,useMotionValueEvent,useScroll } from "framer-motion"
function Work() {
    const[images,setIMages]=useState([
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",top:"65%",left:"50%",isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",top:"70%",left:"46%",isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",top:"52%",left:"52%",isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",top:"74%",left:"49%",isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",top:"68%",left:"53%",isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",top:"63%",left:"48%",isActive:false},
    ]);

  const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
     showImages(Math.floor(latest*100))
    })
const showImages=(key)=>{

    const img=(arr)=>{
     setIMages(prev=>(
        prev.map((items,index)=>(
            arr.indexOf(index) === -1 ?{...items,isActive:false}:{...items,isActive:true}
        ))
     ))
    }

    switch (key) {
       case 0:img([]);
           break;
       case 1:img([0]);
           break;
       case 2:img([0,1]);
           break;
       case 3:img([0,1,2]);
           break;
       case 4:img([0,1,2,3]);
           break;
       case 5:img([0,1,2,3,4]);
           break;
       case 6:img([0,1,2,3,4,5]);
           break; 
}
}
  return (
    <div className='w-full '>
        <div className="relative max-w-[90%] mx-auto text-center">
           <h1 className='text-[592px] leading-none select-none font-semibold'>work</h1>
        <div className="absolute w-full h-full top-0">
            {images.map((items,index)=>(items.isActive && <img key={index} className='w-80 absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl' style={{top:items.top, left:items.left}} src={items.url} alt="" />
            ))
        }
        </div>
        </div>
    </div>
  )
}

export default Work