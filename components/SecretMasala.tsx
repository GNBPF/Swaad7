
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
    <section id="masala" className="py-32 bg-chili-red relative overflow-hidden paper-grain">
      {/* Texture Watermarks */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
        <h2 className="text-[20rem] font-serif font-black text-white whitespace-nowrap">MUMBAI MUMBAI MUMBAI</h2>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="relative w-80 h-80 mx-auto mb-16 cursor-pointer" onClick={() => setIsLidOpen(!isLidOpen)}>
          
          {/* Sparkles (Spices puffing out) */}
          <AnimatePresence>
            {isLidOpen && (
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                    animate={{ 
                      scale: 1, 
                      x: (Math.random() - 0.5) * 400, 
                      y: (Math.random() - 0.5) * 400,
                      opacity: 0,
                      rotate: Math.random() * 360
                    }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 w-3 h-3 bg-swaad-yellow rounded-full blur-[2px]"
                  />
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Masala Dabba Bottom (Open) */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-700 to-yellow-900 border-4 border-yellow-600 shadow-2xl flex items-center justify-center">
            <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-full p-6 p-4">
              <div className="bg-red-800 rounded-full opacity-80 flex items-center justify-center">
                 <span className="material-symbols-outlined text-white/20 text-4xl">grain</span>
              </div>
              <div className="bg-yellow-600 rounded-full opacity-80"></div>
              <div className="bg-amber-900 rounded-full opacity-80"></div>
              <div className="bg-orange-700 rounded-full opacity-80"></div>
            </div>
            
            {/* Mystery Text Reveal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isLidOpen ? 1 : 0 }}
              className="absolute inset-0 flex items-center justify-center p-12"
            >
              <p className="font-serif font-bold text-white text-lg leading-tight drop-shadow-lg">
                "The secret isn't in the recipe, it's in the hands of our Sarthis."
              </p>
            </motion.div>
          </div>

          {/* Masala Dabba Lid */}
          <motion.div
            animate={isLidOpen ? { y: -300, opacity: 0, rotate: 20 } : { x: [0, -1, 1, 0] }}
            transition={isLidOpen ? { duration: 0.6 } : { repeat: Infinity, duration: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-800 border-t-2 border-yellow-200 shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-20 flex items-center justify-center"
          >
            <div className="w-64 h-64 rounded-full border border-yellow-900/20 opacity-40" />
            <h3 className="font-serif font-black text-4xl text-yellow-900/50 uppercase select-none">Swaad</h3>
          </motion.div>
        </div>

        <div className="space-y-8">
          <h2 className="font-serif font-black text-4xl text-swaad-yellow uppercase tracking-widest drop-shadow-md">
            Gupt Menu
          </h2>

          <div className="flex justify-center gap-12">
            {(Object.keys(hints) as Array<keyof typeof hints>).map((spice) => (
              <div key={spice} className="flex flex-col items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveHint(hints[spice])}
                  className="w-16 h-16 bg-white/10 hover:bg-white/20 border-2 border-dashed border-swaad-yellow rounded-full flex items-center justify-center transition-all group"
                >
                  <span className="material-symbols-outlined text-swaad-yellow text-3xl group-hover:animate-bounce">
                    {spice === 'chili' ? 'local_fire_department' : spice === 'cinnamon' ? 'spa' : 'grain'}
                  </span>
                </motion.button>
                <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest">{spice}</span>
              </div>
            ))}
          </div>

          <AnimatePresence>
            {activeHint && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-white/90 backdrop-blur p-4 rounded shadow-xl inline-block border-2 border-swaad-yellow"
              >
                <p className="font-mono text-xs font-bold text-swaad-red">{activeHint}</p>
                <button 
                  onClick={() => setActiveHint(null)}
                  className="mt-2 text-[8px] font-mono text-gray-500 uppercase hover:text-black"
                >
                  [ Close ]
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="font-mono text-swaad-yellow/40 text-[10px] uppercase tracking-widest pt-8">
            Click icons for hints • Reveal the secret
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecretMasala;
