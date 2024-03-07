import React from "react";
import Button from "./Button";
function Navbar() {
  return (
    <div className=" max-w-[90%] mx-20 h-24 py-6 border-b border-slate-600 flex items-center justify-between">
      <div className="left-nav w-1/2 flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="Refokus"
          className="w-20"
        />
        <div className="flex justify-around w-2/3 ml-20">
          {["home", "work", "careers", "news"].map((items, index)=>(
            <a key={index} href="#" className={`relative capitalize text-sm ${index === 3 ? `before:absolute before:content-[''] before:bg-slate-600 before:inline-block before:h-5 before:w-[.5px] before:top-0 before:right-14`: ""}`}>
              {index === 1 && (<span className="inline-block h-[5px] w-[5px] bg-[#00FF19] rounded-full mb-1 mr-1"></span>)}
              {items}
            </a>
          ))}
        </div>
      </div>
      <Button />
    </div>
  );
}
``;
export default Navbar;
