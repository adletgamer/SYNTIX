'use client';

import React from 'react';
import { Shield, Dna, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export const MissionValues = () => {
  return (
    <section className="py-32 bg-global border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">The North Star</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Our protocol is governed by three foundational pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Value 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center p-8"
          >
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200 mb-6 shadow-sm">
              <Shield className="text-biomarker" size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Privacy by Design</h3>
            <p className="text-gray-600 leading-relaxed">
              Data is encrypted at the source. We don't see your code; the IA does.
            </p>
          </motion.div>

          {/* Value 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center p-8"
          >
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200 mb-6 shadow-sm">
              <Dna className="text-indigo" size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Scientific Rigor</h3>
            <p className="text-gray-600 leading-relaxed">
              Bridging the gap between raw biomarkers and clinical-grade insights.
            </p>
          </motion.div>

          {/* Value 3 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center p-8"
          >
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200 mb-6 shadow-sm">
              <Lock className="text-gray-900" size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Radical Ownership</h3>
            <p className="text-gray-600 leading-relaxed">
              You own the IP of your biology via Smart Contracts.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
