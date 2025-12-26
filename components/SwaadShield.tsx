
import React from 'react';
import { motion } from 'framer-motion';

const SwaadShield: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 bg-white overflow-hidden relative border-b border-gray-100">
      <div className="max-w-[1920px] mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16">
          <div className="flex-1 relative w-full max-w-sm lg:max-w-none">
            {/* Interactive Fraud-Prevention Graphic */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mx-auto">
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

          <div className="flex-1 space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 border border-ink-blue px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-full text-ink-blue text-[9px] sm:text-[10px] md:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold">
              <span className="material-symbols-outlined text-xs sm:text-sm md:text-base">favorite</span>
              <span>Why People Choose Swaad7</span>
            </div>
            
            <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-swaad-red leading-tight sm:leading-snug md:leading-normal">
              Mumbai Life ke Hisaab se Bana Hai
            </h2>

            <div className="space-y-3 sm:space-y-3.5 md:space-y-4 lg:space-y-5 text-left max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <span className="material-symbols-outlined text-swaad-red text-lg sm:text-xl md:text-2xl flex-shrink-0 mt-0.5">speed</span>
                <p className="font-sans text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  Fast service late hone ka tension nahi
                </p>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <span className="material-symbols-outlined text-swaad-red text-lg sm:text-xl md:text-2xl flex-shrink-0 mt-0.5">verified</span>
                <p className="font-sans text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  Saaf-suthra, hygienic cooking
                </p>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <span className="material-symbols-outlined text-swaad-red text-lg sm:text-xl md:text-2xl flex-shrink-0 mt-0.5">balance</span>
                <p className="font-sans text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  Light, healthy & indulgent sab ek jagah
                </p>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <span className="material-symbols-outlined text-swaad-red text-lg sm:text-xl md:text-2xl flex-shrink-0 mt-0.5">currency_rupee</span>
                <p className="font-sans text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  Pocket-friendly prices
                </p>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <span className="material-symbols-outlined text-swaad-red text-lg sm:text-xl md:text-2xl flex-shrink-0 mt-0.5">star</span>
                <p className="font-sans text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  Roz khane layak taste & consistency
                </p>
              </div>
            </div>

            <p className="font-serif font-bold text-ink-blue text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-5 sm:mt-6 md:mt-7 lg:mt-8 leading-tight sm:leading-snug md:leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Train miss ho sakti hai. <br className="hidden sm:block" />Chai nahi.
            </p>
          </div>
        </div>

        {/* Food Philosophy Section */}
        <div className="mt-12 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24 max-w-3xl mx-auto text-center border-t border-gray-200 pt-10 sm:pt-12 md:pt-14 lg:pt-16 px-3 sm:px-4">
          <h3 className="font-serif font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-swaad-red mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight sm:leading-snug md:leading-normal">
            Simple Food. Proper Taste.
          </h3>
          <p className="font-sans text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-2xl mx-auto">
            Yahan fancy naam ya overacting nahi.
          </p>
          <p className="font-sans text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-2xl mx-auto mt-3 sm:mt-4">
            Bas fresh ingredients, proper cooking aur honest swaad.
          </p>
          <p className="font-serif font-bold text-ink-blue text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-5 sm:mt-6 md:mt-7 lg:mt-8 leading-tight sm:leading-snug md:leading-relaxed">
            Pani puri ho ya soup mood set ho jaata hai.
          </p>
        </div>

        {/* Timings Section */}
        <div className="mt-12 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24 max-w-2xl mx-auto text-center border-t border-gray-200 pt-10 sm:pt-12 md:pt-14 lg:pt-16 px-3 sm:px-4">
          <h3 className="font-serif font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-swaad-red mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight sm:leading-snug md:leading-normal">
            Kab Open Hai?
          </h3>
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 mb-3 sm:mb-4">
            <span className="material-symbols-outlined text-swaad-red text-2xl sm:text-2.5xl md:text-3xl lg:text-4xl xl:text-5xl">schedule</span>
            <p className="font-serif font-bold text-ink-blue text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight sm:leading-snug md:leading-normal">
              Subah 7 baje se Shaam 7 baje tak
            </p>
          </div>
          <p className="font-sans text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
            First local se evening chai-time tak.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SwaadShield;
