import React from 'react';

export const Tech = () => {
  return (
    <div className="bg-global text-gray-900">
      {/* 3. Solution & Metrics (Trovador Metric Block) */}
      <section id="roi" className="py-24 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="pt-8 md:pt-0 md:pr-8 flex flex-col items-center text-center">
              <div className="text-6xl md:text-7xl font-extrabold text-biomarker mb-4 tracking-tighter">100+</div>
              <p className="text-lg text-gray-600 font-medium">Biomarkers integrated into 1 unified score.</p>
            </div>
            <div className="pt-8 md:pt-0 md:px-8 flex flex-col items-center text-center">
              <div className="text-6xl md:text-7xl font-extrabold text-indigo mb-4 tracking-tighter">&lt;10ms</div>
              <p className="text-lg text-gray-600 font-medium">Verifiable encrypted compute latency.</p>
            </div>
            <div className="pt-8 md:pt-0 md:pl-8 flex flex-col items-center text-center">
              <div className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-4 tracking-tighter">$4,500</div>
              <p className="text-lg text-gray-600 font-medium">Saved per prevented Adverse Drug Reaction (ADR).</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Protocol (Superorganism 3-Column Approach) */}
      <section id="mechanism" className="py-32 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">The Decentralized Intelligence Layer</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-mono text-sm font-semibold tracking-widest text-indigo uppercase mb-6 border-b border-gray-100 pb-4">Column 1</h3>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Biomarkers Intelligence</h4>
              <p className="text-gray-600 leading-relaxed">
                Real-time ingestion of blood panels, continuous IoMT, and clinical wearables to build a dynamic baseline of your physical state.
              </p>
            </div>
            
            <div className="bg-white p-10 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-mono text-sm font-semibold tracking-widest text-biomarker uppercase mb-6 border-b border-gray-100 pb-4">Column 2</h3>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Genetic Layers</h4>
              <p className="text-gray-600 leading-relaxed">
                Deep analysis mapping polygenic risk scores and complex 3D genomic architecture, evolving far beyond simple static sequence reads.
              </p>
            </div>
            
            <div className="bg-hero p-10 border border-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-mono text-sm font-semibold tracking-widest text-gray-400 uppercase mb-6 border-b border-gray-800 pb-4">Column 3</h3>
              <h4 className="text-2xl font-bold text-white mb-4">On-Chain Protocols</h4>
              <p className="text-gray-400 leading-relaxed">
                IP-NFTs act as your sovereign root. DACL access control guarantees programmable consent and automated micro-royalties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Technical Stack Visualization */}
      <section id="stack" className="py-32 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-16 text-center">3-Tier Sentinel Architecture</h2>
          
          <div className="space-y-6">
            {/* Control Layer */}
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 border border-gray-200 rounded-xl bg-white relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-indigo"></div>
              <div className="w-full md:w-1/4">
                <div className="font-mono text-xs font-bold tracking-widest text-indigo uppercase mb-1">Tier 1</div>
                <h3 className="text-2xl font-bold text-gray-900">Control Layer</h3>
              </div>
              <div className="w-full md:w-3/4 flex items-center justify-between border-l border-gray-100 pl-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Story Protocol IP-NFTs</h4>
                  <p className="text-gray-500">Decentralized Access Control Lists (DACL)</p>
                </div>
                <div className="hidden sm:block font-mono text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded">Smart Contracts</div>
              </div>
            </div>

            {/* Compute Layer */}
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 border border-gray-200 rounded-xl bg-white relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-biomarker"></div>
              <div className="w-full md:w-1/4">
                <div className="font-mono text-xs font-bold tracking-widest text-biomarker uppercase mb-1">Tier 2</div>
                <h3 className="text-2xl font-bold text-gray-900">Compute Layer</h3>
              </div>
              <div className="w-full md:w-3/4 flex items-center justify-between border-l border-gray-100 pl-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Inco Network & Zama</h4>
                  <p className="text-gray-500">Confidential FHE (Fully Homomorphic Encryption)</p>
                </div>
                <div className="hidden sm:block font-mono text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded">Zero-Knowledge Proofs</div>
              </div>
            </div>

            {/* Storage Layer */}
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 border border-gray-200 rounded-xl bg-white relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gray-900"></div>
              <div className="w-full md:w-1/4">
                <div className="font-mono text-xs font-bold tracking-widest text-gray-900 uppercase mb-1">Tier 3</div>
                <h3 className="text-2xl font-bold text-gray-900">Storage Layer</h3>
              </div>
              <div className="w-full md:w-3/4 flex items-center justify-between border-l border-gray-100 pl-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">IPFS + Encrypted Cloud</h4>
                  <p className="text-gray-500">Immutable Audit Trails & Erasable Raw Data</p>
                </div>
                <div className="hidden sm:block font-mono text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded">Hybrid Off-Chain</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials (Clinical Validation) */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="relative">
              <div className="text-8xl text-indigo opacity-20 absolute -top-8 -left-6 leading-none font-serif">"</div>
              <p className="text-xl text-gray-800 leading-relaxed font-medium mb-8 relative z-10 italic">
                Patient experience data is what the truth is of a condition... without it, I think we're just guessing.
              </p>
              <div>
                <p className="font-bold text-gray-900">Christine Cockburn</p>
                <p className="text-sm font-mono text-gray-500 mt-1 uppercase tracking-wider">CEO, Rare Cancers Australia</p>
              </div>
            </div>
            <div className="relative">
              <div className="text-8xl text-biomarker opacity-20 absolute -top-8 -left-6 leading-none font-serif">"</div>
              <p className="text-xl text-gray-800 leading-relaxed font-medium mb-8 relative z-10 italic">
                You're an expert in your area and I'm an expert in mine, and no one can speak to that experience.
              </p>
              <div>
                <p className="font-bold text-gray-900">Tanya Hall</p>
                <p className="text-sm font-mono text-gray-500 mt-1 uppercase tracking-wider">CEO, Hearts4Heart</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Manifesto (mymind Poetic Microcopy) */}
      <section className="py-40 bg-global flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            No data sold.<br className="hidden md:block"/>
            <span className="text-gray-400">No scoring without context.</span><br className="hidden md:block"/>
            End-to-end encrypted.<br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-biomarker to-indigo">You are the sole owner of your biological truth.</span>
          </h2>
        </div>
      </section>
    </div>
  );
};
