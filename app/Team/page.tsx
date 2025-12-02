'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  shortBio: string;
  fullBio: string;
  achievements?: string[];
  education?: string;
  notableWorks?: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 'hayman',
    name: 'Hayman Homer',
    role: 'Co-Founder & Creative Director',
    image: '/gallery36_55.jpg',
    shortBio: 'Hayman Homer is an American actor, film producer, and co-founder of Gilgamax, dedicated to resurrecting the epic mythologies of Mesopotamia for modern audiences. Notably, he made history as the first Kurd to portray Jesus Christ on screen in The Messiah (2024) and has starred in war drama films such as Aman (2024), alongside appearances in many global campaign commercials, Hollywood and country music videos.',
    fullBio: 'Hayman Homer is an American actor, film producer, and co-founder of Gilgamax, dedicated to resurrecting the epic mythologies of Mesopotamia for modern audiences. Notably, he made history as the first Kurd to portray Jesus Christ on screen in The Messiah (2024) and has starred in war drama films such as Aman (2024), alongside appearances in many global campaign commercials, Hollywood and country music videos. At Gilgamax, Hayman is the engine of operations, the central force of execution and serves as the intellectual architect behind the Gilgamax Cinematic Universe (GCU). Through this visionary endeavor, he has co-developed the comprehensive (GCU) based on the heroic sagas, legends, and mythologies of Mesopotamia—narratives that are not only foundational to civilization but also conspicuously absent from the canon of global cinema. His performances, imbued with emotional depth and authenticity, exemplify a rare synthesis of cultural heritage and contemporary artistic vision. In this way, Hayman stands as a vanguard of epic filmmaking and cultural revival, breathing new life into stories that bridge antiquity with modernity, myth with meaning, and art with identity.',
    achievements: [
      'First Kurd to portray Jesus Christ on screen in The Messiah (2024)',
      'Starred in war drama Aman (2024)',
      'Featured in global campaign commercials',
      'Appearances in Hollywood and country music videos',
      'Co-founder of Gilgamax Studios'
    ],
    education: 'Professional acting and production training',
    notableWorks: [
      'The Messiah (2024)',
      'Aman (2024)',
      'Various global commercial campaigns',
      'Music video appearances'
    ]
  },

  {
    id: 'najat',
    name: 'Najat Abdullah',
    role: 'Co-Founder & Film Producer',
    image: '/IMG_2822.JPG',
    shortBio: 'Najat Abdullah is a distinguished Kurdish-American cultural advisor and film producer whose career bridges public service and cinematic innovation. Over two decades, he has shaped cultural diplomacy as the Director of Culture at the Kurdistan Regional Government (KRG) Representation in Washington, D.C., and presently serves as Senior Cultural Advisor to the Deputy Prime Minister of Kurdistan.',
    fullBio: 'Najat Abdullah is a distinguished Kurdish-American cultural advisor and film producer whose career bridges public service and cinematic innovation. Over two decades, he has shaped cultural diplomacy as the Director of Culture at the Kurdistan Regional Government (KRG) Representation in Washington, D.C., and presently serves as Senior Cultural Advisor to the Deputy Prime Minister of Kurdistan. At Gilgamax, where he serves as a producer, Najat channels his expertise in international relations, cultural affairs, and strategic vision into the art of storytelling. He has been instrumental in producing works that fuse heritage with contemporary cinematic expression, translating ancient narratives into films that resonate across cultures. With his involvement, Gilgamax is pioneering a new era of bringing the epic myths of Mesopotamia to the forefront of global cinema.',
    achievements: [
      'Director of Culture at KRG Representation in Washington, D.C.',
      'Senior Cultural Advisor to the Deputy Prime Minister of Kurdistan Region',
      'Over 20 years of experience in cultural diplomacy',
      'Co-founder of Gilgamax Studios'
    ],
    education: 'Extensive background in cultural studies and international relations',
    notableWorks: [
      'Cultural diplomacy initiatives bridging Kurdish and American communities',
      'Strategic development of Gilgamax cinematic universe',
      'Production of films celebrating Mesopotamian heritage'
    ]
  },
  
  {
    id: 'omer',
    name: 'Omer K. Akraye',
    role: 'Co-Founder & Film Director',
    image: '/omerrr.jpg',
    shortBio: 'Omar K. Akraye is a visionary writer, director, and co-founder of Gilgamax, where he leads the company’s original content development. Akraye is recognized for a creative prowess that rivals Hollywood’s finest, distinguished by his ability to marry mythic imagination with contemporary cinematic form.',
    fullBio: 'Omar K. Akraye is a visionary writer, director, and co-founder of Gilgamax, where he leads the company’s original content development. Akraye is recognized for a creative prowess that rivals Hollywood’s finest, distinguished by his ability to marry mythic imagination with contemporary cinematic form. With over a decade of experience writing, directing, and producing international projects, he has established himself as one of the youngest yet most accomplished creative voices to emerge from the Middle East. His screenplays—deeply rooted in the heroic legacies of ancient civilizations yet articulated through a modern global sensibility—breathe new life into cultural narratives while capturing the attention of leading Hollywood studios with their originality and vision. Beyond his achievements as a writer, Akraye has cultivated expertise across the production pipeline, from CGI and digital visual architecture to large-scale cinematic design. His rare combination of literary craft, cinematic innovation, and technical fluency allows him to construct narratives and worlds of both artistic depth and visual grandeur, positioning Gilgamax at the forefront of twenty-first-century storytelling.',
    achievements: [
      'Chief Creative Officer of Gilgamax Studios',
      'Visionary writer and director',
      'Creator of original content development strategies',
      'Expert in mythic storytelling and contemporary cinema'
    ],
    education: 'Advanced training in screenwriting, directing, and creative development',
    notableWorks: [
      'Original content development for Gilgamax Cinematic Universe',
      'Screenplay and narrative architecture for multiple projects',
      'Creative direction of mythic storytelling initiatives'
    ]
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="min-h-screen text-[#d3d2cf]">
      <Navbar />
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 gap-y-6 max-w-7xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-black rounded-2xl overflow-hidden border border-gray-900 shadow-2xl">
              <div className="flex flex-col lg:flex-row h-full">
                {/* Portrait */}
                <div className="lg:w-1/2 relative">
                  <div className="aspect-[3/4] bg-gray-900 flex items-center justify-center">
                    <Image
                      src={member.image}
                      alt={`${member.name} Portrait`}
                      className="rounded-2xl object-cover w-full h-full mx-auto"
                      fill
                    />
                  </div>
                </div>
                
                {/* Bio Section */}
                <div className="lg:w-1/2 bg-black p-10 flex flex-col justify-center min-h-[400px]">
                  <div className="mb-6">
                    <span className="text-[10px] uppercase tracking-[0.1em] text-[#d3d2cf] font-bold" style={{ fontFamily: 'var(--font-adlam)' }}>
                      {member.role}
                    </span>
                  </div>
                  <div className="mb-8">
                    <h2 className="text-xl lg:text-2xl font-black uppercase leading-[0.85] tracking-wide" 
                        style={{ fontFamily: 'var(--font-adlam)' }}>
                      {member.name}
                    </h2>
                  </div>
                  <div className="text-[#d3d2cf] font-serif leading-relaxed text-[13px]">
                    <p>{member.shortBio}</p>
                  </div>
                  <div className="mt-6">
                    <button 
                      onClick={() => setSelectedMember(member)}
                      className="px-4 py-2 font-serif text-xs uppercase tracking-widest border border-gray-700 rounded-full hover:bg-[#d3d2cf] hover:text-black transition"
                    >
                      More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}




        </div>
      </div>

      {/* Detail Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-gray-900 rounded-2xl max-w-4xl w-full border border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 bg-black/70 text-[#d3d2cf] p-2 rounded-full hover:bg-black/90 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
              
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Image */}
                <div className="relative h-96 md:h-full min-h-[400px]">
                  <Image
                    src={selectedMember.image}
                    alt={`${selectedMember.name} Portrait`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                
                {/* Details */}
                <div>
                  <div className="mb-4">
                    <span className="text-[10px] uppercase font-serif tracking-[0.2em] text-[#d3d2cf] font-medium">
                      {selectedMember.role}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black uppercase leading-[0.85] tracking-wide mb-6" 
                      style={{ fontFamily: 'var(--font-adlam)' }}>
                    {selectedMember.name}
                  </h2>
                  
                  {/* Full Bio */}
                  <div className="mb-6">
                    <p className="text-[#d3d2cf] font-serif leading-relaxed text-sm">
                      {selectedMember.fullBio}
                    </p>
                  </div>

                  {/* {selectedMember.achievements && selectedMember.achievements.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-[#d3d2cf] mb-3 uppercase tracking-wide" 
                          style={{ fontFamily: 'var(--font-adlam)' }}>
                        Key Achievements
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-[#d3d2cf] font-serif text-sm">
                        {selectedMember.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )} */}

                  {/* {selectedMember.education && (
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-[#d3d2cf] mb-2 uppercase tracking-wide" 
                          style={{ fontFamily: 'var(--font-adlam)' }}>
                        Education & Background
                      </h3>
                      <p className="text-[#d3d2cf] font-serif text-sm">
                        {selectedMember.education}
                      </p>
                    </div>
                  )}

                  {selectedMember.notableWorks && selectedMember.notableWorks.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-[#d3d2cf] mb-3 uppercase tracking-wide" 
                          style={{ fontFamily: 'var(--font-adlam)' }}>
                        Notable Works
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-[#d3d2cf] font-serif text-sm">
                        {selectedMember.notableWorks.map((work, index) => (
                          <li key={index}>{work}</li>
                        ))}
                      </ul>
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}