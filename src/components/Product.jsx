import React, { useState } from "react";
import Button from "./Button";
import { easeInOut } from "framer-motion";

function Product({ items ,index, mover}) {
  const[hover,isHover]= useState(false);
  return (
    <div className="w-full h-[23rem] py-14 ">
      <div  style={{backgroundImage: hover ? `url(${items.bgimage})` : "none", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', padding:hover && '12px', transition: "background-image 0.3s ease-in, padding 0.3s ease-in, transform 0.6s cubic-bezier(0.76, 0, 0.24, 1)"}} className="w-full">
      <div onMouseEnter={()=>(isHover(true),mover(index))} onMouseLeave={()=>isHover(false)}     
       className={`py-10 max-w-screen-xl mx-auto flex items-center justify-between `}>
        <h1 className="text-5xl font-medium">{items.title}</h1>
        <div className="det w-1/4">
          <p className="text-lg mb-5">{items.description}</p>
       <div className="flex items-center gap-4">
       {items.live &&  <Button title="Live Website" />}
        {items.case &&  <Button title="Case Study" />}
       </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Product;
                                  