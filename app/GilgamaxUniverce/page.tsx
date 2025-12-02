'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';

interface Movie {
  id: string;
  title: string;
  image: string;
  year: string;
  genre: string;
  description: string;
  // status: 'released' | 'upcoming' | 'in-production';
  // phase?: string;
}

const movies: Movie[] = [
  {
    id: 'Kawa the Blacksmith',
    title: 'Kawa the Blacksmith',
    image: '/kawa the blacksmith.jpg',
    year: '2024',
    genre: 'Action / Adventure / Fantasy',
    description: 'The mythic origin of rebellion—one blacksmith’s uprising against tyranny sparks the fire that forges a world',
    // status: 'released',
    // phase: 'Phase I'
  },
  {
    id: 'Gilgamesh',
    title: 'Gilgamesh: First of the Monarchs',
    image: '/gilgamesh.jpg',
    year: '2024',
    genre: 'Adventure / Drama / Fantasy',
    description: 'The demi-god king’s epic quest for immortality—an ancient tale of power, grief, and transformation.',
    // status: 'released',
    // phase: 'Phase I'
  },
  {
    id: 'Mem and Zin',
    title: 'Mem and Zin',
    image: '/memuzin.jpg',
    year: '2024',
    genre: 'TV Series (Romance / Fantasy / Sci-Fi)',
    description: 'A timeless Median love story reimagined across dimensions—where fate, space, and rebellion intertwine.',
    // status: 'released',
    // phase: 'Phase I'
  },
  {
    id: 'Rostam the Overcoming',
    title: 'Rostam the Overcoming',
    image: '/rostam.jpg',
    year: '2024',
    genre: 'Action / Adventure / Fantasy',
    description: 'The saga of a warrior destined to battle giants, beasts, and prophecy itself.',
    // status: 'released',
    // phase: 'Phase I'
  },
  {
    id: 'Shahmaran',
    title: 'Shahmaran: The Queen of Snakes',
    image: '/shahmaran.jpg',
    year: '2024',
    genre: 'Horror / Fantasy / Romance',
    description: 'A cursed love between a mortal and a serpent queen—seduction, betrayal, and vengeance awaken.',
    // status: 'released',
    // phase: 'Phase I'
  },
  {
    id: 'The Soulless',
    title: 'The Soulless',
    image: '/soulseeker.jpg',
    year: '2025',
    genre: 'Horror / Fantasy',
    description: 'A supernatural hunter who walks between worlds, tracking lost souls and forgotten gods.',
    // status: 'upcoming',
    // phase: 'Phase II'
  },
  
  {
    id: 'Lady Zrena: The Shadow of Dawn',
    title: 'Lady Zrena: The Shadow of Dawn',
    image: '/ladyzrena.jpg',
    year: '2025',
    genre: 'Action / Fantasy / Adventure',
    description: 'An exiled warrior princess rises to defy darkness, reclaim her name, and ignite a revolution.',
    // status: 'upcoming',
    // phase: 'Phase II'
  },
  {
    id: 'Tiny Drops of Rain',
    title: 'Tiny Drops of Rain',
    image: '/tinydropsofrain.jpg',
    year: '2026',
    genre: 'Romance / Fantasy / Drama',
    description: 'A poetic tale of love, memory, and sacrifice in a dreamlike world where time drips like rain.',
    // status: 'in-production',
    // phase: 'Phase III'
  },

  {
    id: 'King Sivan the Dreamer',
    title: 'King Sivan the Dreamer',
    image: '/king.jpg',
    year: '2025',
    genre: 'Adventure / Drama / Fantasy',
    description: 'A visionary king haunted by divine dreams must choose between destiny and destruction.',
    // status: 'upcoming',
    // phase: 'Phase II'
  },
];

