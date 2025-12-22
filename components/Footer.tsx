
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StickerConfetti: React.FC = () => {
  const [stickers, setStickers] = useState<{ id: number; left: number; delay: number; rotate: number }[]>([]);

  useEffect(() => {
    const newStickers = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      rotate: Math.random() * 360,
    }));
    setStickers(newStickers);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
      {stickers.map((s) => (
        <motion.div
          key={s.id}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: '100vh', opacity: [0, 1, 1, 0], rotate: s.rotate }}
          transition={{ duration: 3, delay: s.delay, ease: "linear" }}
          className="absolute w-8 h-8 bg-swaad-yellow rounded-full border border-swaad-red flex items-center justify-center text-[10px] font-black text-swaad-red shadow-lg"
          style={{ left: `${s.left}%` }}
        >
          S7
        </motion.div>
      ))}
    </div>
  );
};

const Footer: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <footer className="bg-black py-20 sm:py-24 md:py-32 relative text-center min-h-[500px] sm:min-h-[600px] flex flex-col justify-center overflow-hidden">
      {/* Confetti Trigger */}
      <motion.div 
        onViewportEnter={() => setShowConfetti(true)}
        className="absolute top-0 w-full h-1"
      />
      {showConfetti && <StickerConfetti />}

      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-14 md:space-y-16">
        <div className="space-y-3 sm:space-y-4">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="font-serif font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-swaad-yellow uppercase tracking-[0.15em] sm:tracking-[0.2em]"
          >
            The End
          </motion.h2>
          <div className="w-20 sm:w-24 h-1 bg-swaad-yellow mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12 font-mono text-swaad-yellow/80 text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">
          <div className="space-y-2">
            <p className="text-gray-600 text-[9px] sm:text-[10px]">Produced by</p>
            <p className="text-white font-bold text-base sm:text-lg">Swaad 7 Foundation</p>
          </div>
          <div className="space-y-2">
            <p className="text-gray-600 text-[9px] sm:text-[10px]">Directed by</p>
            <p className="text-white font-bold text-base sm:text-lg">Spirit of Mumbai</p>
          </div>
          <div className="space-y-2">
            <p className="text-gray-600 text-[9px] sm:text-[10px]">Starring</p>
            <p className="text-white font-bold text-base sm:text-lg">25 Raths & 50+ Sarthis</p>
          </div>
        </div>

        <div className="flex justify-center gap-8 sm:gap-10 md:gap-12 pt-8 sm:pt-10 md:pt-12">
           {['photo_camera', 'alternate_email', 'public'].map((icon) => (
             <motion.a
               key={icon}
               href="#"
               whileHover={{ y: -5, color: '#FFB800' }}
               className="w-10 h-10 sm:w-12 sm:h-12 border border-swaad-yellow/30 rounded-full flex items-center justify-center text-swaad-yellow/50 transition-colors"
             >
               <span className="material-symbols-outlined text-lg sm:text-xl">{icon}</span>
             </motion.a>
           ))}
        </div>

        <div className="pt-12 sm:pt-16 md:pt-20">
          <p className="text-gray-800 font-mono text-[7px] sm:text-[8px] uppercase tracking-[0.3em] sm:tracking-[0.4em] px-4">
            © 2024 Swaad 7. All Rights Reserved. Mumbai Post Dispatch.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
