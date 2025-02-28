import React from 'react'
//import { Link } from 'react-scroll';

function Home() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section id="hero" className="flex items-center justify-center  bg-blue-600 text-white text-center">
        <div className="max-w-lg p-8">
          <h1 className="text-5xl font-bold mb-4">Hello, I'm [Your Name]</h1>
          <p className="text-xl mb-6">A passionate web developer & designer</p>
          {/* <Link
            to="about"
            smooth={true}
            duration={500}
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Learn More About Me
          </Link> */}
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6">About Me</h2>
          <p className="text-lg text-gray-700 mb-8">
            I'm a web developer passionate about creating interactive and visually appealing websites. I specialize in
            front-end technologies such as React, HTML, CSS, and Tailwind CSS, but I also enjoy working on full-stack
            applications.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            My goal is to build websites that are not only functional but also deliver a seamless and engaging user
            experience.
          </p>
          {/* <Link
            to="skills"
            smooth={true}
            duration={500}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition duration-300"
          >
            View My Skills
          </Link> */}
        </div>
      </section>

     

      
      </div>
  );
};
  


export default Home;