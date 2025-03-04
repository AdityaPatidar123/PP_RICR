import React from 'react'
import { IoIosSearch } from "react-icons/io";
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='flex justify-between items-center p-6 bg-black text-white'>
        
        <div >
            <ul className='flex gap-15 font-bold items-center '>
                <li className='font-bold text-5xl'>Logo</li>
                <li>New</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Sale</li>
            </ul>
        </div>
        <div className='flex gap-10 items-center'>
            <div className='flex border p-3 rounded-2xl gap-1'>
                <div className='text-2xl'><IoIosSearch /></div>
                <div><input type="search" name="" id="" className='border-none focus:outline-none' placeholder='Search' /></div>
            </div>
            <div className='font-semibold text-2xl '><button>Login</button></div>
        </div>
    </div>
    
    
    </>
  )
}

export default Header;