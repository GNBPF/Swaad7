
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

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the parent onClick
    const currentIndex = SWAAD_RATH_IMAGES.findIndex(img => img.id === activeId);
    const nextIndex = (currentIndex + 1) % SWAAD_RATH_IMAGES.length;
    setActiveId(SWAAD_RATH_IMAGES[nextIndex].id);
  };

  return (
    <div className="w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14">
      <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] w-full max-w-[1920px] mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        {SWAAD_RATH_IMAGES.map((rath) => (
          <div
            key={rath.id}
            onClick={() => setActiveId(rath.id)}
            className={`
              relative h-full rounded-[20px] sm:rounded-[25px] md:rounded-[30px] lg:rounded-[35px] xl:rounded-[40px] overflow-hidden 
              transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] 
              cursor-pointer group touch-manipulation
              ${activeId === rath.id 
                ? 'flex-[10] md:flex-[4] lg:flex-[4] xl:flex-[4]'
                : 'flex-[2] md:flex-[0.8] lg:flex-[0.8] xl:flex-[0.8] hover:flex-[1] lg:hover:flex-[1]'
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

            {/* Icon Top Right - Now functional for navigation */}
            {activeId === rath.id && (
              <button
                onClick={handleNext}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 lg:top-10 lg:right-10 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center text-white opacity-100 bg-white/10 hover:bg-white/20 active:bg-white/30 transition-all duration-300 cursor-pointer z-10 touch-manipulation min-h-[44px] min-w-[44px]"
                aria-label="Next image"
              >
                <span className="material-symbols-outlined text-lg sm:text-xl md:text-2xl lg:text-3xl">arrow_forward</span>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const SwaadRath: React.FC = () => {
  return (
    <section id="rath" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 bg-ink-blue relative border-y-[4px] sm:border-y-[6px] md:border-y-[8px] lg:border-y-[10px] xl:border-y-[12px] border-double border-swaad-yellow overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-30 mix-blend-overlay"></div>
      
      <div className="max-w-[1920px] mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-12 relative z-10 text-center">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-kora-paper mb-2 sm:mb-3 md:mb-4 lg:mb-5 leading-tight sm:leading-snug md:leading-normal">The Swaad Rath</h2>
        <p className="font-mono text-swaad-yellow text-[9px] sm:text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] lg:tracking-[0.35em] xl:tracking-[0.4em] mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 px-3 sm:px-4">
          Temple of Taste • High Hygiene • High Nostalgia
        </p>
        
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-kora-paper">
          <p className="font-serif font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight sm:leading-snug md:leading-relaxed lg:leading-relaxed">
            Mumbai rukta nahi aur hum bhi nahi.
          </p>
          <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 flex-wrap px-2">
            <img 
              src="/logos/Vector-2.png" 
              alt="SWAAD7" 
              className="h-4 sm:h-5 md:h-6 lg:h-7 xl:h-8 w-auto inline-block"
            />
            <span>ek all-day food truck hai jo subah 7 baje se shaam 7 baje tak fresh, familiar aur fast food serve karta hai.</span>
          </p>
          <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
            Local commuters, students, office-goers sabke daily schedule ke hisaab se bana hai.
          </p>
          <p className="font-serif font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8 leading-tight sm:leading-snug md:leading-relaxed">
            Ek cart. Ek stop. Full swaad.
          </p>
        </div>

        <SwaadRathCarousel />

        {/* Where You'll Find Us Section */}
        <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 max-w-4xl mx-auto px-3 sm:px-4">
          <h3 className="font-serif font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-kora-paper mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 leading-tight sm:leading-snug md:leading-normal">
            Jahan Mumbai Hamesha Hota Hai
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 text-left">
            <div className="flex items-start gap-3 sm:gap-3.5 md:gap-4">
              <span className="material-symbols-outlined text-swaad-yellow text-2xl sm:text-2.5xl md:text-3xl lg:text-4xl xl:text-5xl flex-shrink-0 mt-0.5">train</span>
              <div>
                <p className="font-sans text-kora-paper text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold leading-relaxed">Local train & metro stations ke bahar</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-3.5 md:gap-4">
              <span className="material-symbols-outlined text-swaad-yellow text-2xl sm:text-2.5xl md:text-3xl lg:text-4xl xl:text-5xl flex-shrink-0 mt-0.5">local_hospital</span>
              <div>
                <p className="font-sans text-kora-paper text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold leading-relaxed">Hospitals ke aas-paas</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-3.5 md:gap-4">
              <span className="material-symbols-outlined text-swaad-yellow text-2xl sm:text-2.5xl md:text-3xl lg:text-4xl xl:text-5xl flex-shrink-0 mt-0.5">school</span>
              <div>
                <p className="font-sans text-kora-paper text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold leading-relaxed">Colleges & universities ke near</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-3.5 md:gap-4">
              <span className="material-symbols-outlined text-swaad-yellow text-2xl sm:text-2.5xl md:text-3xl lg:text-4xl xl:text-5xl flex-shrink-0 mt-0.5">business</span>
              <div>
                <p className="font-sans text-kora-paper text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold leading-relaxed">Offices & busy business streets</p>
              </div>
            </div>
          </div>
          <p className="font-serif text-kora-paper text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-6 sm:mt-7 md:mt-8 lg:mt-9 xl:mt-10 text-center leading-relaxed">
            Log chal rahe ho, ruk rahe ho, wait kar rahe ho<br className="hidden sm:block" />
            <span className="font-bold flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 mt-6 sm:mt-5">
              <img 
                src="/logos/Vector-2.png" 
                alt="SWAAD7" 
                className="h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9 w-auto"
              />
              <span>paas hi milega.</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SwaadRath;
