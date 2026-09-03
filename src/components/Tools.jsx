import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, CheckCircle2, Star, ShieldCheck } from 'lucide-react';
import { tools } from '../data/portfolioData';

export default function Tools() {
  const [activeTool, setActiveTool] = useState(null);

  return (
    <section id="tools" className="py-20 bg-[#F8F4FF] border-t border-b border-[#E9D8FD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
              <span className="font-bold">03 // Tool Stack &amp; Software</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F0728]">
              Industry-Standard SEO Architecture
            </h2>
          </div>
          <p className="font-mono text-xs text-[#6B5B8D]">
            Hover over software tiles to view proficiency &amp; primary use cases
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
          {tools.map((tool, idx) => {
            const isHovered = activeTool === idx;

            return (
              <div
                key={tool.name}
                onMouseEnter={() => setActiveTool(idx)}
                onMouseLeave={() => setActiveTool(null)}
                className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? 'bg-white border-[#7C3AED] shadow-xl shadow-[#7C3AED]/15 scale-[1.02]'
                    : 'bg-white/80 border-[#E9D8FD] hover:border-[#7C3AED]/50 shadow-xs'
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-serif text-lg font-bold transition-colors ${
                    isHovered ? 'text-[#7C3AED]' : 'text-[#0F0728]'
                  }`}>
                    {tool.name}
                  </span>
                  <span className={`font-mono text-[10px] px-2 py-0.5 rounded border transition-colors font-bold ${
                    isHovered
                      ? 'bg-[#F3E8FF] border-[#7C3AED]/40 text-[#7C3AED]'
                      : 'bg-[#F8F4FF] border-[#E9D8FD] text-[#6B5B8D]'
                  }`}>
                    {tool.proficiency}
                  </span>
                </div>

                {/* Category */}
                <p className="font-mono text-xs text-[#7C3AED] mb-2 font-bold">
                  {tool.category}
                </p>

                {/* Primary Use Case */}
                <p className="font-sans text-xs text-[#3B2B5C] line-clamp-2 leading-relaxed font-medium">
                  {tool.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Audit Note */}
        <div className="mt-8 p-4 bg-white border border-[#E9D8FD] rounded-2xl flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#3B2B5C] shadow-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#059669]" />
            <span className="font-bold">All enterprise tools licensed &amp; audited for maximum data integrity</span>
          </div>
          <span className="text-[#6B5B8D]">Daily SERP tracking &amp; API automation enabled</span>
        </div>

      </div>
    </section>
  );
}
