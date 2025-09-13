import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center pt-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Main Content */}
          <div className="lg:col-span-8 bg-black text-white p-8 lg:p-16 border-8 border-black">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-none mb-8">
              HIZAN RAHMAN
              <br /> <br />
              
              <span className="bg-yellow-400 text-black px-2">PENTESTER/DEVELOPER</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold mb-8 max-w-2xl">
              CRAFTING DIGITAL EXPERIENCES THAT BREAK CONVENTIONS AND CHALLENGE EXPECTATIONS
            </p>
            <a
              href="#work"
              className="inline-block bg-red-500 text-white px-8 py-4 font-black text-lg hover:bg-yellow-400 hover:text-black transition-colors duration-200 border-4 border-red-500 hover:border-yellow-400"
            >
              VIEW MY WORK
            </a>
          </div>

          {/* Side Element */}
          <div className="lg:col-span-4 bg-yellow-400 border-8 border-black border-l-0 lg:border-l-8 flex flex-col justify-center items-center p-8 min-h-[300px] lg:min-h-full">
            <div className="text-black text-center">
              <div className="text-6xl font-black mb-4">1+</div>
              <div className="text-xl font-black">YEARS</div>
              <div className="text-lg font-bold">EXPERIENCE</div>
            </div>
            <div className="mt-8 bg-black text-yellow-400 p-4 rotate-3">
              <div className="text-sm font-black">AVAILABLE FOR</div>
              <div className="text-lg font-black">FREELANCE</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <div className="bg-black text-white p-4 animate-bounce border-4 border-black">
            <ArrowDown size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;