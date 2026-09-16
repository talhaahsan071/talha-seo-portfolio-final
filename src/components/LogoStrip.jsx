import React from 'react';
import { selectedBrands, selectedBrandsCaption } from '../data/portfolioData';
import { Building2, Sparkles, ExternalLink } from 'lucide-react';

export default function LogoStrip() {
  const marqueeList = [...selectedBrands, ...selectedBrands];

  return (
    <section className="py-6 bg-[#FBF9FE] border-y border-[#E9D8FD]/80 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#FBF9FE] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#FBF9FE] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 text-center">
        <p className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#6B5B8D] flex items-center justify-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[#7C3AED]" />
          <span>{selectedBrandsCaption}</span>
        </p>
      </div>

      <div className="flex overflow-hidden select-none">
        <div className="animate-infinite-marquee flex items-center gap-3 sm:gap-4 pl-4">
          {marqueeList.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white border border-[#E9D8FD] hover:border-[#7C3AED] shadow-2xs hover:shadow-xs transition-all duration-200 shrink-0 group"
            >
              {brand.logo ? (
                <div className="h-6 sm:h-7 w-auto max-w-[90px] sm:max-w-[110px] flex items-center justify-center overflow-hidden">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-200"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="w-6 h-6 rounded-lg bg-[#F3E8FF] flex items-center justify-center text-[#7C3AED] shrink-0 group-hover:bg-[#7C3AED] group-hover:text-white transition-colors">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
              )}

              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-heading text-xs font-bold text-[#0F0728] tracking-tight group-hover:text-[#7C3AED] transition-colors whitespace-nowrap">
                    {brand.name}
                  </span>
                  {brand.url && (
                    <ExternalLink className="w-2.5 h-2.5 text-[#8C7DA8] group-hover:text-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
                <span className="font-mono text-[9px] text-[#8C7DA8] font-medium leading-none">
                  {brand.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
