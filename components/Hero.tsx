
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 flex items-center justify-center overflow-hidden paper-grain">
      <div className="relative z-10 max-w-5xl w-full px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, rotate: -2, y: 40 }}
          animate={{ opacity: 1, rotate: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-1.5 sm:p-2 shadow-xl sm:shadow-2xl border-2 sm:border-4 border-dashed border-swaad-red/10 max-w-4xl mx-auto"
        >
          <div className="border-2 sm:border-[3px] border-double border-swaad-red/30 p-6 sm:p-10 md:p-16 relative">
            {/* Stamp Detail */}
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 md:-top-10 md:-right-10 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 bg-white border-2 sm:border-3 md:border-4 border-dashed border-swaad-red rounded-full shadow-lg flex items-center justify-center z-20 cursor-pointer"
            >
              <div className="text-center">
                <span className="block text-swaad-red text-[8px] sm:text-[9px] md:text-[10px] font-mono uppercase">Via Air Mail</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl font-serif font-black text-ink-blue">7</span>
                <span className="block text-[6px] sm:text-[7px] md:text-[8px] font-bold text-swaad-red mt-0.5 sm:mt-1 uppercase">Swaad Post</span>
              </div>
            </motion.div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <span className="inline-block font-mono text-swaad-red text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] border-b-2 border-swaad-red/10 pb-1.5 sm:pb-2">
                Priority Dispatch
              </span>
              
              <div className="flex justify-center py-2">
                <img 
                  src="/2. Logo png/LogoVertical.png" 
                  alt="Swaad 7" 
                  className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto"
                />
              </div>
              
              <p className="font-mono text-sub-text text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-2">
                Mumbai’s soul, served on wheels. Bringing the warmth of home to the speed of the street.
              </p>

              <div className="pt-6 sm:pt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  animate={{ rotate: [0, -1, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                  className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-3 md:gap-4 bg-swaad-yellow px-1 py-1 pr-4 sm:pr-6 rounded-sm shadow-md border-2 border-swaad-yellow border-dashed group"
                >
                  <div className="bg-swaad-red text-white p-2 sm:p-2.5 md:p-3 font-bold font-mono text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wide sm:tracking-widest whitespace-nowrap">
                    Speed Post
                  </div>
                  <span className="font-serif font-bold text-ink-blue text-sm sm:text-base md:text-lg uppercase">Track the Rath</span>
                  <span className="material-symbols-outlined text-ink-blue group-hover:translate-x-1 transition-transform text-lg sm:text-xl">arrow_forward</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="hidden sm:flex absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-1 opacity-40"
      >
        <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest">Peel to Open</span>
        <span className="material-symbols-outlined text-lg sm:text-xl">keyboard_double_arrow_down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
