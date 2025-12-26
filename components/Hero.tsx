
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 sm:pt-20 md:pt-24 pb-8 sm:pb-12 flex items-center justify-center overflow-hidden paper-grain">
      <div className="relative z-10 max-w-5xl w-full px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, rotate: -2, y: 40 }}
          animate={{ opacity: 1, rotate: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-1 sm:p-1.5 shadow-xl sm:shadow-2xl border-2 sm:border-4 border-dashed border-swaad-red/10 max-w-4xl mx-auto"
        >
          <div className="border-2 sm:border-[3px] border-double border-swaad-red/30 p-4 sm:p-6 md:p-8 relative">
            {/* Stamp Detail */}
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 md:-top-8 md:-right-8 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-white border-2 sm:border-3 md:border-4 border-dashed border-swaad-red rounded-full shadow-lg flex items-center justify-center z-20 cursor-pointer"
            >
              <div className="text-center">
                <span className="block text-swaad-red text-[8px] sm:text-[9px] md:text-[10px] font-mono uppercase">Via Air Mail</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl font-serif font-black text-ink-blue">7</span>
                <span className="block text-[6px] sm:text-[7px] md:text-[8px] font-bold text-swaad-red mt-0.5 sm:mt-1 uppercase">Swaad Post</span>
              </div>
            </motion.div>

            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <span className="inline-block font-mono text-swaad-red text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] border-b-2 border-swaad-red/10 pb-1 sm:pb-1.5">
                Priority Dispatch
              </span>
              
              <div className="flex justify-center py-1">
                <img 
                  src="/2. Logo png/LogoVertical.png" 
                  alt="Swaad 7" 
                  className="w-36 sm:w-48 md:w-64 lg:w-72 h-auto"
                />
              </div>
              
              <p className="font-serif font-bold text-ink-blue text-base sm:text-lg md:text-xl mb-1 sm:mb-2">
                Subah ka Chai. Shaam ka Swaad.
              </p>
              
              <p className="font-mono text-sub-text text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-2 mb-2 sm:mb-3">
                7 AM – 7 PM | Mumbai ka Roz ka Food Stop
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4 max-w-2xl mx-auto px-2">
                <div className="space-y-2 sm:space-y-2.5 text-left">
                  <p className="font-sans text-text-dark text-xs sm:text-sm md:text-base">Running for a local train?</p>
                  <p className="font-sans text-text-dark text-xs sm:text-sm md:text-base">Office ya college ke bahar bhook lagi?</p>
                  <p className="font-sans text-text-dark text-xs sm:text-sm md:text-base">Hospital ke paas wait chal raha hai?</p>
                </div>
                <div className="space-y-2 sm:space-y-2.5 text-left sm:text-right flex flex-col justify-center">
                  <p className="font-serif font-bold text-ink-blue text-sm sm:text-base md:text-lg">SWAAD7 hai na.</p>
                  <p className="font-mono text-sub-text text-[10px] sm:text-xs">Roz, reliable, full-on swaad.</p>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  animate={{ rotate: [0, -1, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                  className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3 bg-swaad-yellow px-1 py-0.5 pr-3 sm:pr-4 rounded-sm shadow-md border-2 border-swaad-yellow border-dashed group"
                >
                  <div className="bg-swaad-red text-white p-1.5 sm:p-2 md:p-2.5 font-bold font-mono text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wide sm:tracking-widest whitespace-nowrap">
                    Find Truck
                  </div>
                  <span className="font-serif font-bold text-ink-blue text-xs sm:text-sm md:text-base uppercase">Find the Truck Near You</span>
                  <span className="material-symbols-outlined text-ink-blue group-hover:translate-x-1 transition-transform text-base sm:text-lg">arrow_forward</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  animate={{ rotate: [0, 1, -1, 0] }}
                  transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
                  className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3 bg-white px-1 py-0.5 pr-3 sm:pr-4 rounded-sm shadow-md border-2 border-swaad-red border-dashed group"
                >
                  <div className="bg-swaad-red text-white p-1.5 sm:p-2 md:p-2.5 font-bold font-mono text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wide sm:tracking-widest whitespace-nowrap">
                    Follow
                  </div>
                  <span className="font-serif font-bold text-ink-blue text-xs sm:text-sm md:text-base uppercase">Follow Today's Location</span>
                  <span className="material-symbols-outlined text-ink-blue group-hover:translate-x-1 transition-transform text-base sm:text-lg">location_on</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
