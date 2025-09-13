import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-black mb-8">
            LET'S <span className="bg-black text-white px-4">WORK</span> TOGETHER
          </h2>
          <p className="text-2xl font-bold max-w-3xl mx-auto">
            READY TO BUILD SOMETHING EXTRAORDINARY? DROP ME A LINE AND LET'S MAKE IT HAPPEN.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Contact Form */}
          <div className="bg-black text-white p-8 lg:p-12 border-8 border-black">
            <div className="flex items-center mb-8">
              <MessageSquare size={48} className="mr-4" />
              <h3 className="text-3xl font-black">SEND MESSAGE</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="YOUR NAME"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white text-black font-bold text-lg border-4 border-yellow-400 focus:border-red-500 outline-none placeholder-black"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="YOUR EMAIL"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white text-black font-bold text-lg border-4 border-yellow-400 focus:border-red-500 outline-none placeholder-black"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="YOUR MESSAGE"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white text-black font-bold text-lg border-4 border-yellow-400 focus:border-red-500 outline-none placeholder-black resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white px-8 py-4 font-black text-xl hover:bg-yellow-400 hover:text-black transition-colors duration-200 border-4 border-red-500 hover:border-yellow-400 flex items-center justify-center"
              >
                <Send size={24} className="mr-2" />
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-yellow-400 text-black p-8 lg:p-12 border-8 border-black border-l-0 lg:border-l-8">
            <div className="flex items-center mb-8">
              <Mail size={48} className="mr-4" />
              <h3 className="text-3xl font-black">GET IN TOUCH</h3>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-black mb-2">EMAIL</h4>
                <p className="text-lg font-bold">hello@developer.com</p>
              </div>
              
              <div>
                <h4 className="text-xl font-black mb-2">RESPONSE TIME</h4>
                <p className="text-lg font-bold">USUALLY WITHIN 24 HOURS</p>
              </div>

              <div>
                <h4 className="text-xl font-black mb-4">FOLLOW ME</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-black text-yellow-400 p-4 hover:bg-red-500 hover:text-white transition-colors duration-200 border-4 border-black"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="#"
                    className="bg-black text-yellow-400 p-4 hover:bg-red-500 hover:text-white transition-colors duration-200 border-4 border-black"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="#"
                    className="bg-black text-yellow-400 p-4 hover:bg-red-500 hover:text-white transition-colors duration-200 border-4 border-black"
                  >
                    <Twitter size={24} />
                  </a>
                </div>
              </div>

              <div className="bg-black text-yellow-400 p-6 transform rotate-2">
                <h4 className="text-lg font-black mb-2">AVAILABILITY</h4>
                <p className="font-bold">OPEN FOR NEW PROJECTS</p>
                <p className="font-bold">STARTING FEBRUARY 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;