import React from 'react'
import Card from './Card'
function Cards() {
  return (
    <div className='w-full'>
      <div className="max-w-screen-xl mx-auto py-20 flex gap-1">
       <Card width={"basis-1/3"} start={false} para={true} hover={"hover:px-5"} bg={"hover:bg-zinc-700"} />
       <Card width={"basis-2/3"} start={true} para={false} hover={"hover:px-5"} bg={"hover:bg-violet-800"}/>
      </div>
    </div>
  )
}

export default Cards