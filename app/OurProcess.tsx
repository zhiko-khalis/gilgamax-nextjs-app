import Image from "next/image";

export default function OurProcess() {
  return (
    <section className="relative w-full h-[100vh] min-h-[600px] overflow-hidden">
      {/* Background Image with Film Crew */}
      <div className="absolute inset-0">
        <Image
          src="/mainCover.PNG"
          alt="Film crew working with RED camera"
          fill
          style={{ objectFit: 'cover' }}
          className="blur-sm"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Black fade at the top */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
        {/* Black fade at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-8 md:px-16 flex items-center justify-between">
          {/* Left Side - OUR PROCESS */}
          <div className="flex-1 max-w-md">
            <h2 className="text-6xl md:text-7xl font-black text-[#d3d2cf] leading-tight" style={{ fontFamily: 'var(--font-papyrus)' }}>
              OPERATIONS
              <br />
              
            </h2>
          </div>

          {/* Right Side - Services List */}
          <div className="flex-1 max-w-2xl ml-8 md:ml-16">
            <div className="space-y-8">
              {/* Top Section */}
              <div className="space-y-4">
                <div className="text-2xl md:text-3xl font-bold font-serif text-[#d3d2cf] tracking-wide">
                  CONTENT STRATEGY
                </div>
                <div className="text-2xl md:text-3xl font-bold font-serif text-[#d3d2cf] tracking-wide">
                  CONCEPT CREATION
                </div>
                <div className="text-2xl md:text-3xl font-bold font-serif text-[#d3d2cf] tracking-wide">
                  SCRIPT & STORYBOARD
                </div>
              </div>

              {/* Middle Section */}
              <div className="space-y-4">
                <div className="text-2xl md:text-3xl font-bold font-serif text-[#d3d2cf] tracking-wide">
                  SHOOTING
                </div>
                <div className="text-2xl md:text-3xl font-bold font-serif text-[#d3d2cf] tracking-wide">
                  AI ANIMATION
                </div>
                <div className="text-2xl md:text-3xl font-bold font-serif text-[#d3d2cf] tracking-wide">
                  MOTION DESIGN
                </div>
              </div>

              {/* Bottom Section */}
              <div className="space-y-4">
                <div className="text-2xl md:text-3xl font-bold font-serif text-[#d3d2cf] tracking-wide">
                  EDITING & COLOR GRADING
                </div>
                <div className="text-2xl md:text-3xl font-bold font-serif text-[#d3d2cf] tracking-wide">
                  VFX & COMPOSITING
                </div>
                <div className="text-2xl md:text-3xl font-bold font-serif text-[#d3d2cf] tracking-wide">
                  MUSIC & SOUND DESIGN
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
