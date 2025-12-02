'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const router = useRouter();

 

  

  return (
    <div className="min-h-screen bg-black text-[#d3d2cf] overflow-hidden">
      {/* Navbar */}
      <Navbar />
      

      {/* Description Section */}
      <section className="relative py-25 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/NEWSTONEPHOTOO.jpg"
                  alt="Production Team"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
          <div className="flex flex-col gap-16 items-center w-full">
            {/* Text Content */}
            <div className="">
              <h2 
                className="text-2xl md:text-2xl text-center font-black mt-10 text-[#d3d2cf]"
                style={{ fontFamily: 'var(--font-adlam)' }}
              >
                OUR VISION
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 w-full max-w-5xl leading-relaxed mt-3 ">
              Mesopotamia is widely regarded as the cradle of civilization—home to some of humanity's earliest and most enduring epics. Its stories have shaped myth, literature, and culture for millennia, and their influence is still felt today. Yet despite this legacy, Mesopotamian mythology remains largely underexplored in Western mainstream media.
Our vision is to bring these tales to life with cinematic ambition and cultural respect—reintroducing the world to their true origins and honoring the civilization that first imagined them.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
               
              </p>
            
            </div>

            {/* Image Content */}
            {/* <div className="relative">
              <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/company office svg.svg"
                  alt="Production Team"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Details Section */}
      {/* <section className="relative py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-5xl md:text-7xl font-black text-[#d3d2cf] mb-6"
              style={{ fontFamily: 'var(--font-papyrus)' }}
            >
              CINEMATIC EXCELLENCE
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-serif">
              Discover the pillars that make Gilgamax a leader in cinematic storytelling
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group relative bg-black/50 p-8 rounded-lg border border-gray-800 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#d3d2cf] mb-4">Visual Storytelling</h3>
                <p className="text-gray-400 leading-relaxed font-serif">
                  We craft compelling narratives through innovative cinematography, 
                  creating immersive experiences that resonate with audiences worldwide.
                </p>
              </div>
            </div>

            <div className="group relative bg-black/50 p-8 rounded-lg border border-gray-800 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#d3d2cf] mb-4">Technical Innovation</h3>
                <p className="text-gray-400 leading-relaxed font-serif">
                  Cutting-edge technology meets artistic vision. We push the boundaries 
                  of what's possible in film production and post-production.
                </p>
              </div>
            </div>

            <div className="group relative bg-black/50 p-8 rounded-lg border border-gray-800 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#d3d2cf] mb-4">Collaborative Excellence</h3>
                <p className="text-gray-400 leading-relaxed font-serif">
                  Our diverse team of creatives, technicians, and visionaries work 
                  together to bring your stories to life with unmatched quality.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-black text-blue-400" style={{ fontFamily: 'var(--font-papyrus)' }}>
                50+
              </div>
              <div className="text-gray-400 font-serif">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-blue-400" style={{ fontFamily: 'var(--font-papyrus)' }}>
                15+
              </div>
              <div className="text-gray-400 font-serif">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-blue-400" style={{ fontFamily: 'var(--font-papyrus)' }}>
                100%
              </div>
              <div className="text-gray-400 font-serif">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-blue-400" style={{ fontFamily: 'var(--font-papyrus)' }}>
                24/7
              </div>
              <div className="text-gray-400 font-serif">Creative Support</div>
            </div>
          </div>
        </div>
      </section> */}

     
          </div>
       
    
  );
}
