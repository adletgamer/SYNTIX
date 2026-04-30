import React from 'react';
import Image from 'next/image';

const ECOSYSTEM_TECHS = [
  { name: 'Story Protocol', abbr: 'SP' },
  { name: 'Zama FHE',       abbr: 'ZM' },
  { name: 'Inco Network',   abbr: 'IN' },
  { name: 'Next.js 14',     abbr: 'NX' },
  { name: 'TypeScript',     abbr: 'TS' },
  { name: 'Framer Motion',  abbr: 'FM' },
];

export const Footer = () => {
  return (
    <footer className="bg-hero text-gray-400 border-t border-white/10">

      {/* ── Ecosystem credits band ── */}
      <div className="border-b border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-600">
            Powering the ecosystem
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {ECOSYSTEM_TECHS.map((t) => (
              <div
                key={t.name}
                className="flex items-center gap-2 opacity-50 hover:opacity-80 transition-opacity duration-200"
              >
                {/* Minimal monogram badge */}
                <div className="w-7 h-7 rounded-md bg-white/10 border border-white/15 flex items-center justify-center font-mono font-bold text-[10px] text-white/70">
                  {t.abbr}
                </div>
                <span className="font-mono text-xs text-white/60 tracking-wide hidden sm:inline">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="py-20">
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
      </div>
    </footer>
  );
};
