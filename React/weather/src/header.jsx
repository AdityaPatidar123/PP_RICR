import React from 'react'
import { FaRegMoon } from "react-icons/fa";

const Header = () => {
  return (
    <>
     <div className='h-18 bg-gray-500 flex items-center'>
     < FaRegMoon></FaRegMoon>
     <span> Weather App</span>
    </div>
    
    
    </>
  )
}

export default Header