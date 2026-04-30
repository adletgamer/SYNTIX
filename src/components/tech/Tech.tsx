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
