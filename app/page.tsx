import Image from "next/image";
import About from "./About";
import Services from "./Services";
import Reel from "./Reel";
import OurProcess from "./OurProcess";
import Credits from "./Credits";
import Contact from "./Contact";
import FilmStories from "./FilmStories";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="main-bg min-h-screen flex flex-col page-enter">
       {/* Top Film Strip */}
      {/* <div className="film-strip" /> */}

      {/* Main Image */}
      <main className="flex-1 flex items-center justify-center relative min-h-screen">
        {/* Navbar positioned on top of image */}
        <Navbar />
        <div className="w-full h-full flex items-center justify-center">
          <div className="main-image-container relative w-full flex items-center justify-center min-h-screen md:h-screen">
            <Image
              src="/mainCover.PNG"
              alt="Cinematic Cover"
              fill
              style={{objectFit:'cover'}}
              className=" shadow-xl main-image-overlay"
              priority
            />
            {/* Black fade overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/50 z-[5]"></div>
            {/* Black fade overlay at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-[6]"></div>
            
            {/* Overlayed Main Logo */}
            <div className="w-full h-full flex flex-col justify-center items-center z-10 px-4">
              <div className="hero-text-enter relative w-full max-w-[90vw] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[500px]">
                <Image
                  src="/finalize logo no bggg.svg"
                  alt="Gilgamax Logo"
                  width={300}
                  height={300}
                  className="object-contain relative z-10 w-full h-auto"
                  priority
                />
              </div>
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl px-4 mt-4 sm:mt-6 translate-y-70 sm:translate-y-40 md:translate-y-30 lg:translate-y-40 font-black text-[#d3d2cf] drop-shadow-lg hero-text-enter text-center max-w-[90vw]" style={{ fontFamily: 'var(--font-adlam)' }}>
                  Echos of the First Civilization
                </h1>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Film Strip */}
      {/* <div className="film-strip" /> */}
      

    

      {/* Bottom Center UI Element */}
      {/* <div className="flex justify-center items-center py-8">
        <div className="focus-indicator">
          <svg width="120" height="18" viewBox="0 0 120 18" fill="none">
            <rect x="58" y="7" width="4" height="4" rx="2" fill="#f8d95b"/>
            <rect x="0" y="8" width="120" height="2" rx="1" fill="#444"/>
            <rect x="0" y="8" width="120" height="2" rx="1" fill="#d3d2cf" fillOpacity="0.08"/>
            <g>
              {[...Array(11)].map((_,i) => (
                <rect key={i} x={10*i+5} y={5} width={1} height={8} rx={0.5} fill="#d3d2cf" fillOpacity="0.18" />
              ))}
            </g>
          </svg>
        </div>
      </div> */}

      <div className="section-enter">
        <About />
      </div>

      {/* <div className="section-enter">
        <Reel />
      </div> */}


      {/* Film Stories Section */}
      <div className="section-enter">
        <FilmStories />
      </div>

     
      {/* Stacked Text with Horizontal Lines Section */}
      {/* <section className="w-full py-12 flex flex-col items-center section-enter">
        <div className="w-full border-t border-blue-400/20" />
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full border-t border-blue-400/20" />
          <h2 className="text-6xl md:text-7xl font-extrabold font-serif text-blue-400/20 text-center leading-none tracking-tight py-2">
            PRODUCTION
          </h2>
          <div className="w-full border-t border-blue-400/20" />
          <h2 className="text-6xl md:text-7xl font-extrabold font-serif text-blue-400/20 text-center leading-none tracking-tight py-2">
            DOCUMENTARY
          </h2>
          <div className="w-full border-t border-blue-400/20" />
          <h2 className="text-6xl md:text-7xl font-extrabold font-serif text-blue-400/20 text-center leading-none tracking-tight py-2">
            FILM TV
          </h2>
              <div className="w-full border-t border-blue-400/20" />
        </div>
          <div className="w-full border-t border-blue-400/20" />
      </section> */}
      


       {/* Stacked Text with Horizontal Lines Section */}
       {/* <section className="w-full py-12 flex flex-col items-center">
        <div className="w-full border-t border-black" />
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full border-t border-black" />
          <h2 className="text-6xl md:text-7xl font-extrabold text-black text-center leading-none tracking-tight py-2">
            PRODUCTION
          </h2>
          <div className="w-full border-t border-black" />
          <h2 className="text-6xl md:text-7xl font-extrabold text-black text-center leading-none tracking-tight py-2">
            DOCUMENTARY
          </h2>
          <div className="w-full border-t border-black" />
          <h2 className="text-6xl md:text-7xl font-extrabold text-black text-center leading-none tracking-tight py-2">
            FILM TV
          </h2>
          <div className="w-full border-t border-black" />
        </div>
        <div className="w-full border-t border-black" />
      </section> */}


      {/* Services Section */}
      {/* <Services /> */}
      
    
       {/* Our Process Section */}
       {/* <div className="section-enter">
         <OurProcess />
       </div> */}

         {/* Credits Section */}
      <div className="section-enter">
        <Credits />
      </div>
      

       {/* Contact Section */}
       <div className="section-enter">
         <Contact />
       </div>

     {/* </> */}
    </div>
  );
}
