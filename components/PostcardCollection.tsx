
import React from 'react';
import { motion } from 'framer-motion';

const PostcardCollection: React.FC = () => {
  return (
    <section id="collection" className="py-24 bg-kora-paper paper-grain border-y border-swaad-red/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-16">
          <span className="font-mono text-swaad-red font-bold uppercase tracking-[0.2em] text-xs border-b border-swaad-red pb-1 mb-4 inline-block">
            Swaad Loyalty Program
          </span>
          <h2 className="font-serif font-bold text-4xl md:text-6xl text-ink-blue mb-4">The Postcard Collection</h2>
          <p className="font-sans text-lg text-text-dark/70">"Collect Memories, Not Just Receipts."</p>
          <p className="font-mono text-[10px] uppercase text-gray-500 mt-2 tracking-widest">
            Collect 7 Stamps • Unlock 'Swaad Box' • Dhanyawaad
          </p>
        </div>

        <div className="bg-[#f2efe6] p-4 md:p-12 rounded-xl shadow-inner border border-black/5 relative overflow-hidden">
          {/* Scalloped Border effect */}
          <div className="absolute inset-2 border-2 border-dashed border-ink-blue/10 rounded-lg pointer-events-none" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            {/* Collected Stamps */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="bg-white p-2 shadow-md -rotate-3 transition-transform cursor-pointer aspect-[4/5] flex flex-col"
            >
              <div className="flex-1 bg-gray-100 border border-black/5 overflow-hidden">
                <img src="https://picsum.photos/400/500?grayscale" className="w-full h-full object-cover opacity-60 vintage-filter" alt="Gateway" />
              </div>
              <div className="h-8 flex items-center justify-center">
                <span className="font-mono text-[8px] uppercase font-bold text-ink-blue">Mumbai 14 Oct</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 border border-ink-blue rounded-full flex items-center justify-center rotate-12 bg-white/50 backdrop-blur-sm">
                 <span className="material-symbols-outlined text-ink-blue text-sm">check</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="bg-white p-2 shadow-md rotate-2 transition-transform cursor-pointer aspect-[4/5] flex flex-col"
            >
              <div className="flex-1 bg-gray-100 border border-black/5 overflow-hidden">
                <img src="https://picsum.photos/400/501?grayscale" className="w-full h-full object-cover opacity-60 vintage-filter" alt="Bandra" />
              </div>
              <div className="h-8 flex items-center justify-center">
                <span className="font-mono text-[8px] uppercase font-bold text-ink-blue">Bandra 18 Oct</span>
              </div>
            </motion.div>

            {/* Empty Slots */}
            {[...Array(5)].map((_, i) => (
              <div key={i} className="aspect-[4/5] border-2 border-dashed border-gray-300 bg-black/5 flex flex-col items-center justify-center group cursor-pointer hover:bg-white/40 transition-colors">
                <span className="material-symbols-outlined text-gray-400 group-hover:scale-110 transition-transform text-3xl">add_a_photo</span>
                <span className="font-mono text-[8px] text-gray-400 mt-2 uppercase tracking-widest text-center px-4">Place Stamp Here</span>
              </div>
            ))}

            {/* Mystery Gift */}
            <div className="aspect-[4/5] bg-swaad-yellow/10 border-4 border-double border-swaad-yellow flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-swaad-yellow opacity-10 animate-pulse" />
              <motion.span 
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="material-symbols-outlined text-swaad-yellow text-5xl relative z-10"
              >
                redeem
              </motion.span>
              <span className="font-serif font-bold text-ink-blue uppercase mt-2 relative z-10 text-xs">Mystery Gift</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostcardCollection;
