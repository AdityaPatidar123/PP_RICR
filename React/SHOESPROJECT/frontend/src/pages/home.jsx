import React from 'react'
import shoe1 from "../assets/shoe1.avif"

const Home = () => {
  return (
    <>
      <div 
        className="h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${shoe1})` }}
      >
       Aditya Patidar 
      </div>
    </>
  )
}

export default Home;
