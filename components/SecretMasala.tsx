
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SecretMasala: React.FC = () => {
  const [isLidOpen, setIsLidOpen] = useState(false);
  const [activeHint, setActiveHint] = useState<string | null>(null);

  const hints = {
    chili: "Something spicy is coming to Borivali...",
    cinnamon: "Sweetness is about to travel to Bandra...",
    cardamom: "Freshly brewed tales near Churchgate..."
  };

  return (
    <section id="masala" className="py-16 sm:py-24 md:py-32 bg-chili-red relative overflow-hidden paper-grain">
      {/* Texture Watermarks */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none overflow-hidden">
        <h2 className="text-[10rem] sm:text-[15rem] md:text-[20rem] font-serif font-black text-white whitespace-nowrap">MUMBAI MUMBAI MUMBAI</h2>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div 
          className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto mb-12 sm:mb-14 md:mb-16 cursor-pointer perspective-1000" 
          onClick={() => setIsLidOpen(!isLidOpen)}
        >
          
          {/* Sparkles (Spices puffing out) - Only render when lid opens */}
          <AnimatePresence>
            {isLidOpen && (
              <div className="absolute inset-0 pointer-events-none z-30">
                {[...Array(15)].map((_, i) => {
                  const angle = (i / 15) * Math.PI * 2;
                  const distance = 200;
                  const xOffset = Math.cos(angle) * distance;
                  const yOffset = Math.sin(angle) * distance;
                  
                  return (
                    <motion.div
                      key={`spark-${i}`}
                      initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                      animate={{ 
                        scale: [0, 1.2, 0.8],
                        x: xOffset, 
                        y: yOffset,
                        opacity: [1, 0.8, 0],
                        rotate: [0, 360]
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ 
                        duration: 1.2,
                        ease: [0.23, 1, 0.32, 1],
                        times: [0, 0.6, 1]
                      }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-swaad-yellow rounded-full shadow-[0_0_10px_rgba(255,184,0,0.8)]"
                    />
                  );
                })}
              </div>
            )}
          </AnimatePresence>

          {/* Masala Dabba Bottom (Open) */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-700 to-yellow-900 border-4 border-yellow-600 shadow-2xl">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="grid grid-cols-2 grid-rows-2 gap-3 w-full h-full p-8">
                <motion.div 
                  className="bg-red-800 rounded-full shadow-inner flex items-center justify-center"
                  animate={{ 
                    opacity: isLidOpen ? [0.6, 0.9, 0.6] : 0.8,
                    scale: isLidOpen ? [1, 1.05, 1] : 1
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="material-symbols-outlined text-white/30 text-4xl">grain</span>
                </motion.div>
                <motion.div 
                  className="bg-yellow-600 rounded-full shadow-inner"
                  animate={{ 
                    opacity: isLidOpen ? [0.6, 0.9, 0.6] : 0.8,
                    scale: isLidOpen ? [1, 1.05, 1] : 1
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.div 
                  className="bg-amber-900 rounded-full shadow-inner"
                  animate={{ 
                    opacity: isLidOpen ? [0.6, 0.9, 0.6] : 0.8,
                    scale: isLidOpen ? [1, 1.05, 1] : 1
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div 
                  className="bg-orange-700 rounded-full shadow-inner"
                  animate={{ 
                    opacity: isLidOpen ? [0.6, 0.9, 0.6] : 0.8,
                    scale: isLidOpen ? [1, 1.05, 1] : 1
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />
              </div>
            </div>
            
            {/* Mystery Text Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: isLidOpen ? 1 : 0,
                scale: isLidOpen ? 1 : 0.8
              }}
              transition={{ 
                duration: 0.5,
                delay: isLidOpen ? 0.3 : 0,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none"
            >
              <p className="font-serif font-bold text-white text-lg leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                "The secret isn't in the recipe, it's in the hands of our Sarthis."
              </p>
            </motion.div>
          </div>

          {/* Masala Dabba Lid */}
          <motion.div
            key={isLidOpen ? "open" : "closed"}
            animate={
              isLidOpen 
                ? { 
                    y: -320, 
                    x: 30,
                    opacity: 0, 
                    rotate: 25,
                    scale: 0.9
                  } 
                : { 
                    y: 0,
                    x: 0,
                    opacity: 1,
                    rotate: 0,
                    scale: 1
                  }
            }
            transition={{ 
              duration: 0.7,
              ease: [0.23, 1, 0.32, 1],
              type: "spring",
              damping: 20,
              stiffness: 100
            }}
            whileHover={!isLidOpen ? { scale: 1.03, y: -5 } : {}}
            className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-600 to-yellow-800 border-4 border-yellow-300 shadow-[0_15px_35px_rgba(0,0,0,0.5)] z-20 will-change-transform"
            style={{ transformOrigin: 'center center' }}
          >
            <div className="absolute inset-0 rounded-full flex items-center justify-center">
              <div className="w-64 h-64 rounded-full border-2 border-yellow-900/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.h3 
                  className="font-serif font-black text-5xl text-yellow-900/40 uppercase select-none"
                  animate={!isLidOpen ? { 
                    textShadow: [
                      "0 0 20px rgba(255,184,0,0.3)",
                      "0 0 30px rgba(255,184,0,0.5)",
                      "0 0 20px rgba(255,184,0,0.3)"
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  Swaad
                </motion.h3>
              </div>
              {/* Shine effect on lid */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-swaad-yellow uppercase tracking-wider sm:tracking-widest drop-shadow-md">
            Gupt Menu
          </h2>

          <div className="flex justify-center gap-8 sm:gap-10 md:gap-12">
            {(Object.keys(hints) as Array<keyof typeof hints>).map((spice, index) => (
              <div key={spice} className="flex flex-col items-center gap-2">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveHint(hints[spice]);
                  }}
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 hover:bg-white/20 border-2 border-dashed border-swaad-yellow rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <motion.span 
                    className="material-symbols-outlined text-swaad-yellow text-2xl sm:text-3xl"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {spice === 'chili' ? 'local_fire_department' : spice === 'cinnamon' ? 'spa' : 'grain'}
                  </motion.span>
                </motion.button>
                <span className="font-mono text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest">{spice}</span>
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeHint && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1]
                }}
                className="bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-lg shadow-2xl inline-block border-2 border-swaad-yellow max-w-xs sm:max-w-md mx-4"
              >
                <p className="font-mono text-xs sm:text-sm font-bold text-swaad-red leading-relaxed">{activeHint}</p>
                <motion.button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveHint(null);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-3 text-[9px] sm:text-[10px] font-mono text-gray-500 uppercase hover:text-black transition-colors px-3 py-1 border border-gray-300 rounded hover:border-black"
                >
                  [ Close ]
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="font-mono text-swaad-yellow/40 text-[9px] sm:text-[10px] uppercase tracking-widest pt-6 sm:pt-8 px-4">
            Click icons for hints • Reveal the secret
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecretMasala;
