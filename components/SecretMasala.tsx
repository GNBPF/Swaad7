
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SecretMasala: React.FC = () => {
  const [isLidOpen, setIsLidOpen] = useState(false);

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
          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-swaad-yellow uppercase tracking-wider sm:tracking-widest drop-shadow-md">
            SWAAD7 ke 7 Swaad
          </h2>
          
          <p className="font-sans text-white/90 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto">
            Ek cart. Saat solid cheezein. Confusion zero.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Chai', desc: 'cutting, adrak, masala. Kadak, Mumbai-style', icon: 'coffee' },
              { name: 'Coffee', desc: 'simple, strong, no drama', icon: 'local_cafe' },
              { name: 'Snacks', desc: 'dosa, sandwiches, rolls & quick bites', icon: 'lunch_dining' },
              { name: 'Healthy Bowls', desc: 'sprouts, fresh salads, halka aur filling', icon: 'set_meal' },
              { name: 'Soups', desc: 'garma-garam, comfort wala', icon: 'soup_kitchen' },
              { name: 'Pani Puri', desc: '7 different flavours, har mood ke liye ek', icon: 'local_dining' },
              { name: 'Quick Combos', desc: 'pet bhare, pocket safe', icon: 'restaurant_menu' }
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-dashed border-swaad-yellow/50 rounded-lg p-4 sm:p-6 hover:bg-white/20 transition-all cursor-pointer"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="material-symbols-outlined text-swaad-yellow text-3xl sm:text-4xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-serif font-bold text-swaad-yellow text-lg sm:text-xl mb-2">{item.name}</h3>
                    <p className="font-sans text-white/80 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="font-serif font-bold text-white text-lg sm:text-xl md:text-2xl mt-8 sm:mt-10">
            Saat choices. Roz ke liye perfect.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecretMasala;
