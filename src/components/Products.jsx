import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'
function Products() {
const Products = [
    {title:"Arqitel",description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",live:true,case:false,url:"https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm"},
    {title:"Cula",description:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",live:true,case:false,url:"https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4"},
    {title:"TTR",description:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",live:true,case:false,url:"https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm"},
    {title:"Maniv",description:"A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",live:true,case:true,url:"https://cdn.refokus.com/website/Maniv-Compressed.mp4"},
    {title:"YIR 2022",description:"Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",live:true,case:false,url:"https://cdn.refokus.com/website/YIR%20website%202022%204_3_VP9.webm"},
    {title:"Yahoo!",description:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",live:true,case:true,url:"https://cdn.refokus.com/website/2022/videos/summon.webm"},
    {title:"Rainfall",description:"We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",live:true,case:true,url:"https://cdn.refokus.com/website/2022/videos/rainfall.webm    "},
    {title:"Jungle",description:"We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",live:true,case:false,url:"https://cdn.refokus.com/website/jungle-4-3-.webm"},
    {title:"Silvr",description:"We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",live:true,case:false,url:"https://cdn.refokus.com/website/2022/videos/Silvr.webm"},
    {title:"Remind",description:"Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",live:true,case:true,url:"https://cdn.refokus.com/website/2022/videos/remind.webm"},
    {title:"Like Magic",description:"We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",live:true,case:true,url:"https://cdn.refokus.com/website/2022/videos/weglotlikemagic.webm"},
    {title:"YIR 2021",description:"We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",live:true,case:true,url:"https://cdn.refokus.com/website/2022/videos/rocketchat.webm"},
    {title:"Showcase",description:"Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",live:true,case:false,url:"https://cdn.refokus.com/refokus-redesign/showcase_4_3.mp4"},
]
const[pos,setPos]=useState(0);

const mover=(val)=>{
  setPos(val*23);
}
  return (
    <div className='relative mt-32'>
       {Products.map((items,index) => <Product key={index} items={items} index={index} mover={mover}/>)}
       <div className="absolute top-0 pointer-events-none w-full h-full ">
         <motion.div initial={{y:pos,x: "-50%"}} animate={{y:pos+`rem`}} transition={{ease:[0.25, 1, 0.5, 1], duration:.6}} className="window absolute left-1/2 w-[32rem] h-[23rem] overflow-hidden">
          {Products.map((items,index)=>(<motion.div key={index} animate={{y:-pos+`rem`}} transition={{ease:[0.25, 1, 0.5, 1], duration:.4}} className="w-full h-full rounded-xl overflow-hidden"><video src={items.url} autoPlay muted loop ></video></motion.div> ))}
         </motion.div>
       </div>
    </div>
  )
}

export default Products;
