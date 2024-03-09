import React, { useEffect, useState } from 'react'

function Cursor() {
    const [cursor, setCursor] = useState({x:0,y:0});
    useEffect(()=>{
        const mousePosition = (e)=>{
            setCursor({x: e.clientX,y:e.clientY});
        };
        window.addEventListener('mousemove', mousePosition);

        return ()=>{
            window.removeEventListener('mousemove',mousePosition);
        };
    },[]);

  return (
    <div className="fixed w-6 h-6 bg-white rounded-full z-10" style={{top:`${cursor.y}px`, left:`${cursor.x}px`,transition:`transform 1s cubic-bezier(0.32, 0, 0.67, 0)`, mixBlendMode:`difference` }}></div>
  )
}

export default Cursor;