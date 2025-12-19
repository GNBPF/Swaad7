
import React from 'react';
import { motion } from 'framer-motion';

const SwaadRath: React.FC = () => {
  return (
    <section id="rath" className="py-32 bg-ink-blue relative border-y-[12px] border-double border-swaad-yellow overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-30 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h2 className="font-serif font-bold text-4xl md:text-6xl text-kora-paper mb-4">The Swaad Rath</h2>
        <p className="font-mono text-swaad-yellow text-sm uppercase tracking-[0.4em] mb-16">
          Temple of Taste • High Hygiene • High Nostalgia
        </p>

        <div className="relative w-full h-[500px] bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
          {/* Mumbai Skyline Scroll Placeholder */}
          <div className="absolute inset-0 opacity-10 flex items-end">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="whitespace-nowrap flex gap-48"
            >
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-64 w-[400px] bg-white/20 rounded-t-[100px] border-x border-t border-white/20" />
              ))}
            </motion.div>
          </div>

          <div className="relative">
            {/* Steam Effects */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex gap-4 pointer-events-none">
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
                  className="w-4 h-4 text-swaad-yellow"
                >
                   <span className="material-symbols-outlined text-3xl">air</span>
                </motion.div>
              ))}
            </div>

            {/* The Rath (Rickshaw) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXunhvhXGQYeLawpwaT0umq5Impoa2k2rqOm4_gSMM6RmvZfulih1jPx5KmpufwMOIjIBJ7pYQMdMkTIcmxzaob_wFmoaCj5PHSPlbe5TL93WQs2voTbmEy2W5BzES7UW4iVtu5sMtH1_VJ40YVM6nwkGkG20WJ1eBayR-SnxP5Fg8OaKvGO8L-G3eH9B-nZwDFvMWLfTXq8GWj6ML3xuLsVoOLB60Lk8sMJ2DDCNNdiCXqDygDGtcvQrlBw4eOsl2mbmocqWIXf8R"
                alt="Swaad Rath"
                className="w-[500px] md:w-[600px] filter contrast-110"
              />

              {/* Interactive Stickers */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute top-[20%] left-[10%] w-16 h-16 bg-swaad-yellow rounded-full border-2 border-white flex items-center justify-center text-ink-blue font-serif font-bold text-[10px] leading-tight text-center shadow-lg"
              >
                100%<br/>PURE
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="absolute top-[30%] right-[20%] w-14 h-14 bg-swaad-red rounded-full border-2 border-white flex items-center justify-center text-white shadow-lg"
              >
                <span className="material-symbols-outlined">verified</span>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md px-4 py-1 rounded-full border border-white/10">
            <span className="text-[10px] font-mono text-white/60 tracking-widest uppercase">
              Scrolling through Mumbai Skyline
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwaadRath;
