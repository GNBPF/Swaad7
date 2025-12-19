
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden paper-grain">
      <div className="relative z-10 max-w-5xl w-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, rotate: -2, y: 40 }}
          animate={{ opacity: 1, rotate: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-2 shadow-2xl border-4 border-dashed border-swaad-red/10 max-w-4xl mx-auto"
        >
          <div className="border-[3px] border-double border-swaad-red/30 p-8 md:p-16 relative">
            {/* Stamp Detail */}
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="absolute -top-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-white border-4 border-dashed border-swaad-red rounded-full shadow-lg flex items-center justify-center z-20 cursor-pointer"
            >
              <div className="text-center">
                <span className="block text-swaad-red text-[10px] font-mono uppercase">Via Air Mail</span>
                <span className="block text-4xl font-serif font-black text-ink-blue">7</span>
                <span className="block text-[8px] font-bold text-swaad-red mt-1 uppercase">Swaad Post</span>
              </div>
            </motion.div>

            <div className="space-y-6">
              <span className="inline-block font-mono text-swaad-red text-sm uppercase tracking-[0.3em] border-b-2 border-swaad-red/10 pb-2">
                Priority Dispatch
              </span>
              
              <h1 className="font-serif font-bold text-6xl md:text-8xl text-swaad-red uppercase leading-[0.9] tracking-tighter">
                Swaad on <br />
                <span className="text-ink-blue italic relative inline-block">
                  Seventh
                  <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="#FFB800" strokeWidth="3" />
                  </svg>
                </span> Heaven
              </h1>
              
              <p className="font-mono text-sub-text text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                Mumbai’s soul, served on wheels. Bringing the warmth of home to the speed of the street.
              </p>

              <div className="pt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  animate={{ rotate: [0, -1, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                  className="inline-flex items-center gap-4 bg-swaad-yellow px-1 py-1 pr-6 rounded-sm shadow-md border-2 border-swaad-yellow border-dashed group"
                >
                  <div className="bg-swaad-red text-white p-3 font-bold font-mono text-xs uppercase tracking-widest">
                    Speed Post
                  </div>
                  <span className="font-serif font-bold text-ink-blue text-lg uppercase">Track the Rath</span>
                  <span className="material-symbols-outlined text-ink-blue group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Peel to Open</span>
        <span className="material-symbols-outlined">keyboard_double_arrow_down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
