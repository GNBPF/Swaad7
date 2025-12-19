
import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-kora-paper/80 backdrop-blur-md border-b-2 border-dashed border-swaad-red/20 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-swaad-yellow border-2 border-swaad-red rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-swaad-red">local_post_office</span>
          </div>
          <div>
            <h1 className="text-xl font-serif font-black text-swaad-red uppercase leading-none">Swaad 7</h1>
            <p className="text-[10px] font-mono tracking-widest uppercase text-ink-blue">Est. Mumbai 2024</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-mono text-sm tracking-wide text-ink-blue">
          <a href="#hero" className="hover:text-swaad-red transition-colors">Postmark</a>
          <a href="#rath" className="hover:text-swaad-red transition-colors">The Rath</a>
          <a href="#sarthis" className="hover:text-swaad-red transition-colors">Sarthis</a>
          <a href="#masala" className="hover:text-swaad-red transition-colors">Masala</a>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-ink-blue text-white px-5 py-2 rounded shadow-[4px_4px_0px_#A60000] font-mono text-xs uppercase tracking-widest hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          <span className="material-symbols-outlined text-sm">confirmation_number</span>
          Ticket
        </motion.button>
      </div>
    </nav>
  );
};

export default Header;
