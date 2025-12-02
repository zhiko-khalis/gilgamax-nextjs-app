'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';

export default function OperationsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const operations = [
    {
      title: "Film Production",
      description: "Overseeing every stage of filmmaking, from pre-production to post, uniting world-class talent and cutting-edge technologies.",
      icon: "🎬",
      gradient: "from-blue-400/20 to-cyan-400/10"
    },
    {
      title: "Screenplay Development", 
      description: "Partnering with visionary writers to cultivate stories of depth, authenticity, and universal resonance.",
      icon: "📝",
      gradient: "from-cyan-400/20 to-blue-500/10"
    },
    {
      title: "Cinematic Universe Building",
      description: "Constructing expansive, interconnected worlds that evolve across films, series, and transmedia formats.",
      icon: "🌌",
      gradient: "from-blue-500/20 to-indigo-400/10"
    },
    {
      title: "Creative Consulting & Story Development",
      description: "Guiding studios, brands, and creators to refine narratives and build immersive cultural worlds.",
      icon: "💡",
      gradient: "from-indigo-400/20 to-purple-400/10"
    },
    {
      title: "Casting & Talent Development",
      description: "Discovering and nurturing the next generation of global storytellers.",
      icon: "⭐",
      gradient: "from-purple-400/20 to-pink-400/10"
    },
    {
      title: "Content & IP Creation",
      description: "Developing original properties designed for cross-media expansion—stories that live beyond a single screen.",
      icon: "🎭",
      gradient: "from-pink-400/20 to-blue-400/10"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-[#d3d2cf] overflow-hidden relative">
      <Navbar />
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/operphoto.png"
          alt="Cinematic Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/10"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <div className="fixed inset-0 opacity-30 pointer-events-none z-10" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
             mixBlendMode: 'overlay'
           }}>
      </div>

      <div className="fixed inset-0 bg-gradient-radial from-transparent via-transparent to-black/50 pointer-events-none z-20"></div>

      
      {/* <section className="relative min-h-screen flex items-center justify-center px-6"> */}
        {/* <div className="absolute inset-0 z-0">
          <Image
            src="/mainCover.PNG"
            alt="Cinematic Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div> */}

        

       
        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div> */}
      {/* </section> */}

      {/* Operations Narrative Sections */}
      <section className="relative py-30 px-6 z-30">
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Film Production */}
          <div className={`flex flex-col lg:flex-row items-center ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            <div className="flex-1 space-y-8">
             
              <h3 
                className="cinematic-h3 text-xl md:text-2xl font-black mb-6"
                style={{ fontFamily: 'var(--font-adlam)' }}
              >
                Film Production
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
              Overseeing every stage of filmmaking—from development and pre-production through post—bringing together world-class talent and cutting-edge technology.
              </p>
            </div>
            {/* <div className="flex-1 relative">
              <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/company office png.png"
                  alt="Film Production"
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
            </div> */}
          </div>

          {/* Screenplay Development */}
          <div className={`flex flex-col lg:flex-row items-center  ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
            <div className="flex-1 space-y-8">
             
              <h3 
                className="text-xl cinematic-h3 md:text-2xl font-black text-[#d3d2cf] mb-6"
                style={{ fontFamily: 'var(--font-adlam)' }}
              >
                Screenplay Development
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
              Partnering with visionary writers to shape stories with depth, authenticity, and universal resonance.
              </p>
            </div>
            {/* <div className="flex-1 relative">
              <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/photos1.jpg"
                  alt="Screenplay Development"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl"></div>
            </div> */}
          </div>

          {/* Cinematic Universe Building */}
          <div className={`flex flex-col lg:flex-row items-center  ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
            <div className="flex-1 space-y-8">
              
              <h3 
                className="text-xl md:text-2xl cinematic-h3 font-black text-[#d3d2cf] mb-6"
                style={{ fontFamily: 'var(--font-adlam)' }}
              >
                Cinematic Universe Building
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
              Designing expansive, interconnected worlds that can evolve across films, series, and transmedia formats.
              </p>
            </div>
            {/* <div className="flex-1 relative">
              <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/gilgamesh.jpg"
                  alt="Cinematic Universe"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-400/20 rounded-full blur-xl"></div>
            </div> */}
          </div>

          {/* Creative Consulting & Story Development */}
          <div className={`flex flex-col lg:flex-row items-center  ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
            <div className="flex-1 space-y-8">
              <h3 
                className="text-xl md:text-2xl cinematic-h3 font-black text-[#d3d2cf] mb-6"
                style={{ fontFamily: 'var(--font-adlam)' }}
              >
                Creative Consulting & Story Development
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
              Advising studios, brands, and creators to refine narratives, strengthen story architecture, and build immersive cultural worlds.
              </p>
            </div>
            {/* <div className="flex-1 relative">
              <div className="relative w-full h-96 overflow-hidden rounded-lg">
                <Image
                  src="/king.jpg"
                  alt="Creative Consulting"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"></div>
            </div> */}
          </div>

          {/* Casting & Talent Development */}
          <div className={`flex flex-col lg:flex-row items-center  ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1000ms' }}>
            <div className="flex-1 space-y-8">
              
              <h3 
                className="text-xl md:text-2xl cinematic-h3 font-black text-[#d3d2cf] mb-6"
                style={{ fontFamily: 'var(--font-adlam)' }}
              >
                Casting & Talent Development
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
              Identifying and supporting the next generation of global storytellers and on-screen talent.
              </p>
            </div>
            {/* <div className="flex-1 relative">
              <div className="relative w-full h-96 overflow-hidden rounded-lg">
                <Image
                  src="/ladyzrena.jpg"
                  alt="Talent Development"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-400/20 rounded-full blur-xl"></div>
            </div> */}
          </div>

          {/* Content & IP Creation */}
          <div className={`flex flex-col lg:flex-row items-center  ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1200ms' }}>
              <div className="flex-1 space-y-8">
              
              <h3 
                  className="text-xl md:text-2xl cinematic-h3 font-black text-[#d3d2cf] mb-6"
                style={{ fontFamily: 'var(--font-adlam)' }}
              >
                Intellectual Property (IP) Creation
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
              Creating original properties built for long-term, cross-media expansion—stories that live beyond a single screen.
                 </p>
            </div>
            {/* <div className="flex-1 relative">
              <div className="relative w-full h-96 overflow-hidden rounded-lg">
                <Image
                  src="/shahmaran.jpg"
                  alt="Content Creation"
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

      {/* Cinematic Footer Section */}
      {/* <section className="relative py-20 px-6 bg-gradient-to-t from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 
              className="text-5xl md:text-7xl font-black text-blue-400 mb-8 tracking-wider"
              style={{ fontFamily: 'var(--font-papyrus)' }}
            >
              CINEMATIC EXCELLENCE
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From ancient myths to future legends, we craft stories that transcend time and culture, 
              uniting the wisdom of the past with the vision of tomorrow.
            </p>
          </div>
        </div>

        
      </section> */}
    </div>
  );
}
