
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
        <div className="space-y-6 sm:space-y-8">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="font-serif font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-swaad-yellow leading-tight"
          >
            Abhi Bhook Lagi Hai?
          </motion.h2>
          
          <p className="font-serif font-bold text-white text-xl sm:text-2xl md:text-3xl leading-relaxed">
            Seedha aao. Jaldi lo. Khush hoke jao.
          </p>
          
          <p className="font-serif font-bold text-swaad-yellow text-2xl sm:text-3xl md:text-4xl mt-6 sm:mt-8">
            SWAAD7 — Mumbai ka Roz ka Swaad.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-10 pt-8 sm:pt-10">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, y: -3 }}
            className="flex items-center gap-3 sm:gap-4 bg-swaad-yellow text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg font-serif font-bold text-base sm:text-lg md:text-xl uppercase"
          >
            <span className="material-symbols-outlined text-2xl sm:text-3xl">location_on</span>
            <span>Aaj cart kahan hai? Follow karo</span>
          </motion.a>
          
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, y: -3 }}
            className="flex items-center gap-3 sm:gap-4 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg font-serif font-bold text-base sm:text-lg md:text-xl uppercase border-2 border-swaad-yellow"
          >
            <span className="material-symbols-outlined text-2xl sm:text-3xl">call</span>
            <span>Daily flavours & updates ke liye connect raho</span>
          </motion.a>
        </div>

        <div className="pt-12 sm:pt-16 md:pt-20 border-t border-gray-800">
          <p className="text-gray-400 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] px-4">
            © SWAAD7 | Fresh • Fast • Desi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
