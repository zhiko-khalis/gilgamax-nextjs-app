"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function KawaTheBlacksmithPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div id="kawa" className="min-h-screen bg-black text-[#d3d2cf] overflow-hidden relative">
      {/* Film Grain Overlay */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none z-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E\")",
          mixBlendMode: "overlay",
        }}
      />

      {/* Vignette Effect */}
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-transparent to-black/60 pointer-events-none z-20"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/kawa the blacksmithhhh.jpg"
            alt="Kawa the Blacksmith Cinematic Backdrop"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/50" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Main Content */}
        <div className="relative z-40 text-left max-w-6xl mx-auto">
          <div
            className={`transition-all duration-2000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1
              className="text-xl md:text-3xl font-black text-center text-[#d3d2cf] mb-6 tracking-wider"
              style={{ fontFamily: "var(--font-adlam)" }}
            >
              THE EMBER CROWN <br /> <span className="text-sm text-gray-300">(Working Title)</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#d3d2cf] to-[#d3d2cf]/50 mx-auto mb-6"></div>
            <h2
              className="text-sm md:text-2xl text-center font-bold text-[#d3d2cf] mt-10 tracking-wide"
              style={{ fontFamily: "var(--font-adlam)" }}
            >
              The Genesis of the Gilgamax Cinematic Universe
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-6 max-w-4xl mx-auto leading-relaxed">
            At the heart of Gilgamax mission is The Ember Crown—a monumental high-fantasy epic action adventure inspired by one of humanity's oldest revolutionary myths.
This grand film launches a new saga: a mythic universe forged in fire, rebellion, and destiny—drawn from the ancient heart of Mesopotamia and envisioned for a global stage.
Written by Omar K. Akraye over more than a decade and co-developed with Hayman Homer, The Ember Crown is the cornerstone of the Gilgamax Cinematic Universe (GCU): an interconnected mythos where ancient resonance meets modern cinematic storytelling.
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mt-6">
              
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="film-strip film-strip-animated" />

      {/* Originality Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl w-full mx-auto">
          <div
            className={`space-y-6 max-w-6xl mx-auto ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3
              className="text-xl md:text-3xl font-black text-[#d3d2cf]"
              style={{ fontFamily: "var(--font-adlam)" }}
            >
              Originality
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Unlike derivative fantasy worlds that recycle medieval Europe, elves, and wizards,
              our story emerges from an authentic revolutionary legend preserved for millennia. It is
              the tale of a mythical hero who rises against tyranny — not with sorcery, but with
              iron, fire, and defiance. Here, the dramatis personae are not superheroes or stock archetypes, but rebels,
              tyrants, kings, and gods — figures born from the cradle of civilization, the very
              birthplace of myth itself. This authenticity roots the saga in historical and
              cultural depth, even as its cinematic reimagining grants it the grandeur and
              spectacle of a global blockbuster.
            </p>
            {/* <p className="text-xl text-gray-300 leading-relaxed font-serif">
              
            </p> */}
          </div>
          {/* <div className="relative w-full h-[28rem] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/gilgamesh.jpg"
              alt="Forged in fire"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-blue-400/20 rounded-full blur-2xl"></div>
          </div> */}
        </div>
      </section>

      {/* Divider */}
      <div className="film-strip" />

      {/* Global Appeal Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl w-full mx-auto">
          <div
            className={`space-y-6 max-w-6xl mx-auto ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <h3
              className="text-xl md:text-3xl font-black text-[#d3d2cf]"
              style={{ fontFamily: "var(--font-adlam)" }}
            >
              Global Appeal and Franchise Potential
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              The IP of this saga's universality lies in its themes: freedom, justice, rebellion, destiny.
              These struggles are not bound by geography; they echo in every society worldwide
  .
            </p>
            <div className="text-gray-200">
              <p className="text-base sm:text-lg md:text-xl mb-3">Moreover, with full ownership of the intellectual property, The Ember Crown holds extraordinary franchise potential:</p>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
                <li>Prequels and sequels</li>
                <li>Prestige television spin-offs</li>
                <li>Animated features and shorts</li>
                <li>Video games and immersive VR worlds</li>
                <li>Collectibles, publishing, and merchandise</li>
              </ul>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              In a market saturated with reboots, sequels, and imitations, our story enters as a wholly
              original saga — a narrative both timeless in mythic depth and timely in human
              resonance.
            </p>
          </div>
          {/* <div className="relative w-full h-[28rem] rounded-xl overflow-hidden shadow-2xl ">
            <Image
              src="/soulseeker.jpg"
              alt="Global appeal"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-cyan-400/20 rounded-full blur-2xl"></div>
          </div> */}
        </div>
      </section>

      {/* Divider */}
      <div className="film-strip film-strip-animated" />

      {/* Why The World Needs Kawa Now */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl w-full mx-auto">
          <div
            className={`space-y-6 max-w-6xl mx-auto ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h3
              className="text-xl md:text-3xl font-black text-[#d3d2cf]"
              style={{ fontFamily: "var(--font-adlam)" }}
            >
              Cultural Worldwide Relevance
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
            The Ember Crown is not just another fantasy. This is a bridge between East and West,
            ancient and modern—offering a fresh mythos in a market saturated by recycled franchises.
            It is a world of prophecy, vengeance, destiny, and defiance. From the mountains of Mesopotamia to the mythic flames of our hero's forge,
            the epic speaks to the eternal battle between tyranny and freedom.
            </p>
            {/* <p className="text-xl text-gray-300 leading-relaxed font-serif">
              From the mountains of Mesopotamia to the mythic flames of Kawa's forge, the saga
              awakens a new global mythology — cinema that is as epic as it is relevant, as
              timeless as it is timely.
            </p> */}
          </div>
          
        </div>
      </section>

      {/* Quote Section */}
      {/* <section className="relative py-24 px-6 bg-gradient-to-t from-black via-gray-900 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <div
            className={`transition-all duration-2000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h4
              className="text-2xl md:text-3xl text-gray-200 italic leading-relaxed font-serif"
            >
              “If Marvel gave us heroes in spandex, and Middle-earth gave us hobbits and dark
              lords — Kawa the Blacksmith gives us a forgotten age of gods and mortals, rebels
              and kings, born in the cradle of civilization.”
            </h4>
            <p className="text-xl md:text-xl text-blue-400 mt-6">
              — Hayman Homer
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
}

