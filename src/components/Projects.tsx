
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "EDUCATIONAL CONSULTANCY WEBSITE",
      description: "FRONTEND PROJECT",
      tech: ["REACT", "TAILWIND", "HTML", "CSS"],
      color: "bg-red-500",
      textColor: "text-white"
    },
    {
      title: "PHISHING SIMULATION FOR EMPLOYEE TRAINING",
      description: "FULL-STACK PROJECT",
      tech: ["REACT", "NODE.JS", "MONGODB", "EXPRESS"],
      color: "bg-yellow-400",
      textColor: "text-black"
    },
    
  ];

  return (
    <section id="work" className="py-20 bg-white px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black text-center mb-16 animate-fade-in-up">
          <span className="inline-block hover:scale-105 transition-transform duration-300">SELECTED</span>{' '}
          <span className="bg-black text-white px-4 inline-block hover:scale-105 transition-transform duration-300 delay-100">WORK</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${project.color} ${project.textColor} p-8 border-8 border-black hover:transform hover:-rotate-1 hover:scale-105 hover:shadow-2xl transition-all duration-500 transform-gpu animate-fade-in-up group`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl md:text-3xl font-black leading-tight group-hover:scale-105 transition-transform duration-300">
                  {project.title}
                </h3>
                <div className="flex space-x-2">
                  <button className={`${project.textColor === 'text-black' ? 'bg-black text-white' : 'bg-white text-black'} p-2 border-2 border-current hover:bg-red-500 hover:text-white hover:scale-110 hover:rotate-12 transition-all duration-300 transform-gpu`}>
                    <Github size={20} />
                  </button>
                  <button className={`${project.textColor === 'text-black' ? 'bg-black text-white' : 'bg-white text-black'} p-2 border-2 border-current hover:bg-red-500 hover:text-white hover:scale-110 hover:rotate-12 transition-all duration-300 transform-gpu`}>
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
              
              <p className="text-lg font-bold mb-6 group-hover:translate-x-2 transition-transform duration-300">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`${project.textColor === 'text-black' ? 'bg-black text-white' : 'bg-white text-black'} px-3 py-1 text-sm font-black border-2 border-current hover:scale-110 hover:rotate-2 transition-all duration-300 transform-gpu`}
                    style={{ animationDelay: `${(index * 200) + (techIndex * 100)}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <button className="bg-black text-white px-12 py-4 text-xl font-black border-8 border-black hover:bg-yellow-400 hover:text-black hover:border-yellow-400 hover:scale-105 hover:shadow-2xl transition-all duration-300 transform-gpu">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;