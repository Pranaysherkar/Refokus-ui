import React from 'react'
import { BsTypeH3 } from 'react-icons/bs'

function Footer() {
  return (
    <div className='w-full'>
        <div className="max-w-screen-xl mx-auto py-8 gap-36 flex">
            <div className="basis-1/2">
            <h1 className='text-[180px] leading-none tracking-tighter font-medium'>refokus.</h1>
            </div>
            <div className="basis-1/2 flex gap-20">
                <div className="basis-1/3 capitalize">
                    <h4 className='mb-10  text-zinc-300'>Socials</h4>
                    {["instagram","twitter (x?)","facebook"].map((items,index)=><a key={index} className='block mt-2  text-slate-400'>{items}</a>)}
                </div>
                <div className="basis-1/3">
                    <h4 className='mb-10  text-zinc-300'>Sitemap</h4>
                    {["home","work","careers","contact"].map((items,index)=><a key={index} className='block mt-2  text-slate-400'>{items}</a>)}
                </div>
                <div className="basis-1/3">
                 <p className='mb-8 text-slate-400'>Refokus is pioneering digital agency driven by design and empowered by technology.</p>
                 <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="Refokus" className='w-32'/>
                </div>
            </div>
        </div>
        <div className="max-w-screen-xl mx-auto py-1 flex gap-10 ">
            {["Privacy Policy","cookie Policy","Impressum","Terms"].map((items,index)=>(<h3 key={index} className='capitalize tracking-wide text-zinc-500'>{items}</h3>))}
            <h3 className='ml-32 text-zinc-400'>pranaysherkar19@gmail.com</h3>
        </div>
    </div>
  )
}

export default Footer