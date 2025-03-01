import React from 'react';

const Projects = () => {
  return (
    <>
    <section id="projects" className="bg-blue-600 text-center h-screen pt-50">
      <h2 className="text-4xl font-semibold text-white mb-6">Projects</h2>
      <p className="text-lg text-white mb-8">Here are some of my recent projects:</p>
      <div className="flex justify-center space-x-8">
        <div className="bg-blue-200 p-6 rounded-lg w-64">
          <h3 className="text-xl font-semibold text-blue-600">Project 1</h3>
          <p className="text-gray-700 mt-4">A web application built using React and Tailwind CSS.</p>
        </div>
        <div className="bg-blue-200 p-6 rounded-lg w-64">
          <h3 className="text-xl font-semibold text-blue-600">Project 2</h3>
          <p className="text-gray-700 mt-4">A full-stack application with Node.js and MongoDB.</p>
        </div>
        <div className="bg-blue-200 p-6 rounded-lg w-64">
          <h3 className="text-xl font-semibold text-blue-600">Project 3</h3>
          <p className="text-gray-700 mt-4">A mobile-first design using Tailwind CSS.</p>
        </div>
      </div>
    </section>
    </>
  );
};

export default Projects;
