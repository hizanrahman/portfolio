import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "FRONTEND",
      skills: [
        { name: "REACT", level: 80 },
        { name: "TYPESCRIPT", level: 80 },
        { name: "TAILWIND", level: 75 },
        { name: "NEXT.JS", level: 85 }
      ],
      color: "bg-yellow-400"
    },
    {
      title: "BACKEND",
      skills: [
        { name: "NODE.JS", level: 90 },
        { name: "EXPRESS", level: 85 },
        { name: "MONGODB", level: 80 },
      ],
      color: "bg-red-500"
    },
    {
      title: "TOOLS",
      skills: [
        { name: "GIT", level: 85 },
        { name: "DOCKER", level: 70 },
        { name: "AWS", level: 65 },
        { name: "FIGMA", level: 70 }
      ],
      color: "bg-black"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black text-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black text-center mb-16">
          <span className="bg-white text-black px-4">SKILLS</span> & TOOLS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.color} ${category.color === 'bg-black' ? 'text-yellow-400' : 'text-black'} p-8 border-8 border-white`}
            >
              <h3 className="text-3xl font-black mb-8 text-center">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-black text-lg">{skill.name}</span>
                      <span className="font-black text-lg">{skill.level}%</span>
                    </div>
                    <div className={`w-full h-4 ${category.color === 'bg-black' ? 'bg-yellow-400' : 'bg-black'} border-2 ${category.color === 'bg-black' ? 'border-yellow-400' : 'border-black'}`}>
                      <div
                        className={`h-full ${category.color === 'bg-black' ? 'bg-black' : 'bg-white'} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-yellow-400 text-black p-8 border-8 border-white">
            <h3 className="text-2xl font-black mb-4">CURRENTLY LEARNING</h3>
            <ul className="space-y-2 text-lg font-bold">
              <li>• RUST PROGRAMMING</li>
              <li>• MACHINE LEARNING</li>
              <li>• WEB3 DEVELOPMENT</li>
              <li>• SYSTEM DESIGN</li>
            </ul>
          </div>
          <div className="bg-red-500 text-white p-8 border-8 border-white border-l-0 md:border-l-8">
            <h3 className="text-2xl font-black mb-4">CERTIFICATIONS</h3>
            <ul className="space-y-2 text-lg font-bold">
              <li>• AWS CERTIFIED DEVELOPER</li>
              <li>• GOOGLE CLOUD ARCHITECT</li>
              <li>• REACT ADVANCED PATTERNS</li>
              <li>• AGILE PROJECT MANAGEMENT</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;