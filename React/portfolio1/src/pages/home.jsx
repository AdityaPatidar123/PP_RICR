import React from 'react';
import Photo from '../assets/Photo.jpg'
const Home = () => {
  return (
    <>
    <section id="home" className="bg-blue-600 text-white h-screen flex justify-center items-center text-center">
      <div className="max-w-lg mx-auto">
         <img src={Photo} alt="Image" className='image rounded-full h-100 w-sm ml-15'/>
        <h1 className="text-5xl font-bold mb-4">Hello, I'm Aditya Patidar</h1>
        <p className="text-xl mb-8">A passionate developer specialized in creating dynamic and responsive web applications.</p>
        <a href="#contact" className="bg-yellow-500 text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300">
          Get In Touch
        </a>
      </div>
    </section>
    </>
  );
};

export default Home;
