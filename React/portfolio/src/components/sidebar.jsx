import React from 'react'
import photo from "../assets/photo.jpg"
import {NavLink} from "react-router-dom"

const Sidebar = () => {
  return (
    <>
    <div className='w-70 h-[90vh] bg-sky-800'>
       

        <img src={photo} alt="Aditya Patidar" className='rounded-full p w-60  px-6 mx-4 py-3 border-b-4 '/>

        <span className='font-bold flex justify-center  text-2xl text-gray-400'> Aditya Patidar
       </span>
       

       <div className="container p-5 flex flex-col items-center">
        <ul>
              <li>
              <NavLink to={"/"}>
              <span className='text-amber-700 font-bold text-2xl'>Home</span>   
              </NavLink>
              </li>
          
              <li>
              <NavLink to={"/exp"}>
              <span className='text-amber-700 font-bold text-2xl'>Experience</span>   
              </NavLink>
              </li>

              <li>
              <NavLink to={"/pro"}>
              <span className='text-amber-700 font-bold text-2xl'>Projects</span>   
              </NavLink>
              </li>
              <li>
              <NavLink to={"/qual"}>
              <span className='text-amber-700 font-bold text-2xl'>Qualification</span>   
              </NavLink></li>

              <li>
              <NavLink to={"/hob"}>
              <span className='text-amber-700 font-bold text-2xl'>Hobbies</span>   
              </NavLink>
              </li>

              <li>
              <NavLink to={"/con"}>
              <span className='text-amber-700 font-bold text-2xl'>Contact Me</span>   
              </NavLink>
              
              </li>
        </ul>
       
         
         
       </div>
    </div>



   








    </>
  )
}

export default Sidebar;