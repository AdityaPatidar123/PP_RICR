import React from 'react'
import { IoIosSearch } from "react-icons/io";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className=' flex justify-between items-center p-6 bg-black text-white '>
        
        <div >
            <ul className='flex gap-15 font-bold items-center '>
                <li className='font-bold text-5xl'><Link to="/" className="hover:text-gray-400">Logo</Link></li>
                <li><Link to="/new" className="hover:text-gray-400">New</Link></li>
                <li><Link to="/men" className="hover:text-gray-400">Men</Link></li>
                <li><Link to="/women" className="hover:text-gray-400">Women</Link></li>
                <li><Link to="/sale" className="hover:text-gray-400">Sale</Link></li>
                <li><Link to="/kids" className="hover:text-gray-400">Kids</Link></li>
            </ul>
        </div>
        <div className='flex gap-10 items-center'>
            <div className='flex border p-3 rounded-2xl gap-1'>
                <div className='text-2xl'><IoIosSearch /></div>
                <div><input type="search" name="" id="" className='border-none focus:outline-none' placeholder='Search' /></div>
            </div>
            <div className='font-semibold text-2xl '><button><Link to="/login" className="hover:text-gray-400">Login</Link></button></div>
        </div>
    </div>
    
    
    </>
  )
}

export default Header;