import React from 'react'

export const Projects = () => {
  return (
    <>
    {/* Projects Section */}
      <section id="projects" className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Project 1</h3>
              <p className="text-gray-700 mb-4">A web app built using React, showcasing a beautiful user interface.</p>
              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                View Project
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Project 2</h3>
              <p className="text-gray-700 mb-4">A portfolio website with a minimal design and smooth animations.</p>
              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                View Project
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Project 3</h3>
              <p className="text-gray-700 mb-4">An e-commerce app built with React and Redux for state management.</p>
              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}


export default Projects;