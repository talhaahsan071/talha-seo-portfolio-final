import React from 'react';
import { Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { toolsCategories } from '../data/portfolioData';

export default function Tools() {
  return (
    <section className="py-20 bg-white border-b border-[#E9D8FD]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D8FD] mb-3 shadow-2xs">
            <Wrench className="w-3.5 h-3.5 text-[#7C3AED]" />
            <span className="font-mono text-xs font-bold text-[#7C3AED] uppercase tracking-wider">
              Tooling &amp; Technical Stack
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#0F0728] tracking-tight mb-3">
            Industry-Standard Platforms &amp; Modern Diagnostic Utilities
          </h2>
          <p className="text-[#3B2B5C] text-base leading-relaxed">
            I rely on industry gold standards to extract truth from search engine algorithms and deliver transparent data to clients.
          </p>
        </div>

        {/* 4 Tool Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {toolsCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8FF] border border-[#E9D8FD] rounded-2xl p-5 hover:border-[#7C3AED] transition-colors shadow-2xs"
            >
              <h3 className="font-heading text-sm font-bold text-[#0F0728] mb-3 pb-2 border-b border-[#E9D8FD]">
                {cat.category}
              </h3>
              <div className="space-y-2">
                {cat.tools.map((tool, tIdx) => (
                  <div key={tIdx} className="flex items-center gap-2 text-xs font-mono text-[#3B2B5C]">
                    <CheckCircle2 className="w-3 h-3 text-[#7C3AED] shrink-0" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
