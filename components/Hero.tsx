
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-[72px] sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-14 flex items-center justify-center overflow-hidden paper-grain min-h-[calc(100vh-72px)] sm:min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-88px)]">
      <div className="relative z-10 max-w-[1920px] w-full px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, rotate: -2, y: 40 }}
          animate={{ opacity: 1, rotate: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-1 sm:p-1.5 md:p-2 shadow-xl sm:shadow-2xl md:shadow-2xl border-2 sm:border-3 md:border-4 border-dashed border-swaad-red/10 max-w-4xl mx-auto"
        >
          <div className="border-2 sm:border-[2.5px] md:border-[3px] border-double border-swaad-red/30 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10 relative">
            {/* Stamp Detail */}
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-5 md:-right-5 lg:-top-6 lg:-right-6 xl:-top-8 xl:-right-8 2xl:-top-10 2xl:-right-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 bg-white border-2 sm:border-[2.5px] md:border-3 lg:border-4 border-dashed border-swaad-red rounded-full shadow-lg flex items-center justify-center z-20 cursor-pointer"
            >
              <div className="text-center">
                <span className="block text-swaad-red text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] xl:text-[10px] font-mono uppercase leading-tight">Via Air Mail</span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-serif font-black text-ink-blue leading-none">7</span>
                <span className="block text-[5px] sm:text-[6px] md:text-[7px] lg:text-[8px] font-bold text-swaad-red mt-0.5 sm:mt-1 uppercase leading-tight">Swaad Post</span>
              </div>
            </motion.div>

            <div className="space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-4">
              <span className="inline-block font-mono text-swaad-red text-[9px] sm:text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] lg:tracking-[0.3em] border-b-2 border-swaad-red/10 pb-1 sm:pb-1.5 md:pb-2">
                Priority Dispatch
              </span>
              
              <div className="flex justify-center py-0.5 sm:py-1 md:py-1.5">
                <img 
                  src="/logos/LogoVertical.png" 
                  alt="SWAAD7" 
                  className="w-28 sm:w-36 md:w-44 lg:w-56 xl:w-64 2xl:w-72 h-auto"
                />
              </div>
              
              <p className="font-serif font-bold text-ink-blue text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-1 sm:mb-1.5 md:mb-2 leading-tight sm:leading-snug md:leading-normal">
                Subah ka Chai. Shaam ka Swaad.
              </p>
              
              <p className="font-mono text-sub-text text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-lg max-w-2xl mx-auto leading-relaxed px-2 sm:px-3 md:px-4 mb-2 sm:mb-2.5 md:mb-3 lg:mb-4">
                7 AM – 7 PM | Mumbai ka Roz ka Food Stop
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 mb-2.5 sm:mb-3 md:mb-4 lg:mb-5 max-w-2xl mx-auto px-2 sm:px-3 md:px-4">
                <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5 text-left">
                  <p className="font-sans text-text-dark text-[11px] sm:text-xs md:text-sm lg:text-base leading-relaxed">Running for a local train?</p>
                  <p className="font-sans text-text-dark text-[11px] sm:text-xs md:text-sm lg:text-base leading-relaxed">Office ya college ke bahar bhook lagi?</p>
                  <p className="font-sans text-text-dark text-[11px] sm:text-xs md:text-sm lg:text-base leading-relaxed">Hospital ke paas wait chal raha hai?</p>
                </div>
                <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5 flex flex-col justify-center sm:items-end">
                  <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5">
                    <img 
                      src="/logos/Vector-3.png" 
                      alt="SWAAD7" 
                      className="h-3.5 sm:h-4 md:h-5 lg:h-6 w-auto"
                    />
                    <span className="font-serif font-bold text-ink-blue text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">hai na.</span>
                  </div>
                  <p className="font-mono text-sub-text text-[9px] sm:text-[10px] md:text-xs lg:text-sm">Roz, reliable, full-on swaad.</p>
                </div>
              </div>

              <div className="pt-2.5 sm:pt-3 md:pt-4 lg:pt-5 flex flex-col sm:flex-row gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 justify-center items-stretch sm:items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  animate={{ rotate: [0, -1, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                  className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 bg-swaad-yellow px-1 py-0.5 sm:py-1 md:py-1.5 pr-2.5 sm:pr-3 md:pr-4 lg:pr-5 rounded-sm shadow-md border-2 border-swaad-yellow border-dashed group min-h-[44px] w-full sm:w-auto"
                >
                  <div className="bg-swaad-red text-white p-1 sm:p-1.5 md:p-2 lg:p-2.5 font-bold font-mono text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs uppercase tracking-wide sm:tracking-wider md:tracking-widest whitespace-nowrap">
                    Find Truck
                  </div>
                  <span className="font-serif font-bold text-ink-blue text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-lg uppercase">Find the Truck Near You</span>
                  <span className="material-symbols-outlined text-ink-blue group-hover:translate-x-1 transition-transform text-sm sm:text-base md:text-lg lg:text-xl">arrow_forward</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  animate={{ rotate: [0, 1, -1, 0] }}
                  transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
                  className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 bg-white px-1 py-0.5 sm:py-1 md:py-1.5 pr-2.5 sm:pr-3 md:pr-4 lg:pr-5 rounded-sm shadow-md border-2 border-swaad-red border-dashed group min-h-[44px] w-full sm:w-auto"
                >
                  <div className="bg-swaad-red text-white p-1 sm:p-1.5 md:p-2 lg:p-2.5 font-bold font-mono text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs uppercase tracking-wide sm:tracking-wider md:tracking-widest whitespace-nowrap">
                    Follow
                  </div>
                  <span className="font-serif font-bold text-ink-blue text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-lg uppercase">Follow Today's Location</span>
                  <span className="material-symbols-outlined text-ink-blue group-hover:translate-x-1 transition-transform text-sm sm:text-base md:text-lg lg:text-xl">location_on</span>
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
