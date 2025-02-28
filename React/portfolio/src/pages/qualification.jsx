import React from 'react'

export const Qualification = () => {
  return (
    <>
     <section id="skills" className="py-20 bg-gray-200 text-center">
     <div className="max-w-4xl mx-auto">
       <h2 className="text-4xl font-semibold mb-6">My Skills</h2>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
         <div className="bg-white p-6 rounded-lg shadow-md">
           <h3 className="text-xl font-semibold mb-3">JavaScript</h3>
           <p className="text-gray-700">Expert in vanilla JavaScript and modern frameworks like React and Node.js.</p>
         </div>
         <div className="bg-white p-6 rounded-lg shadow-md">
           <h3 className="text-xl font-semibold mb-3">React</h3>
           <p className="text-gray-700">Building modern and scalable user interfaces with React and Hooks.</p>
         </div>
         <div className="bg-white p-6 rounded-lg shadow-md">
           <h3 className="text-xl font-semibold mb-3">Tailwind CSS</h3>
           <p className="text-gray-700">Utilizing Tailwind CSS to create responsive, customizable, and fast UI.</p>
         </div>
         <div className="bg-white p-6 rounded-lg shadow-md">
           <h3 className="text-xl font-semibold mb-3">Git & GitHub</h3>
           <p className="text-gray-700">Proficient in version control using Git and collaborating on GitHub.</p>
         </div>
       </div>
     </div>
   </section>
   </>
  )
}



export default Qualification;