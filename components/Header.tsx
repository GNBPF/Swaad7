
import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-kora-paper/80 backdrop-blur-md border-b-2 border-dashed border-swaad-red/20 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer flex-shrink-0"
        >
          <img 
            src="/2. Logo png/Vector-3.png" 
            alt="Swaad 7 Logo" 
            className="h-7 sm:h-8 lg:h-10 w-auto"
          />
        </motion.button>
        
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-mono text-xs xl:text-sm tracking-wide text-ink-blue">
          <a href="#hero" className="hover:text-swaad-red transition-colors whitespace-nowrap">Postmark</a>
          <a href="#rath" className="hover:text-swaad-red transition-colors whitespace-nowrap">The Rath</a>
          <a href="#sarthis" className="hover:text-swaad-red transition-colors whitespace-nowrap">Sarthis</a>
          <a href="#masala" className="hover:text-swaad-red transition-colors whitespace-nowrap">Masala</a>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 sm:gap-2 bg-ink-blue text-white px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded shadow-[3px_3px_0px_#A60000] sm:shadow-[4px_4px_0px_#A60000] font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex-shrink-0"
        >
          <span className="material-symbols-outlined text-xs sm:text-sm">confirmation_number</span>
          <span className="hidden sm:inline">Ticket</span>
          <span className="sm:hidden">Get</span>
        </motion.button>
      </div>
    </nav>
  );
};

export default Header;
