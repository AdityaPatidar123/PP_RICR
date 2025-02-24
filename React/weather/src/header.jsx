import React from 'react'
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

const Header = () => {
  return (
    <>
     <div className="h-18 bg-gray-400 flex items-center justify-around">
     <MdOutlineWbSunny></MdOutlineWbSunny>
     <span> Weather App</span>
     < FaRegMoon></FaRegMoon>
    </div>
    
    
    </>
  )
}

export default Header