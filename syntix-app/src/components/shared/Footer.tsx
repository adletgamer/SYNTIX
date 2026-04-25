import React from 'react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-hero text-gray-400 py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 text-white font-bold text-xl tracking-wide mb-6">
            <Image src="/SYNTIX.svg" alt="SYNTIX Logo" width={32} height={32} />
            SYNTIX<span className="text-biomarker">_</span>LAYER
          </div>
          <p className="text-sm text-gray-500 max-w-sm leading-relaxed mb-8">
            The Decentralized Personal Health Intelligence Layer. Programmable consent and verifiable compute for 3D genomic architecture.
          </p>
          <div className="font-mono text-xs text-gray-600 uppercase tracking-widest">
            © 2026 Sentinel Layer. DPHIL Protocol.
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 font-mono text-sm tracking-widest uppercase">Developers</h4>
          <ul className="space-y-4 text-sm font-mono">
            <li><a href="#" className="hover:text-biomarker transition-colors flex items-center gap-2"><span className="text-indigo">→</span> Protocol Docs</a></li>
            <li><a href="#" className="hover:text-biomarker transition-colors flex items-center gap-2"><span className="text-indigo">→</span> API Reference</a></li>
            <li><a href="#" className="hover:text-biomarker transition-colors flex items-center gap-2"><span className="text-indigo">→</span> OpenPGx Standard</a></li>
            <li><a href="#" className="hover:text-biomarker transition-colors flex items-center gap-2"><span className="text-indigo">→</span> GitHub</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 font-mono text-sm tracking-widest uppercase">Ecosystem</h4>
          <ul className="space-y-4 text-sm font-mono">
            <li><a href="#" className="hover:text-biomarker transition-colors flex items-center gap-2"><span className="text-indigo">→</span> BioDAO Grants</a></li>
            <li><a href="#" className="hover:text-biomarker transition-colors flex items-center gap-2"><span className="text-indigo">→</span> Whitepaper</a></li>
            <li><a href="#" className="hover:text-biomarker transition-colors flex items-center gap-2"><span className="text-indigo">→</span> Network State</a></li>
            <li><a href="#" className="hover:text-biomarker transition-colors flex items-center gap-2"><span className="text-indigo">→</span> Privacy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
