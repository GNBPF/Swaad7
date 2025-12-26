
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SWAAD_RATH_IMAGES = [
  {
    id: '1',
    image: '/swaadRath1.webp' // Replace with your actual image path
  },
  {
    id: '2',
    image: '/swaadRath2.webp' // Replace with your actual image path
  },
  {
    id: '3',
    image: '/swaadRath3.webp' // Replace with your actual image path
  },
  {
    id: '4',
    image: '/swaadRath4.webp' // Replace with your actual image path
  },
  {
    id: '5',
    image: '/swaadRath5.webp' // Replace with your actual image path
  }
];

const SwaadRathCarousel: React.FC = () => {
  const [activeId, setActiveId] = useState('1');

  return (
    <div className="w-full mt-8 sm:mt-12">
      <div className="flex flex-col md:flex-row gap-4 h-[600px] w-full max-w-[1400px] mx-auto px-4">
        {SWAAD_RATH_IMAGES.map((rath) => (
          <div
            key={rath.id}
            onClick={() => setActiveId(rath.id)}
            className={`
              relative h-full rounded-[40px] overflow-hidden 
              transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] 
              cursor-pointer group
              ${activeId === rath.id 
                ? 'flex-[10] md:flex-[4]'
                : 'flex-[2] md:flex-[0.8] hover:flex-[1]'
              }
            `}
          >
            {/* Background Image */}
            <img 
              src={rath.image} 
              alt={`Swaad Rath ${rath.id}`}
              className={`
                absolute inset-0 w-full h-full object-cover transition-transform duration-1000
                ${activeId === rath.id ? 'scale-100' : 'scale-150 grayscale group-hover:grayscale-0'}
              `}
            />

            {/* Dark Overlay - Only visible when active or hovered */}
            <div className={`
              absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent 
              transition-opacity duration-500
              ${activeId === rath.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}
            `} />

            {/* Icon Top Right */}
            <div className={`
              absolute top-8 right-8 w-12 h-12 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center text-white
              transition-all duration-500
              ${activeId === rath.id ? 'opacity-100 rotate-45 bg-white/10' : 'opacity-0 scale-50'}
            `}>
              <span className="material-symbols-outlined text-xl sm:text-2xl transform rotate-[-45deg]">arrow_forward</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SwaadRath: React.FC = () => {
  return (
    <section id="rath" className="py-16 sm:py-24 md:py-32 bg-ink-blue relative border-y-[8px] sm:border-y-[12px] border-double border-swaad-yellow overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-30 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-kora-paper mb-3 sm:mb-4">The Swaad Rath</h2>
        <p className="font-mono text-swaad-yellow text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-6 sm:mb-8 px-4">
          Temple of Taste • High Hygiene • High Nostalgia
        </p>
        
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4 sm:space-y-6 text-kora-paper">
          <p className="font-serif font-bold text-xl sm:text-2xl md:text-3xl leading-relaxed">
            Mumbai rukta nahi — aur hum bhi nahi.
          </p>
          <p className="font-sans text-base sm:text-lg md:text-xl leading-relaxed">
            SWAAD7 ek all-day food truck hai jo subah 7 baje se shaam 7 baje tak fresh, familiar aur fast food serve karta hai.
          </p>
          <p className="font-sans text-base sm:text-lg md:text-xl leading-relaxed">
            Local commuters, students, office-goers — sabke daily schedule ke hisaab se bana hai.
          </p>
          <p className="font-serif font-bold text-lg sm:text-xl md:text-2xl mt-6 sm:mt-8">
            Ek cart. Ek stop. Full swaad.
          </p>
        </div>

        <SwaadRathCarousel />

        {/* Where You'll Find Us Section */}
        <div className="mt-16 sm:mt-20 md:mt-24 max-w-4xl mx-auto">
          <h3 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-kora-paper mb-6 sm:mb-8">
            Jahan Mumbai Hamesha Hota Hai
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-left">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-swaad-yellow text-3xl sm:text-4xl flex-shrink-0">train</span>
              <div>
                <p className="font-sans text-kora-paper text-base sm:text-lg md:text-xl font-semibold mb-2">Local train & metro stations ke bahar</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-swaad-yellow text-3xl sm:text-4xl flex-shrink-0">local_hospital</span>
              <div>
                <p className="font-sans text-kora-paper text-base sm:text-lg md:text-xl font-semibold mb-2">Hospitals ke aas-paas</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-swaad-yellow text-3xl sm:text-4xl flex-shrink-0">school</span>
              <div>
                <p className="font-sans text-kora-paper text-base sm:text-lg md:text-xl font-semibold mb-2">Colleges & universities ke near</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-swaad-yellow text-3xl sm:text-4xl flex-shrink-0">business</span>
              <div>
                <p className="font-sans text-kora-paper text-base sm:text-lg md:text-xl font-semibold mb-2">Offices & busy business streets</p>
              </div>
            </div>
          </div>
          <p className="font-serif text-kora-paper text-lg sm:text-xl md:text-2xl mt-8 sm:mt-10 text-center leading-relaxed">
            Log chal rahe ho, ruk rahe ho, wait kar rahe ho —<br />
            <span className="font-bold">SWAAD7 paas hi milega.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SwaadRath;
