
import React from 'react';
import { motion } from 'framer-motion';

const SwaadShield: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden relative border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">
          <div className="flex-1 relative w-full max-w-sm lg:max-w-none">
            {/* Interactive Fraud-Prevention Graphic */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute right-0 top-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-green-50 border-3 sm:border-4 border-green-600 rounded-full flex flex-col items-center justify-center z-20 shadow-2xl"
              >
                <span className="material-symbols-outlined text-4xl sm:text-5xl md:text-6xl text-green-600">shield_lock</span>
                <span className="font-mono text-[7px] sm:text-[8px] font-bold text-green-600 mt-1.5 sm:mt-2 uppercase tracking-widest">100% Secure</span>
              </motion.div>

              <motion.div
                initial={{ x: -100, y: 100, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute left-0 bottom-0 w-28 h-40 sm:w-32 sm:h-44 bg-gray-100 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-end p-3 sm:p-4 z-10"
              >
                 <div className="w-full h-2 bg-gray-200 rounded mb-2" />
                 <div className="w-full h-2 bg-gray-200 rounded mb-2" />
                 <div className="w-full h-2 bg-gray-200 rounded mb-2" />
                 <span className="material-symbols-outlined text-gray-300 text-xl sm:text-2xl">delete</span>
              </motion.div>

              <motion.div
                animate={{ rotate: [0, -5, 5, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute left-8 top-8 sm:left-10 sm:top-10 w-16 h-20 sm:w-20 sm:h-24 bg-red-100 border border-red-300 p-1.5 sm:p-2 flex flex-col items-center justify-center z-30 shadow-lg"
              >
                 <span className="text-red-500 font-black text-[10px] sm:text-xs border border-red-500 px-1 rotate-[-15deg]">FAKE</span>
                 <span className="material-symbols-outlined text-red-600 mt-1.5 sm:mt-2 text-lg sm:text-xl">block</span>
              </motion.div>
            </div>
          </div>

          <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 border border-ink-blue px-2.5 sm:px-3 py-1 rounded-full text-ink-blue text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold">
              <span className="material-symbols-outlined text-xs sm:text-sm">verified_user</span>
              The Swaad Shield
            </div>
            
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-swaad-red leading-tight">
              Our Sarthis cook with love, <br />
              <span className="text-ink-blue">our tech protects their sweat.</span>
            </h2>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 text-lg sm:text-xl md:text-2xl font-mono font-black text-ink-blue">
              <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 2 }}>100% Secure.</motion.span>
              <span className="w-[1px] h-6 sm:h-8 bg-gray-200" />
              <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }}>0% Fakes.</motion.span>
            </div>

            <p className="font-sans text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Our fraud-proof billing ensures every rupee you pay reaches the Sarthi’s pocket instantly. No middlemen, no delays. Just pure, direct impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwaadShield;
