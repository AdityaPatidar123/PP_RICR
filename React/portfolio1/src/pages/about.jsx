import React from 'react';
import Photo from '../assets/Photo.jpg'
const About = () => {
  return (
    <>
    <section id="about" className="bg-blue-600 text-center pt-50 h-screen  scroll-smooth md:scroll-auto">
     <div className='grid justify-center items-center'>
     {/* <img src={Photo}alt="Image" className='rounded-full w-50 h-50 ml-70'/> */}
      <h2 className="text-4xl font-semibold text-white mb-6">About Me</h2>
      <p className="text-lg text-white w-3xl mx-auto">
        I'm a web developer with a passion for building intuitive and responsive websites. I specialize in JavaScript, React, and Tailwind CSS. I love to work on projects that challenge my skills and help me grow as a developer.
      </p>
     </div>
    </section>
    </>
  );
};

export default About;
