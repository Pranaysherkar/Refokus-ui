import React from "react";
import Button from "./Button";

function Product({ items ,index, mover}) {
  return (
    <div className="w-full h-[23rem] py-14  bg-slate-600 ">
      <div onMouseEnter={()=>{mover(index)}} className="max-w-screen-xl mx-auto flex items-center justify-between">
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
  );
}

export default Product;
