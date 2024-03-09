import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
function Card({ width, start, para, hover, bg }) {
  return (
    <div className={`${width} h-[60vh] bg-zinc-800 p-5 rounded-xl  flex flex-col justify-between ${bg} duration-150 `}>

      <div className={`w-full ${hover}`}>
        <div className="w-full flex items-center justify-between ">
          <h3 className="text-sm">one heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">Lorem, ipsum dolor.</h1>
      </div>

      <div className="">
        {start && (
          <>
            <h1 className="text-[110px] font-medium">Start a Porject</h1>
            <button type="button" className="border py-2 px-5 font-medium rounded-full text-xl my-3">Contact us</button>
          </>
        )}
        {para && <p className="mt-32">Lorem ipsum dolor sit amet consectetur.</p>}
      </div>
    </div>
  );
}

export default Card;
