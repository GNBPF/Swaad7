
import React from 'react';
import { motion } from 'framer-motion';

const PostcardCollection: React.FC = () => {
  return (
    <section id="collection" className="py-16 sm:py-20 md:py-24 bg-kora-paper paper-grain border-y border-swaad-red/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-12 sm:mb-14 md:mb-16">
          <span className="font-mono text-swaad-red font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs border-b border-swaad-red pb-1 mb-3 sm:mb-4 inline-block">
            Swaad Loyalty Program
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink-blue mb-3 sm:mb-4">The Postcard Collection</h2>
          <p className="font-sans text-base sm:text-lg text-text-dark/70">"Collect Memories, Not Just Receipts."</p>
          <p className="font-mono text-[9px] sm:text-[10px] uppercase text-gray-500 mt-2 tracking-wider sm:tracking-widest px-4">
            Collect 7 Stamps • Unlock 'Swaad Box' • Dhanyawaad
          </p>
        </div>

        <div className="bg-[#f2efe6] p-3 sm:p-6 md:p-8 lg:p-12 rounded-xl shadow-inner border border-black/5 relative overflow-hidden">
          {/* Scalloped Border effect */}
          <div className="absolute inset-2 border-2 border-dashed border-ink-blue/10 rounded-lg pointer-events-none" />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            {/* Collected Stamps */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="bg-white p-1.5 sm:p-2 shadow-md -rotate-3 transition-transform cursor-pointer aspect-[4/5] flex flex-col"
            >
              <div className="flex-1 bg-gray-100 border border-black/5 overflow-hidden">
                <img src="https://picsum.photos/400/500?grayscale" className="w-full h-full object-cover opacity-60 vintage-filter" alt="Gateway" />
              </div>
              <div className="h-6 sm:h-8 flex items-center justify-center">
                <span className="font-mono text-[7px] sm:text-[8px] uppercase font-bold text-ink-blue">Mumbai 14 Oct</span>
              </div>
              <div className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 border border-ink-blue rounded-full flex items-center justify-center rotate-12 bg-white/50 backdrop-blur-sm">
                 <span className="material-symbols-outlined text-ink-blue text-xs sm:text-sm">check</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="bg-white p-1.5 sm:p-2 shadow-md rotate-2 transition-transform cursor-pointer aspect-[4/5] flex flex-col"
            >
              <div className="flex-1 bg-gray-100 border border-black/5 overflow-hidden">
                <img src="https://picsum.photos/400/501?grayscale" className="w-full h-full object-cover opacity-60 vintage-filter" alt="Bandra" />
              </div>
              <div className="h-6 sm:h-8 flex items-center justify-center">
                <span className="font-mono text-[7px] sm:text-[8px] uppercase font-bold text-ink-blue">Bandra 18 Oct</span>
              </div>
            </motion.div>

            {/* Empty Slots */}
            {[...Array(5)].map((_, i) => (
              <div key={i} className="aspect-[4/5] border-2 border-dashed border-gray-300 bg-black/5 flex flex-col items-center justify-center group cursor-pointer hover:bg-white/40 transition-colors">
                <span className="material-symbols-outlined text-gray-400 group-hover:scale-110 transition-transform text-2xl sm:text-3xl">add_a_photo</span>
                <span className="font-mono text-[7px] sm:text-[8px] text-gray-400 mt-2 uppercase tracking-widest text-center px-2 sm:px-4">Place Stamp Here</span>
              </div>
            ))}

            {/* Mystery Gift */}
            <div className="aspect-[4/5] bg-swaad-yellow/10 border-2 sm:border-4 border-double border-swaad-yellow flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-swaad-yellow opacity-10 animate-pulse" />
              <motion.span 
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="material-symbols-outlined text-swaad-yellow text-4xl sm:text-5xl relative z-10"
              >
                redeem
              </motion.span>
              <span className="font-serif font-bold text-ink-blue uppercase mt-2 relative z-10 text-[10px] sm:text-xs">Mystery Gift</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostcardCollection;
