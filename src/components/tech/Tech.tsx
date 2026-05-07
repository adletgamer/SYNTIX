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





    </div>
  );
};
