import React from 'react';

interface Story {
  id: string;
  title: string;
  titlee: string;
  subtitle?: string;
  genres: string[];
  imageUrl: string;
}

const stories: Story[] = [
  {
    id: 'gilgamesh',
    title: 'GILGAMESH',
    titlee: 'FIRST OF THE MONARCHS',
    // subtitle: 'FIRST OF THE MONARCHS',
    genres: ['ADVENTURE', 'DRAMA', 'FANTASY'],
    imageUrl: '/gilgamesh.jpg'
  },
  {
    id: 'memu and zin',
    title: 'MEM AND ZIN',
    titlee: 'ACROSS TIME AND SPACE',
    // subtitle: 'ACROSS TIME AND SPACE',
    genres: ['ROMANCE', 'FANTASY', 'SCI-FI'],
    imageUrl: '/memuzin.jpg'
  },
  {
    id: 'rostam',
    title: 'ROSTAM',
    titlee: 'THE OVERCOMING',
    // subtitle: 'THE OVERCOMING',
    genres: ['ACTION', 'FANTASY', 'ADVENTURE'],
    imageUrl: '/rostam.jpg'
  },
  {
    id: 'shahmaran',
    title: 'SHAHMARAN',
    titlee: 'THE QUEEN OF SNAKES',
    // subtitle: 'THE QUEEN OF SNAKES',
    genres: ['HORROR', 'FANTASY', 'ROMANCE'],
    imageUrl: '/shahmaran.jpg'
  },
  {
    id: 'soulless',
    title: 'SOULLESS',
    titlee: '',
    genres: ['HORROR', 'FANTASY'],
    imageUrl: '/soulseeker.jpg'
  },
  {
    id: 'lady-zrena',
    title: 'LADY ZRENA',
    titlee: 'SHADOW OF DAWN',
    // subtitle: 'SHADOW OF DAWN',
    genres: ['ACTION', 'FANTASY', 'ADVENTURE'],
    imageUrl: '/ladyzrena.jpg'
  },
  {
    id: 'tiny-drops',
    title: 'TINY DROPS OF RAIN',
    titlee: '',
    genres: ['ROMANCE', 'FANTASY', 'DRAMA'],
    imageUrl: '/tinydropsofrain.jpg'
  },
  {
    id: 'king-sivan',
    title: 'KING SIVAN',
    titlee: 'THE DREAMER',
    // subtitle: 'THE DREAMER',
    genres: ['ADVENTURE', 'DRAMA', 'FANTASY'],
    imageUrl: '/king.jpg'
  }
];

const StoryCard: React.FC<{ story: Story }> = ({ story }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={story.imageUrl}
          alt={story.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/30" />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col justify-end items-center min-h-[250px] sm:min-h-[280px] md:min-h-[315px]">
        {/* Title and Subtitle */}
        <div className="space-y-1 sm:space-y-2 flex flex-col justify-center items-center">
          <h3 className="text-xs sm:text-sm md:text-[15px] text-[#d3d2cf] font-bold tracking-wide text-center" style={{ fontFamily: 'var(--font-papyrus)' }}>
            {story.title}
          </h3>
          {story.titlee && (
            <h1 className="text-[8px] sm:text-[9px] md:text-[10px] text-[#d3d2cf] font-bold text-center" style={{ fontFamily: 'var(--font-papyrus)' }}>
              {story.titlee}
            </h1>
          )}
          {story.subtitle && (
            <p className="text-xs sm:text-sm text-[#d3d2cf] font-medium tracking-wider text-center">
              {story.subtitle}
            </p>
          )}
        </div>
        
        {/* Genres */}
        <div className="mt-2">
          <span className="text-[10px] sm:text-xs text-[#d3d2cf] font-bold text-center" style={{ fontFamily: 'var(--font-adlam)' }}>
            {story.genres.join(' / ')}
          </span>
        </div>
      </div>
      
      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

const FilmStories: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/80" /> */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>
      <div className="mb-8 sm:mb-10 md:mb-12 flex justify-center items-center px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#d3d2cf] tracking-wide text-center" style={{ fontFamily: 'var(--font-adlam)' }}>
            STORIES SET IN GILGAMAX CINEMATIC UNIVERSE
          </h2>
        </div>
      
      <div className="relative z-10 max-w-7xl mx-auto blur-md pointer-events-none px-4 sm:px-6">
        {/* Section Title */}
       
        
        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
        
        {/* Explore More Button */}
        {/* <div className="mt-12 flex justify-center">
          <a
            href="/GilgamaxUniverce"
            className="group relative transition-all duration-300 transform hover:scale-105 hover:opacity-90"
          >
            <img 
              src="/ExploreButton.svg" 
              alt="Explore More" 
              className="w-auto h-12 transition-all duration-300 group-hover:brightness-110"
            />
          </a>
        </div> */}
      </div>
      
      {/* Lock Icon Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="bg-black/30 rounded-full p-4 sm:p-5 md:p-6 backdrop-blur-sm">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-[#f8d95b]" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default FilmStories;
