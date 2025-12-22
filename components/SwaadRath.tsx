
import React from 'react';
import { motion } from 'framer-motion';

const SwaadRath: React.FC = () => {
  return (
    <section id="rath" className="py-16 sm:py-24 md:py-32 bg-ink-blue relative border-y-[8px] sm:border-y-[12px] border-double border-swaad-yellow overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-30 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-kora-paper mb-3 sm:mb-4">The Swaad Rath</h2>
        <p className="font-mono text-swaad-yellow text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-12 sm:mb-16 px-4">
          Temple of Taste • High Hygiene • High Nostalgia
        </p>

        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
          {/* Mumbai Skyline Scroll Placeholder */}
          <div className="absolute inset-0 opacity-10 flex items-end">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="whitespace-nowrap flex gap-24 sm:gap-48"
            >
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-32 sm:h-48 md:h-64 w-[200px] sm:w-[300px] md:w-[400px] bg-white/20 rounded-t-[50px] sm:rounded-t-[80px] md:rounded-t-[100px] border-x border-t border-white/20" />
              ))}
            </motion.div>
          </div>

          <div className="relative">
            {/* Steam Effects */}
            <div className="absolute -top-8 sm:-top-12 md:-top-16 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-4 pointer-events-none">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -40],
                    x: [0, Math.sin(i) * 20],
                    opacity: [0, 0.7, 0],
                    scale: [0.5, 1.2],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: i * 0.5,
                  }}
                  className="w-3 h-3 sm:w-4 sm:h-4 text-swaad-yellow"
                >
                   <span className="material-symbols-outlined text-2xl sm:text-3xl">air</span>
                </motion.div>
              ))}
            </div>

            {/* The Rath (Rickshaw) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="relative z-10 drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)] sm:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXunhvhXGQYeLawpwaT0umq5Impoa2k2rqOm4_gSMM6RmvZfulih1jPx5KmpufwMOIjIBJ7pYQMdMkTIcmxzaob_wFmoaCj5PHSPlbe5TL93WQs2voTbmEy2W5BzES7UW4iVtu5sMtH1_VJ40YVM6nwkGkG20WJ1eBayR-SnxP5Fg8OaKvGO8L-G3eH9B-nZwDFvMWLfTXq8GWj6ML3xuLsVoOLB60Lk8sMJ2DDCNNdiCXqDygDGtcvQrlBw4eOsl2mbmocqWIXf8R"
                alt="Swaad Rath"
                className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] filter contrast-110"
              />

              {/* Interactive Stickers */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute top-[20%] left-[10%] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-swaad-yellow rounded-full border-2 border-white flex items-center justify-center text-ink-blue font-serif font-bold text-[8px] sm:text-[9px] md:text-[10px] leading-tight text-center shadow-lg"
              >
                100%<br/>PURE
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="absolute top-[30%] right-[20%] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-swaad-red rounded-full border-2 border-white flex items-center justify-center text-white shadow-lg"
              >
                <span className="material-symbols-outlined text-base sm:text-lg md:text-xl">verified</span>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md px-3 sm:px-4 py-1 rounded-full border border-white/10">
            <span className="text-[8px] sm:text-[10px] font-mono text-white/60 tracking-widest uppercase whitespace-nowrap">
              Scrolling through Mumbai Skyline
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwaadRath;
