'use client';

import { useEffect, useState } from 'react';

export default function Credits() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const credits = [
    "SERVICES",
    // "GILGAMAX STUDIOS",
    "",
    "FILM PRODUCTION",
    // "ANY",
    "",
    "SCREENPLAY DEVELOPMENT",
    // "SARAH CHEN",
    // "MICHAEL RODRIGUEZ",
    "",
    "CINEMATIC UNIVERSE BUILDING",
    // "JAMES WILSON",
    // "LISA PARK",
    "",
    "CREATIVE CONSULTING & STORY DEVELOPMENT",
    // "DAVID KIM",
    // "MARIA SANTOS",
    "",
    "CASTING & TALENT DEVELOPMENT",
    // "ROBERT TAYLOR",
    // "ANNA KOWALSKI",
    "",
    "CONTENT & IP CREATION",
    // "THOMAS BROWN",
    // "EMMA DAVIS",
    "",
    "",
    "",
    "",
    "",

    "SERVICES",
    // "GILGAMAX STUDIOS",
    "",
    "FILM PRODUCTION",
    // "ANY",
    "",
    "SCREENPLAY DEVELOPMENT",
    // "SARAH CHEN",
    // "MICHAEL RODRIGUEZ",
    "",
    "CINEMATIC UNIVERSE BUILDING",
    // "JAMES WILSON",
    // "LISA PARK",
    "",
    "CREATIVE CONSULTING & STORY DEVELOPMENT",
    // "DAVID KIM",
    // "MARIA SANTOS",
    "",
    "CASTING & TALENT DEVELOPMENT",
    // "ROBERT TAYLOR",
    // "ANNA KOWALSKI",
    "",
    "CONTENT & IP CREATION",
    // "THOMAS BROWN",
    // "EMMA DAVIS",
    "",

    // "MUSIC COMPOSER",
    // "ALEX RIVERA",
    // "SOPHIE MARTIN",
    // "",
    // "COLORIST",
    // "KEVIN LEE",
    // "RACHEL GREEN",
    // "",
    // "PRODUCTION DESIGNER",
    // "NICOLE WHITE",
    // "CARLOS MENDEZ",
    // "",
    // "COSTUME DESIGNER",
    // "JESSICA TURNER",
    // "MARCUS JOHNSON",
    // "",
    // "SPECIAL THANKS",
    // "THE ENTIRE GILGAMAX TEAM",
    // "OUR AMAZING CLIENTS",
    // "INSPIRATION FROM THE COMMUNITY",
    // "",
    "© 2024 GILGAMAX STUDIOS",
    "ALL RIGHTS RESERVED"
  ];

  return (
    <section className="relative w-full h-[100vh] min-h-[500px] sm:min-h-[600px] overflow-hidden bg-black">
      {/* Top Center UI Element */}
      <div className="absolute top-4 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="focus-indicator">
          <svg className="w-20 h-3 sm:w-24 sm:h-4 md:w-[120px] md:h-[18px]" viewBox="0 0 120 18" fill="none" preserveAspectRatio="xMidYMid meet">
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
      </div>

      {/* Film strip borders */}
      {/* <div className="film-strip absolute top-0 left-0 right-0 z-20"></div>
      <div className="film-strip absolute bottom-0 left-0 right-0 z-20"></div> */}
      
      {/* Perforated edges */}
      {/* <div className="absolute left-0 top-0 bottom-0 w-8 z-10">
        <div className="h-full flex flex-col justify-between py-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-600 rounded-full"></div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-8 z-10">
        <div className="h-full flex flex-col justify-between py-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-600 rounded-full ml-auto"></div>
          ))}
        </div>
      </div> */}

      

      {/* Rolling Credits */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <div 
          className={`credits-container transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="credits-roll">
            {credits.map((credit, index) => (
              <div 
                key={index} 
                className={`credits-line ${
                  credit === "" ? 'credits-spacing' : 
                  credit.includes('©') || credit.includes('ALL RIGHTS') ? 'credits-copyright' :
                  credit.includes('SERVICES') || credit.includes('SERVICES') || 
                  credit.includes('PRODUCER') || credit.includes('CINEMATOGRAPHER') || 
                  credit.includes('EDITOR') || credit.includes('VFX SUPERVISOR') || 
                  credit.includes('SOUND DESIGNER') || credit.includes('MUSIC COMPOSER') || 
                  credit.includes('COLORIST') || credit.includes('PRODUCTION DESIGNER') || 
                  credit.includes('COSTUME DESIGNER') || credit.includes('SPECIAL THANKS') ? 'credits-title' : 'credits-name'
                }`}
              >
                {credit}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Center UI Element */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="focus-indicator">
          <svg className="w-20 h-3 sm:w-24 sm:h-4 md:w-[120px] md:h-[18px]" viewBox="0 0 120 18" fill="none" preserveAspectRatio="xMidYMid meet">
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
      </div>


      {/* font-family: var(--font-screamer), Arial, Helvetica, sans-serif; */}

      <style jsx>{`
        .credits-container {
          position: absolute;
          top: 60px;
          left: 0;
          right: 0;
          bottom: 60px;
          overflow: hidden;
        }

        .credits-roll {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          max-width: 600px;
          text-align: center;
          animation: rollUp 25s linear infinite;
          margin-top: 60px;
          margin-bottom: 60px;
        }

        .credits-line {
          margin-bottom: 1.5rem;
          font-family: var(--font-adlam), Arial, Helvetica, sans-serif;
          
        }

        .credits-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #d3d2cf;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .credits-name {
          font-size: 1.2rem;
          color: #cccccc;
          letter-spacing: 0.05em;
        }

        .credits-copyright {
          font-size: 1rem;
          color: #888888;
          font-style: italic;
        }

        .credits-spacing {
          height: 2rem;
        }

        @keyframes rollUp {
          0% {
            transform: translateX(-50%) translateY(0);
          }
          100% {
            transform: translateX(-50%) translateY(-100%);
          }
        }

        @media (max-width: 768px) {
          .credits-roll {
            width: 90%;
          }
          
          .credits-title {
            font-size: 1rem;
          }
          
          .credits-name {
            font-size: 0.9rem;
          }

          .credits-copyright {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .credits-title {
            font-size: 0.9rem;
          }
          
          .credits-name {
            font-size: 0.8rem;
          }

          .credits-copyright {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
