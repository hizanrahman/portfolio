import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-3xl font-black mb-4">PORTFOLIO</h3>
            <p className="font-bold text-lg">
              CREATIVE DEVELOPER BASED IN THE DIGITAL REALM
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-black mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {['ABOUT', 'WORK', 'SKILLS', 'CONTACT'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="font-bold hover:text-yellow-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-black mb-4">BUILT WITH</h4>
            <ul className="space-y-2 font-bold">
              <li>• REACT & TYPESCRIPT</li>
              <li>• TAILWIND CSS</li>
              <li>• LUCIDE ICONS</li>
              <li>• LOTS OF ☕</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-4 border-yellow-400 mt-12 pt-8 text-center">
          <p className="text-xl font-black">
            © 2025 HIZAN RAHMAN. ALL RIGHTS RESERVED.
          </p>
          <p className="font-bold mt-2">
            DESIGNED & DEVELOPED BY HIZAN RAHMAN 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;