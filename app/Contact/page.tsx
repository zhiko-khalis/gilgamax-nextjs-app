'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      project: '',
      budget: '',
      message: ''
    });
    
    setIsSubmitting(false);
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-black text-[#d3d2cf]">
      <Navbar />
      
      {/* Hero Section */}
      {/* <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/mainCover.PNG"
            alt="Cinematic Background"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
        </div>

        

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-6 font-screamer tracking-wider">
              CONTACT US
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to bring your vision to life? Let's create something extraordinary together.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-[#d3d2cf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section> */}

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          {/* <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 font-screamer">
              CONTACT
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div> */}

          <div className="grid lg:grid-cols-1 gap-12">
            {/* Contact Form */}
            {/* <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-400 font-screamer">Project Inquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-serif">
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 font-serif bg-gray-800 border border-gray-700 rounded-lg text-[#d3d2cf] placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-serif">
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 font-serif bg-gray-800 border border-gray-700 rounded-lg text-[#d3d2cf] placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium font-serif text-gray-300 mb-2">
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 font-serif bg-gray-800 border border-gray-700 rounded-lg text-[#d3d2cf] placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium font-serif text-gray-300 mb-2">
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 font-serif text-sm bg-gray-800 border border-gray-700 rounded-lg text-[#d3d2cf] focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      <option value="feature-film">Feature Film</option>
                      <option value="documentary">Documentary</option>
                      <option value="short-film">Short Film</option>
                      <option value="commercial">Commercial</option>
                      <option value="music-video">Music Video</option>
                      <option value="corporate">Corporate Video</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium font-serif text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border font-serif text-sm border-gray-700 rounded-lg text-[#d3d2cf] focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-50k">$10,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-500k">$100,000 - $500,000</option>
                    <option value="500k-plus">$500,000+</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium font-serif text-gray-300 mb-2">
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 font-serif bg-gray-800 border border-gray-700 rounded-lg text-[#d3d2cf] placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, vision, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-bold py-4 px-8 rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
            </div> */}

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-400 font-screamer">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#d3d2cf] mb-1">Email</h4>
                      <p className="text-gray-300">info@gilgamax.com</p>
                      <p className="text-gray-300">projects@gilgamax.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#d3d2cf] mb-1">Phone</h4>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-gray-300">+1 (555) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#d3d2cf] mb-1">Office</h4>
                      <p className="text-gray-300">123 Cinema Street</p>
                      <p className="text-gray-300">Hollywood, CA 90210</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-400 font-screamer">Follow Us</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg hover:bg-blue-400/20 transition-all duration-300 group"
                  >
                    <svg className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                    <span className="text-[#d3d2cf] font-medium font-serif">Twitter</span>
                  </a>

                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg hover:bg-blue-400/20 transition-all duration-300 group"
                  >
                    <svg className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
                    </svg>
                    <span className="text-[#d3d2cf] font-medium font-serif">Instagram</span>
                  </a>

                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg hover:bg-blue-400/20 transition-all duration-300 group"
                  >
                    <svg className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-[#d3d2cf] font-medium font-serif">LinkedIn</span>
                  </a>

                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg hover:bg-blue-400/20 transition-all duration-300 group"
                  >
                    <svg className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span className="text-[#d3d2cf] font-medium font-serif">YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 font-screamer">
            LET'S CREATE TOGETHER
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Every great film starts with a conversation. Let's discuss your vision and bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-bold py-4 px-8 rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105">
              Schedule a Call
            </button>
            <button className="border-2 border-blue-400 text-blue-400 font-bold py-4 px-8 rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section> */}

      
    </div>
  );
}
