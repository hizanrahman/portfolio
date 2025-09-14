import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:hizanrahman@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-black mb-8 animate-fade-in-up">
            <span className="inline-block hover:scale-105 transition-transform duration-300">LET'S</span>{' '}
            <span className="bg-black text-white px-4 inline-block hover:scale-105 transition-transform duration-300 delay-100">WORK</span>{' '}
            <span className="inline-block hover:scale-105 transition-transform duration-300 delay-200">TOGETHER</span>
          </h2>
          <p className="text-2xl font-bold max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            READY TO BUILD SOMETHING EXTRAORDINARY? DROP ME A LINE AND LET'S MAKE IT HAPPEN.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Contact Form */}
          <div className="bg-black text-white p-8 lg:p-12 border-8 border-black hover:shadow-2xl transition-all duration-500 transform-gpu animate-slide-in-left">
            <div className="flex items-center mb-8">
              <MessageSquare size={48} className="mr-4 hover:rotate-12 transition-transform duration-300" />
              <h3 className="text-3xl font-black hover:scale-105 transition-transform duration-300">SEND MESSAGE</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <input
                  type="text"
                  name="name"
                  placeholder="YOUR NAME"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white text-black font-bold text-lg border-4 border-yellow-400 focus:border-red-500 outline-none placeholder-black hover:scale-105 transition-transform duration-300 transform-gpu"
                  required
                />
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <input
                  type="email"
                  name="email"
                  placeholder="YOUR EMAIL"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white text-black font-bold text-lg border-4 border-yellow-400 focus:border-red-500 outline-none placeholder-black hover:scale-105 transition-transform duration-300 transform-gpu"
                  required
                />
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <textarea
                  name="message"
                  placeholder="YOUR MESSAGE"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white text-black font-bold text-lg border-4 border-yellow-400 focus:border-red-500 outline-none placeholder-black resize-none hover:scale-105 transition-transform duration-300 transform-gpu"
                  required
                />
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white px-8 py-4 font-black text-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 border-4 border-red-500 hover:border-yellow-400 hover:scale-105 hover:shadow-2xl flex items-center justify-center transform-gpu"
                >
                  <Send size={24} className="mr-2 hover:rotate-12 transition-transform duration-300" />
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-yellow-400 text-black p-8 lg:p-12 border-8 border-black border-l-0 lg:border-l-8 hover:shadow-2xl transition-all duration-500 transform-gpu animate-slide-in-right">
            <div className="flex items-center mb-8">
              <Mail size={48} className="mr-4 hover:rotate-12 transition-transform duration-300" />
              <h3 className="text-3xl font-black hover:scale-105 transition-transform duration-300">GET IN TOUCH</h3>
            </div>

            <div className="space-y-8">
              <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <h4 className="text-xl font-black mb-2 hover:scale-105 transition-transform duration-300">EMAIL</h4>
                <p className="text-lg font-bold hover:translate-x-2 transition-transform duration-300">hizanrahman@gmail.com</p>
              </div>
              
              <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <h4 className="text-xl font-black mb-2 hover:scale-105 transition-transform duration-300">RESPONSE TIME</h4>
                <p className="text-lg font-bold hover:translate-x-2 transition-transform duration-300">USUALLY WITHIN 12 HOURS</p>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <h4 className="text-xl font-black mb-4 hover:scale-105 transition-transform duration-300">FOLLOW ME</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/hizanrahman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-yellow-400 p-4 hover:bg-red-500 hover:text-white hover:scale-110 hover:rotate-12 transition-all duration-300 border-4 border-black transform-gpu"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hizanrahman/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-yellow-400 p-4 hover:bg-red-500 hover:text-white hover:scale-110 hover:rotate-12 transition-all duration-300 border-4 border-black transform-gpu"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/__hizan_.rahman_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-yellow-400 p-4 hover:bg-red-500 hover:text-white hover:scale-110 hover:rotate-12 transition-all duration-300 border-4 border-black transform-gpu"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </div>

              <div className="bg-black text-yellow-400 p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 transform-gpu animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                <h4 className="text-lg font-black mb-2">AVAILABILITY</h4>
                <p className="font-bold">OPEN FOR NEW PROJECTS</p>
                <p className="font-bold">WITH IMMEDIATE EFFECT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;