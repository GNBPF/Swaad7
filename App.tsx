
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import SwaadRath from './components/SwaadRath';
import Sarthis from './components/Sarthis';
import SecretMasala from './components/SecretMasala';
import PostcardCollection from './components/PostcardCollection';
import SwaadShield from './components/SwaadShield';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Global hover detection for the cursor
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <div className="bg-kora-paper min-h-screen relative overflow-x-hidden selection:bg-swaad-yellow selection:text-swaad-red">
      {/* Custom Postmark Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
        animate={{
          x: mousePos.x - (isHovering ? 20 : 12),
          y: mousePos.y - (isHovering ? 20 : 12),
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {!isHovering ? (
            <motion.div
              key="default"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="w-6 h-6 border-2 border-dashed border-swaad-red rounded-full bg-white/20"
            />
          ) : (
            <motion.div
              key="postmark-stamp"
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
              className="w-10 h-10 bg-swaad-red/90 rounded-full shadow-xl border-2 border-white/40 flex items-center justify-center"
            >
              <div className="w-7 h-7 border border-white/30 rounded-full border-dashed flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-lg">restaurant</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Progress Bar (Flying Postcard Path) */}
      <div className="fixed left-0 right-0 top-0 h-1 z-[60]">
        <motion.div
          className="h-full bg-swaad-red relative"
          style={{ scaleX, originX: 0 }}
        >
          {/* Flying Postcard */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <span className="material-symbols-outlined text-swaad-red transform rotate-45 text-2xl">
                near_me
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Header />
      
      <main>
        <Hero />
        <SwaadRath />
        <Sarthis />
        <SecretMasala />
        <PostcardCollection />
        <SwaadShield />
      </main>

      <Footer />

      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-white border-2 border-dashed border-swaad-red rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform group"
          >
            <span className="material-symbols-outlined text-swaad-red text-2xl group-hover:-translate-y-1 transition-transform">
              vertical_align_top
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chai Stains Scattered */}
      <ChaiStain className="top-[15%] left-[5%] opacity-[0.08]" rotate={45} />
      <ChaiStain className="top-[45%] right-[2%] opacity-[0.05]" rotate={-15} />
      <ChaiStain className="bottom-[10%] left-[8%] opacity-[0.07]" rotate={105} />
    </div>
  );
};

const ChaiStain: React.FC<{ className?: string; rotate?: number }> = ({ className, rotate = 0 }) => (
  <div
    className={`fixed pointer-events-none w-64 h-64 border-[12px] border-amber-900/30 rounded-full ${className}`}
    style={{ 
      transform: `rotate(${rotate}deg)`,
      filter: 'blur(4px)',
      boxShadow: 'inset 0 0 40px rgba(120, 60, 0, 0.1)' 
    }}
  />
);

export default App;
