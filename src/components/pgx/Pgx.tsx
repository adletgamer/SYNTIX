'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Pgx = () => {
  return (
    <section id="problem" className="py-32 bg-global">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center mb-20">
          
          {/* Static Gray Image (Biobank Contrast) */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/50 to-transparent z-10 mix-blend-multiply pointer-events-none"></div>
            <div className="w-full aspect-[4/3] bg-gray-200 border border-gray-300 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <Image 
                src="/data-cemetery.jpg" 
                alt="Legacy Biobank Data Cemetery" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 font-mono text-xs font-semibold tracking-widest uppercase mb-6 rounded-sm border border-gray-200">
              The Data Cemetery
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight uppercase mb-6">
              THE DATA SILO IS A LIABILITY.
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed">
              Episodic snapshots treat your biology as a static commodity. Traditional biobanks hoard data that rots, missing the dynamic 3D collapses of your genome.
            </p>
          </div>
        </div>

        {/* 3 Minimalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all"
          >
            <div className="text-4xl font-mono text-gray-300 font-bold mb-6">01</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">70% of biomarkers fail to reproduce.</h3>
            <p className="text-gray-600 leading-relaxed">
              Without cryptographic chains of custody, provenance is lost. Legacy architecture lacks verifiable audit trails, making the data clinically useless.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all"
          >
            <div className="text-4xl font-mono text-gray-300 font-bold mb-6">02</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Missed Loop Collapses</h3>
            <p className="text-gray-600 leading-relaxed">
              Static one-time reads miss the dynamic nature of 3D genomic architecture. Critical structural events are invisible without longitudinal tracking.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all"
          >
            <div className="text-4xl font-mono text-gray-300 font-bold mb-6">03</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The $17 Genome</h3>
            <p className="text-gray-600 leading-relaxed">
              Centralized silos inevitably become data cemeteries. Millions of profiles sold at auction for pennies, while the original owners hold zero control.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
