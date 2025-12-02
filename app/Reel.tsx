import React from 'react';
import Image from 'next/image';

function Reel() {
  return (
    // <div className="relative w-full h-dvh flex flex-col items-center justify-center overflow-hidden p-10" >
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden" >
      
      {/* <div className="w-full flex justify-between items-center px-8 py-2 text-[#d3d2cf] text-sm font-mono tracking-widest" style={{letterSpacing:'1px'}}>
        {[...Array(6)].map((_, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="text-lg">&#9658;&#9658;&#9658;</span> PLAY VIDEO
          </span>
        ))}
      </div> */}
      {/* Video/Image with Overlay */}
      {/* <div className="relative w-full flex-1 flex items-center justify-center" style={{ minHeight: '340px', maxHeight: '520px' }}></div> */}
      <div className="relative w-full h-full flex items-center justify-center">
        <video
          src="/reel.MP4"
          autoPlay
          loop
          muted
          playsInline
          className="z-0 absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'contrast(1.1) brightness(0.95) blur(0.5px)' }}
        />
        {/* Top Black Fade Overlay */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-5" />
        
        {/* Bottom Black Fade Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-5" />
        
        {/* Overlay Centered Play Button and Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="flex items-center gap-6">
            <span className="text-[#d3d2cf] text-5xl md:text-6xl font-black tracking-wider" style={{ fontFamily: 'var(--font-papyrus)' }}>GLGAMAX</span>
            <span className="bg-[#d3d2cf]/80 rounded-md p-2 flex items-center justify-center shadow-lg" style={{ width: 64, height: 64 }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#d3d2cf" fillOpacity="0.18" />
                <polygon points="16,13 28,20 16,27" fill="#222" />
              </svg>
            </span>
            <span className="text-[#d3d2cf] text-5xl md:text-6xl font-extrabold tracking-wider"></span>
          </div>
        </div>
      </div>
      
      

      {/* <div className="w-full flex justify-between items-center px-8 py-2 text-[#d3d2cf] text-sm font-mono tracking-widest" style={{letterSpacing:'1px'}}>
        {[...Array(6)].map((_, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="text-lg">&#9658;&#9658;&#9658;</span> PLAY VIDEO
          </span>
        ))}
      </div> */}
    </div>
  );
}

export default Reel;