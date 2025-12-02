import Image from "next/image";

export default function About() {
  return (
    <section className="relative bg-black flex flex-col md:flex-row items-start justify-start w-full mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:pl-10 gap-6 md:gap-10 overflow-hidden">
      {/* Black fade at the top */}
      {/* <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-20"></div> */}
      
      {/* Black fade at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20"></div>
      
      {/* Background Image with Opacity */}
      {/* <div className="absolute top-0 left-0 right-0 h-[35vh] z-0">
        <Image
          src="/NEWSTONEPHOTOO.jpg"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-80"
          priority
        />
      </div> */}
      
      {/* Content with higher z-index */}
      <div className="relative z-10 flex flex-col gap-6 w-full">
      {/* Text Section */}
      <div className="flex flex-col gap-6">

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] uppercase font-bold mb-4 md:mb-6 text-blue-400 flex items-center gap-4" style={{ fontFamily: 'var(--font-papyrus)' }}>
        
        <span className="leading-tight md:leading-18 flex items-center gap-4">
          
          <span>
            {/* <div className="flex items-center justify-center">
          
            This is not just filmmaking.
            </div> */}

            
          </span>
        </span>
       
      </h2>

        <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full">
        {/* <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#d3d2cf] text-center">
          VISUALIZE THE IMPOSSIBLE
        </h2> */}
       
        <p className="text-base sm:text-lg md:text-xl text-[#d3d2cf]/65 mt-0 md:mt-0 max-w-7xl leading-relaxed px-2 sm:px-0" style={{ fontFamily: 'var(--font-adlam)' }}>
        Gilgamax is an American film production company founded in Los Angeles by Hayman Homer,
        Najat Abdullah, and Omar K. Akraye—three creators whose Mesopotamian heritage anchors a singular ambition: to bring the world's oldest epics into the language of contemporary cinema.
        From the hills of Hollywood to the mythic geographies of Ancient Mesopotamia and Media, Gilgamax develops works that marry epic scale with human intimacy, fusing modern cinematic technique with the enduring power of ancestral narrative.
        The result is a slate of stories that feel at once timeless, culturally rooted, and unmistakably new.
        </p>

        <div className="flex-shrink-0 w-full md:w-auto">
          <Image
            src="/company office png.png"
            alt="Gilgamax Office"
            width={500}
            height={350}
            className="rounded-lg object-cover w-full max-w-full md:max-w-[500px] h-auto"
            quality={100}
          />
        </div>
       
      </div>
      {/* Image Section */}
      
      </div>

      </div>
      </div>

    </section>
  );
} 