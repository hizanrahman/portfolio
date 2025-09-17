

import { Code, Zap, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Header */}
          <div className="lg:col-span-3 mb-16">
            <h2 className="text-6xl md:text-8xl font-black text-center animate-fade-in-up">
              <span className="bg-yellow-400 text-black px-4 inline-block hover:scale-105 transition-transform duration-300">ABOUT</span>{' '}
              <span className="inline-block hover:scale-105 transition-transform duration-300 delay-100">ME</span>
            </h2>
          </div>

          {/* Leadership Section - moved from separate component */}
          <div className="lg:col-span-3 flex justify-center items-center min-h-screen">
            <div className="bg-white text-black p-8 lg:p-12 border-8 border-yellow-400 hover:shadow-2xl transition-all duration-500 transform-gpu animate-slide-in-left mb-8 w-full max-w-xl flex flex-col items-center rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-center hover:scale-105 transition-transform duration-300 font-sans tracking-tight">
                Founder at <span className="bg-yellow-400 text-black px-2 rounded">DroidSec Community</span>
              </h2>
              <a href="https://droidsec.vercel.app" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://i.postimg.cc/HxBVJC1z/droidsec-logo.png"
                  alt="DroidSec Logo"
                  className="droidsec-logo mb-4"
                  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)', borderRadius: '24px', background: '#f9f9f9', width: '120px', height: '120px', objectFit: 'contain', transition: 'box-shadow 0.2s' }}
                />
              </a>
              <a
                href="https://droidsec.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black px-8 py-3 mt-2 mb-4 text-lg font-black border-4 border-yellow-400 rounded-lg hover:bg-black hover:text-yellow-400 hover:border-black transition-all duration-300 shadow-lg"
                style={{ display: 'inline-block' }}
              >
                Community Website link
              </a>
              <p className="font-black text-lg text-center mt-2 leadership-desc font-sans tracking-tight">
                Leading DroidSec Community to empower security enthusiasts and foster collaboration in cybersecurity.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 bg-white text-black p-8 lg:p-12 border-8 border-yellow-400 hover:shadow-2xl transition-all duration-500 transform-gpu animate-slide-in-left">
            <h3 className="text-3xl md:text-4xl font-black mb-8 hover:scale-105 transition-transform duration-300">
              I BUILD THINGS THAT MATTER
            </h3>
            <div className="space-y-6 text-lg font-bold">
              <p className="hover:translate-x-2 transition-transform duration-300">
                I'M A FULL-STACK DEVELOPER WHO BELIEVES IN PUSHING BOUNDARIES. 
                MY WORK ISN'T JUST CODE - IT'S A STATEMENT ABOUT WHAT DIGITAL 
                EXPERIENCES CAN BE.
              </p>
              <p className="hover:translate-x-2 transition-transform duration-300 delay-100">
                SPECIALIZING IN REACT, NODE.JS, AND MODERN WEB TECHNOLOGIES, 
                I CREATE APPLICATIONS THAT ARE BOTH FUNCTIONALLY ROBUST AND 
                VISUALLY STRIKING.
              </p>
              <p className="hover:translate-x-2 transition-transform duration-300 delay-200">
                WHEN I'M NOT CODING, I'M EXPLORING NEW DESIGN PHILOSOPHIES, 
                CONTRIBUTING TO OPEN SOURCE, OR MENTORING THE NEXT GENERATION 
                OF DEVELOPERS.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-0 animate-slide-in-right">
            <div className="bg-red-500 text-white p-6 border-8 border-black hover:scale-105 hover:shadow-2xl transition-all duration-300 transform-gpu group">
              <Code size={48} className="mb-4 group-hover:rotate-12 transition-transform duration-300" />
              <h4 className="text-xl font-black mb-2">CLEAN CODE</h4>
              <p className="font-bold text-sm">MAINTAINABLE & SCALABLE</p>
            </div>
            <div className="bg-yellow-400 text-black p-6 border-8 border-black border-t-0 hover:scale-105 hover:shadow-2xl transition-all duration-300 transform-gpu group">
              <Zap size={48} className="mb-4 group-hover:rotate-12 transition-transform duration-300" />
              <h4 className="text-xl font-black mb-2">PERFORMANCE</h4>
              <p className="font-bold text-sm">FAST & OPTIMIZED</p>
            </div>
            <div className="bg-white text-black p-6 border-8 border-black border-t-0 hover:scale-105 hover:shadow-2xl transition-all duration-300 transform-gpu group">
              <Target size={48} className="mb-4 group-hover:rotate-12 transition-transform duration-300" />
              <h4 className="text-xl font-black mb-2">USER FOCUSED</h4>
              <p className="font-bold text-sm">ACCESSIBLE & INTUITIVE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;