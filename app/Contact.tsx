"use client";
import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [showScrollButton, setShowScrollButton] = useState(false);
  const contactRef = useRef<HTMLElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Email submitted:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (contactRef.current) {
        const rect = contactRef.current.getBoundingClientRect();
        // Show button when contact section is in view (when top of contact section is visible)
        setShowScrollButton(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Check on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={contactRef} className="relative w-full min-h-screen bg-black text-[#d3d2cf] flex flex-col items-center justify-center py-16 px-8">
      
      {/* Main Content */}
      <div className="w-full max-w-4xl text-center space-y-16">
        {/* OUR PROCESS Section */}
        {/* <div className="space-y-8">
          <h2 className="text-6xl md:text-7xl font-bold text-[#d3d2cf] uppercase tracking-wider">
            OUR PROCESS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-[#d3d2cf] uppercase tracking-wide">
                CONTENT
              </h3>
              <div className="space-y-2 text-lg md:text-xl text-[#d3d2cf] uppercase tracking-wide">
                <div>CONTENT STRATEGY</div>
                <div>CONCEPT CREATION</div>
                <div>SCRIPT & STORYBOARD</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-[#d3d2cf] uppercase tracking-wide">
                SHOOTING
              </h3>
              <div className="space-y-2 text-lg md:text-xl text-[#d3d2cf] uppercase tracking-wide">
                <div>AI ANIMATION</div>
                <div>MOTION DESIGN</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-[#d3d2cf] uppercase tracking-wide">
                EDITING
              </h3>
              <div className="space-y-2 text-lg md:text-xl text-[#d3d2cf] uppercase tracking-wide">
                <div>VFX & COMPOSITING</div>
                <div>MUSIC & SOUND DESIGN</div>
                <div>VFX & COMPOSITING</div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Company Name */}
        <div className="py-6 sm:py-8">
          <img
            src="/finalize logo no bggg.svg"
            alt="GILGAMAX Logo"
            className="mx-auto translate-y-6 sm:translate-y-8 md:translate-y-10 h-24 sm:h-28 md:h-32 w-auto max-w-[200px] sm:max-w-[250px] md:max-w-none"
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Newsletter Subscription */}
        <div className="space-y-6">
          <p className="text-xl md:text-xl text-[#d3d2cf]  tracking-wide" style={{ fontFamily: 'var(--font-adlam)' }}>
          Enter our world: filmmaker letters, first-look trailers, creative conversations, merchandise, and other exclusive releases.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto" style={{ fontFamily: 'var(--font-adlam)' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full sm:flex-1 px-4 py-3 bg-gray-800 text-[#d3d2cf] placeholder-gray-400 border border-gray-600 rounded-none focus:outline-none focus:border-[#d3d2cf] transition-colors"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-[#d3d2cf] text-black font-bold  tracking-wide hover:bg-gray-200 transition-colors"
              style={{ fontFamily: 'var(--font-adlam)' }}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-lg md:text-xl">
            <a href="#" className="text-[#d3d2cf] hover:text-gray-300 transition-colors  tracking-wide" style={{ fontFamily: 'var(--font-adlam)' }}>
            Youtube
            </a>
            <a href="#" className="text-[#d3d2cf] hover:text-gray-300 transition-colors  tracking-wide" style={{ fontFamily: 'var(--font-adlam)' }}>
            Instagram
            </a>
            <a href="#" className="text-[#d3d2cf] hover:text-gray-300 transition-colors  tracking-wide" style={{ fontFamily: 'var(--font-adlam)' }}>
            Facebook
            </a>
            <a href="#" className="text-[#d3d2cf] hover:text-gray-300 transition-colors  tracking-wide" style={{ fontFamily: 'var(--font-adlam)' }}>
            LinkedIn
            </a>
            <a href="#" className="text-[#d3d2cf] hover:text-gray-300 transition-colors  tracking-wide" style={{ fontFamily: 'var(--font-adlam)' }}>
            Twitter
            </a>
          </div>
        </div>

        {/* Explore More Button */}
        {/* <div className="mt-12 flex justify-center">
          <a
            href="/Contact"
            className="group relative transition-all duration-300 transform hover:scale-105 hover:opacity-90"
          >
            <img 
              src="/contact button.svg" 
              alt="Explore More" 
              className="w-auto h-12 transition-all duration-300 group-hover:brightness-110"
            />
          </a>
        </div> */}

        {/* Horizontal Line */}
        <div className=" flex justify-center">
          <div className="w-[80%] h-px bg-[#d3d2cf]/30"></div>
        </div>

        {/* Copyright */}
        <div className="pt-8">
          <p className="text-sm md:text-base text-[#d3d2cf] text-center">
            © 2025 Gilgamax. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button - Only shows when contact section is in view */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#d3d2cf] rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-black">
            <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </section>
  );
}
