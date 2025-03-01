import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="bg-blue-600 text-center h-screen pt-50">
      <h2 className="text-4xl font-semibold text-white mb-6">Skills</h2>
      <p className="text-lg text-white max-w-3xl mx-auto">
        I am proficient in various technologies including JavaScript, React, Node.js, and Tailwind CSS. I am continuously learning and improving my skills.
      </p>
      <div className="mt-8 flex justify-center space-x-8">
        <div className="bg-blue-200 text-gray-700 px-6 py-3 rounded-full">Java</div>
        <div className="bg-blue-200 text-gray-700 px-6 py-3 rounded-full">JavaScript</div>
        <div className="bg-blue-200 text-gray-700 px-6 py-3 rounded-full">React</div>
        <div className="bg-blue-200 text-gray-700 px-6 py-3 rounded-full">Tailwind CSS</div>
        <div className="bg-blue-200 text-gray-700 px-6 py-3 rounded-full">Node.js</div>
      </div>
    </section>
  );
};

export default Skills;
