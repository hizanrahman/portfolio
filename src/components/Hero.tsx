import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center pt-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Main Content */}
          <div className="lg:col-span-8 bg-black text-white p-8 lg:p-16 relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-400 opacity-5 rounded-full animate-pulse"></div>
              <div className="absolute bottom-20 left-10 w-20 h-20 bg-red-500 opacity-5 rounded-full animate-bounce"></div>
            </div>
            
            <div className="space-y-6 relative z-10">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-tight animate-fade-in-up">
                <span className="inline-block hover:scale-105 transition-transform duration-300">HIZAN</span>{' '}
                <span className="inline-block hover:scale-105 transition-transform duration-300 delay-100">RAHMAN</span>
              </h1>
              <div className="mb-8 animate-fade-in-up delay-200">
                <span className="bg-yellow-400 text-black px-4 py-2 text-2xl md:text-3xl lg:text-4xl font-black inline-block hover:scale-110 hover:rotate-1 transition-all duration-300 transform-gpu">
                  PENTESTER/DEVELOPER
                </span>
              </div>
              <p className="text-xl md:text-2xl font-bold mb-8 max-w-2xl leading-relaxed animate-fade-in-up delay-300">
                CRAFTING DIGITAL EXPERIENCES THAT BREAK CONVENTIONS AND CHALLENGE EXPECTATIONS
              </p>
              <div className="animate-fade-in-up delay-400">
                <a
                  href="#work"
                  className="inline-block bg-red-500 text-white px-8 py-4 font-black text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 border-4 border-red-500 hover:border-yellow-400 hover:scale-105 hover:shadow-2xl transform-gpu"
                >
                  VIEW MY WORK
                </a>
              </div>
            </div>
          </div>

          {/* Side Element with Photo */}
          <div className="lg:col-span-4 bg-white flex flex-col justify-center items-center p-8 min-h-[300px] lg:min-h-full relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-5 left-5 w-16 h-16 bg-black opacity-5 rounded-full animate-ping"></div>
              <div className="absolute bottom-5 right-5 w-12 h-12 bg-yellow-400 opacity-10 rounded-full animate-pulse"></div>
            </div>
            
            {/* Photo Section */}
            <div className="mb-8 animate-fade-in-up delay-500 relative z-10">
              <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-black shadow-lg bg-yellow-400 hover:shadow-2xl transition-all duration-500 hover:scale-105 transform-gpu">
                <img 
                  src="/src/assets/hizan-photo.png" 
                  alt="Hizan Rahman" 
                  className="w-full h-full object-cover rounded-full scale-105 hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Floating particles around photo */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-red-500 rounded-full animate-bounce delay-1500"></div>
            </div>
            
            {/* Experience Stats */}
            <div className="bg-yellow-400 text-black text-center p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform-gpu animate-fade-in-up delay-600">
              <div className="text-6xl font-black mb-4 hover:scale-110 transition-transform duration-300">1+</div>
              <div className="text-xl font-black">YEARS</div>
              <div className="text-lg font-bold">EXPERIENCE</div>
            </div>
            
            {/* Freelance Badge */}
            <div className="mt-8 bg-black text-yellow-400 p-4 rotate-3 hover:rotate-6 hover:scale-105 transition-all duration-300 transform-gpu animate-fade-in-up delay-700">
              <div className="text-sm font-black">AVAILABLE FOR</div>
              <div className="text-lg font-black">FREELANCE</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <div className="bg-white text-black p-4 animate-bounce border-4 border-white">
            <ArrowDown size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;