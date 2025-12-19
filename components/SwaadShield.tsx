
import React from 'react';
import { motion } from 'framer-motion';

const SwaadShield: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 relative">
            {/* Interactive Fraud-Prevention Graphic */}
            <div className="relative w-80 h-80 mx-auto">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute right-0 top-0 w-40 h-40 bg-green-50 border-4 border-green-600 rounded-full flex flex-col items-center justify-center z-20 shadow-2xl"
              >
                <span className="material-symbols-outlined text-6xl text-green-600">shield_lock</span>
                <span className="font-mono text-[8px] font-bold text-green-600 mt-2 uppercase tracking-widest">100% Secure</span>
              </motion.div>

              <motion.div
                initial={{ x: -100, y: 100, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute left-0 bottom-0 w-32 h-44 bg-gray-100 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-end p-4 z-10"
              >
                 <div className="w-full h-2 bg-gray-200 rounded mb-2" />
                 <div className="w-full h-2 bg-gray-200 rounded mb-2" />
                 <div className="w-full h-2 bg-gray-200 rounded mb-2" />
                 <span className="material-symbols-outlined text-gray-300">delete</span>
              </motion.div>

              <motion.div
                animate={{ rotate: [0, -5, 5, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute left-10 top-10 w-20 h-24 bg-red-100 border border-red-300 p-2 flex flex-col items-center justify-center z-30 shadow-lg"
              >
                 <span className="text-red-500 font-black text-xs border border-red-500 px-1 rotate-[-15deg]">FAKE</span>
                 <span className="material-symbols-outlined text-red-600 mt-2">block</span>
              </motion.div>
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 border border-ink-blue px-3 py-1 rounded-full text-ink-blue text-xs font-mono uppercase tracking-[0.2em] font-bold">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              The Swaad Shield
            </div>
            
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-swaad-red leading-tight">
              Our Sarthis cook with love, <br />
              <span className="text-ink-blue">our tech protects their sweat.</span>
            </h2>

            <div className="flex items-center gap-8 text-2xl font-mono font-black text-ink-blue">
              <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 2 }}>100% Secure.</motion.span>
              <span className="w-[1px] h-8 bg-gray-200" />
              <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }}>0% Fakes.</motion.span>
            </div>

            <p className="font-sans text-gray-600 text-lg leading-relaxed">
              Our fraud-proof billing ensures every rupee you pay reaches the Sarthi’s pocket instantly. No middlemen, no delays. Just pure, direct impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwaadShield;
