

import { Code, Zap, Target } from 'lucide-react';

const About = () => {
  return (
  <section id="about" className="py-12 md:py-20 bg-black text-white px-2 md:px-4 overflow-hidden">
  <div className="max-w-7xl mx-auto w-full">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 w-full">
          {/* Header */}
          <div className="lg:col-span-3 mb-8 md:mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-center animate-fade-in-up break-words">
              <span className="bg-yellow-400 text-black px-4 inline-block hover:scale-105 transition-transform duration-300">ABOUT</span>{' '}
              <span className="inline-block hover:scale-105 transition-transform duration-300 delay-100">ME</span>
            </h2>
          </div>

          {/* Leadership Section - moved from separate component */}
          <div className="lg:col-span-3 flex justify-center items-center min-h-[60vh] md:min-h-screen">
            <div className="bg-white text-black p-4 sm:p-8 md:p-12 border-4 md:border-8 border-yellow-400 hover:shadow-2xl transition-all duration-500 transform-gpu animate-slide-in-left mb-6 md:mb-8 w-full max-w-md sm:max-w-lg md:max-w-xl flex flex-col items-center rounded-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-center hover:scale-105 transition-transform duration-300 font-sans tracking-tight break-words">
                Founder at <span className="bg-yellow-400 text-black px-2 rounded">DroidSec Community</span>
              </h2>
              <a href="https://droidsec.vercel.app" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://i.postimg.cc/HxBVJC1z/droidsec-logo.png"
                  alt="DroidSec Logo"
                  className="droidsec-logo mb-2 sm:mb-4"
                  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)', borderRadius: '24px', background: '#f9f9f9', width: '80px', height: '80px', maxWidth: '120px', maxHeight: '120px', objectFit: 'contain', transition: 'box-shadow 0.2s' }}
                />
              </a>
              <a
                href="https://droidsec.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black px-6 py-2 mt-2 mb-2 sm:mb-4 text-base sm:text-lg font-black border-4 border-yellow-400 rounded-lg hover:bg-black hover:text-yellow-400 hover:border-black transition-all duration-300 shadow-lg"
                style={{ display: 'inline-block', wordBreak: 'break-word' }}
              >
                Community Website link
              </a>
              <p className="font-black text-base sm:text-lg text-center mt-2 leadership-desc font-sans tracking-tight break-words">
                Leading DroidSec Community to empower security enthusiasts and foster collaboration in cybersecurity.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 bg-white text-black p-4 sm:p-8 md:p-12 border-4 md:border-8 border-yellow-400 hover:shadow-2xl transition-all duration-500 transform-gpu animate-slide-in-left">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-black mb-4 md:mb-8 hover:scale-105 transition-transform duration-300 break-words">
              I BUILD THINGS THAT MATTER
            </h3>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg font-bold">
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
          <div className="space-y-2 sm:space-y-0 animate-slide-in-right">
            <div className="bg-red-500 text-white p-4 sm:p-6 border-4 md:border-8 border-black hover:scale-105 hover:shadow-2xl transition-all duration-300 transform-gpu group rounded-xl">
              <Code size={48} className="mb-4 group-hover:rotate-12 transition-transform duration-300" />
              <h4 className="text-xl font-black mb-2">CLEAN CODE</h4>
              <p className="font-bold text-sm">MAINTAINABLE & SCALABLE</p>
            </div>
            <div className="bg-yellow-400 text-black p-4 sm:p-6 border-4 md:border-8 border-black border-t-0 hover:scale-105 hover:shadow-2xl transition-all duration-300 transform-gpu group rounded-xl">
              <Zap size={48} className="mb-4 group-hover:rotate-12 transition-transform duration-300" />
              <h4 className="text-xl font-black mb-2">PERFORMANCE</h4>
              <p className="font-bold text-sm">FAST & OPTIMIZED</p>
            </div>
            <div className="bg-white text-black p-4 sm:p-6 border-4 md:border-8 border-black border-t-0 hover:scale-105 hover:shadow-2xl transition-all duration-300 transform-gpu group rounded-xl">
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