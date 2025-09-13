import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "ECOMMERCE PLATFORM",
      description: "FULL-STACK REACT/NODE.JS PLATFORM WITH STRIPE INTEGRATION",
      tech: ["REACT", "NODE.JS", "MONGODB", "STRIPE"],
      color: "bg-yellow-400",
      textColor: "text-black"
    },
    {
      title: "TASK MANAGEMENT APP",
      description: "REAL-TIME COLLABORATION TOOL WITH WEBSOCKET INTEGRATION",
      tech: ["REACT", "SOCKET.IO", "EXPRESS", "POSTGRES"],
      color: "bg-red-500",
      textColor: "text-white"
    },
    {
      title: "DESIGN SYSTEM",
      description: "COMPONENT LIBRARY WITH COMPREHENSIVE DOCUMENTATION",
      tech: ["REACT", "STORYBOOK", "STYLED-COMPONENTS"],
      color: "bg-black",
      textColor: "text-yellow-400"
    },
    {
      title: "API GATEWAY",
      description: "MICROSERVICES ORCHESTRATION WITH RATE LIMITING",
      tech: ["NODE.JS", "REDIS", "DOCKER", "AWS"],
      color: "bg-white",
      textColor: "text-black"
    }
  ];

  return (
    <section id="work" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black text-center mb-16">
          SELECTED <span className="bg-black text-white px-4">WORK</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${project.color} ${project.textColor} p-8 border-8 border-black hover:transform hover:-rotate-1 transition-transform duration-200`}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl md:text-3xl font-black leading-tight">
                  {project.title}
                </h3>
                <div className="flex space-x-2">
                  <button className={`${project.textColor === 'text-black' ? 'bg-black text-white' : 'bg-white text-black'} p-2 border-2 border-current hover:bg-red-500 hover:text-white transition-colors`}>
                    <Github size={20} />
                  </button>
                  <button className={`${project.textColor === 'text-black' ? 'bg-black text-white' : 'bg-white text-black'} p-2 border-2 border-current hover:bg-red-500 hover:text-white transition-colors`}>
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
              
              <p className="text-lg font-bold mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`${project.textColor === 'text-black' ? 'bg-black text-white' : 'bg-white text-black'} px-3 py-1 text-sm font-black border-2 border-current`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-black text-white px-12 py-4 text-xl font-black border-8 border-black hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-colors duration-200">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;