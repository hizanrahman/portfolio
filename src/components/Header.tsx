import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-black tracking-tight">
            PORTFOLIO
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-0">
            {['ABOUT', 'WORK', 'SKILLS', 'CONTACT', 'LEADERSHIP'].map((item) => (
              <a
                key={item}
                href={item === 'LEADERSHIP' ? '#leadership' : `#${item.toLowerCase()}`}
                className="bg-white text-black px-6 py-2 font-black text-sm border-r-4 border-black last:border-r-0 hover:bg-yellow-400 hover:text-black transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden bg-yellow-400 text-black p-2 font-black"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 border-t-4 border-yellow-400 pt-4">
            {['ABOUT', 'WORK', 'SKILLS', 'CONTACT', 'LEADERSHIP'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block bg-white text-black px-4 py-3 font-black text-lg border-b-2 border-black hover:bg-yellow-400 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;