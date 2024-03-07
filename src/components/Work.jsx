import React from 'react'

function Work() {
    const imgArray =[
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",top:"65%",left:"50%",isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",top:"70%",left:"46%",isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",top:"52%",left:"52%",isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",top:"74%",left:"49%",isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",top:"68%",left:"53%",isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",top:"63%",left:"48%",isActive:false},
    ]
  return (
    <div className='w-full '>
        <div className="relative max-w-[90%] mx-auto text-center">
           <h1 className='text-[592px] leading-none font-medium select-none'>work</h1>
        <div className="absolute w-full h-full top-0">{
            imgArray.map((items,index)=>(
                items.isActive && <img key={index} className='w-80 absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl' style={{top:items.top, left:items.left}} src={items.url} alt="" />
            ))
        }
        </div>
        </div>
    </div>
  )
}

export default Work