export default function GilgamaxUniverse() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate loading for dramatic effect
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'released': return 'text-green-400 font-serif';
      case 'upcoming': return 'text-yellow-400 font-serif';
      case 'in-production': return 'text-blue-400 font-serif';
      default: return 'text-gray-400 font-serif';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'released': return '✓';
      case 'upcoming': return '⏳';
      case 'in-production': return '🎬';
      default: return '?';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-400 mx-auto mb-8"></div>
          <h2 className="text-4xl font-bold text-[#d3d2cf] mb-4 font-screamer">Loading the Universe...</h2>
          <p className="text-gray-400 text-lg">Preparing cinematic experience</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Navbar />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-blue-900/20 to-transparent"></div>
      
      

      <div className="relative z-20 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16 px-4">
          <h1 className="text-xl md:text-4xl font-black text-[#d3d2cf] mb-6 tracking-wider" style={{ fontFamily: 'var(--font-adlam)' }}>
            GILGAMAX CINEMATIC UNIVERSE
          </h1>
          {/* <h2 className="text-3xl md:text-5xl font-bold text-blue-400 mb-4 font-screamer">
            CINEMATIC UNIVERSE
          </h2> */}
          <p className="text-base sm:text-lg md:text-xl text-left text-[#d3d2cf] max-w-4xl mt-10 mx-auto leading-relaxed">
            Enter a realm where ancient myths collide with modern storytelling. 
            Experience the epic journey through interconnected tales of heroes, 
            legends, and the eternal struggle between light and darkness.
          </p>
          
        </div>

        {/* Universe Overview */}
        {/* <div className="max-w-7xl mx-auto px-4 mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gradient-to-b from-blue-900/30 to-transparent p-8 rounded-lg border border-blue-500/30">
              <h3 className="text-2xl font-bold text-blue-400 mb-4 font-screamer">Phase I</h3>
              <p className="text-gray-300">The Foundation - Ancient legends and epic heroes</p>
            </div>
            <div className="bg-gradient-to-b from-purple-900/30 to-transparent p-8 rounded-lg border border-purple-500/30">
              <h3 className="text-2xl font-bold text-purple-400 mb-4 font-screamer">Phase II</h3>
              <p className="text-gray-300">The Awakening - Modern tales with mystical elements</p>
            </div>
            <div className="bg-gradient-to-b from-red-900/30 to-transparent p-8 rounded-lg border border-red-500/30">
              <h3 className="text-2xl font-bold text-red-400 mb-4 font-screamer">Phase III</h3>
              <p className="text-gray-300">The Convergence - Worlds collide in epic finale</p>
            </div>
          </div>
        </div> */}

        {/* Movies Grid */}
        <div className="max-w-7xl mx-auto px-4 blur-md">
          {/* <h3 className="text-4xl font-bold text-[#d3d2cf] mb-12 text-center font-screamer">
            THE FILMS
          </h3> */}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="group relative bg-gradient-to-b from-gray-900/50 to-black/80 rounded-lg overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                onClick={() => setSelectedMovie(movie)}
              >
                {/* Movie Poster */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Status Badge */}
                  {/* <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${getStatusColor(movie.status)} bg-black/70`}>
                      {getStatusIcon(movie.status)} {movie.status.toUpperCase()}
                    </span>
                  </div> */}

                  {/* Phase Badge */}
                  <div className="absolute top-4 left-4">
                    {/* <span className="px-3 py-1 rounded-full text-sm font-bold text-[#d3d2cf] bg-blue-600/80">
                      {movie.phase}
                    </span> */}
                  </div>
                </div>

                {/* Movie Info */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-[#d3d2cf] mb-2" style={{ fontFamily: 'var(--font-adlam)' }}>
                    {movie.title}
                  </h4>
                  <div className="flex justify-between items-center mb-3">
                    {/* <span className="text-blue-400 font-semibold">{movie.year}</span> */}
                    <span className="text-gray-400 font-serif">{movie.genre}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {movie.description}
                  </p>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <span className="text-[#d3d2cf] font-bold text-lg">Click to Explore</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16 px-4">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-lg border border-blue-500/30 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-[#d3d2cf] mb-4 font-screamer">
              Join the Journey
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Experience the complete Gilgamax Cinematic Universe. Each film is a piece of a larger puzzle, 
              creating an immersive storytelling experience unlike any other.
            </p>
            <Link 
              href="/about"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-[#d3d2cf] px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Discover More
            </Link>
          </div>
        </div> */}

<div className="text-center mt-10 px-4">
          <h1 className="text-xl md:text-4xl font-black text-[#d3d2cf] mb-6 tracking-wider" style={{ fontFamily: 'var(--font-adlam)' }}>
          OVER A DECADE IN THE MAKING
          </h1>
          {/* <h2 className="text-3xl md:text-5xl font-bold text-blue-400 mb-4 font-screamer">
            CINEMATIC UNIVERSE
          </h2> */}
          <p className="text-base sm:text-lg md:text-xl text-left text-gray-300 max-w-4xl mt-10 mx-auto leading-relaxed">
          This project represents more than ten years of disciplined work—creative resolve shaped by research, craft, and long-term commitment. It began with a shared frustration felt by Omar K. Akraye and Hayman Homer at the continued appropriation and distortion of Mesopotamian history: a civilization whose legacy forms part of humanity’s cultural bedrock.
Over the years, they built a narrative framework designed to honor this ancient world with both fidelity and imagination. What emerged is a concept that preserves the essence of the original legend while employing a refined, contemporary story structure—built to connect with a global audience.
As the creative architecture took shape, Omar and Hayman’s professional paths converged. Hayman’s career in the United States had already distinguished him as a storyteller with rare conviction and international reach. What began as a chance encounter evolved into a substantive partnership, grounded in a shared reverence for cinema and a deep commitment to the cultural inheritance that shaped them.
Driven by a unified vision—to reintroduce The Ember Crown and the legacy of the First Civilization to the world—Omar and Hayman set out to build a cinematic universe that is both historically resonant and cinematically ambitious.
          </p>
          
        </div>
      </div>

      {/* Movie Detail Modal */}
      {/* {selectedMovie && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedMovie(null)}
                className="absolute top-4 right-4 z-10 bg-black/70 text-[#d3d2cf] p-2 rounded-full hover:bg-black/90 transition-colors"
              >
                ✕
              </button>
              
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="relative h-96">
                  <Image
                    src={selectedMovie.image}
                    alt={selectedMovie.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                
                <div>
                  <h2 className="text-4xl font-bold text-[#d3d2cf] mb-4 font-screamer"  style={{ fontFamily: 'var(--font-adlam)' }}>
                    {selectedMovie.title}
                  </h2>
                  <div className="flex gap-4 mb-4">
                    <span className="text-gray-400">{selectedMovie.genre}</span>
                    
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {selectedMovie.description}
                  </p>
                  <div className="bg-blue-900/30 p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-blue-400 mb-2">Phase Information</h4>
                    <p className="text-gray-300">
                      This film is part of of the Gilgamax Cinematic Universe, 
                      contributing to the larger narrative tapestry that connects all our stories.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
