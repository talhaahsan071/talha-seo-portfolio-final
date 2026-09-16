import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  Search,
  Sliders,
  Wrench,
  Link,
  LineChart
} from 'lucide-react';
import { processSteps } from '../data/portfolioData';

export default function Process() {
  const iconList = [Search, Sliders, Wrench, Link, LineChart];

  return (
    <section className="py-20 bg-[#FAF8FF] border-b border-[#E9D8FD]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E9D8FD] mb-3 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#7C3AED]" />
            <span className="font-mono text-xs font-bold text-[#7C3AED] uppercase tracking-wider">
              5-Stage Methodology
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#0F0728] tracking-tight mb-3">
            A Transparent, Repeatable Framework for Search Dominance
          </h2>
          <p className="text-[#3B2B5C] text-base leading-relaxed">
            I don't guess what Google wants. We start with technical diagnostics, fix real crawl blocks, prioritize commercial keywords, and execute systematically.
          </p>
        </div>

        {/* 5-Step Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {processSteps.map((step, idx) => {
            const Icon = iconList[idx] || Search;

            return (
              <div
                key={step.step}
                className="bg-white border border-[#E9D8FD] hover:border-[#7C3AED] rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-extrabold text-[#7C3AED] bg-[#F3E8FF] px-2.5 py-0.5 rounded-md">
                      {step.step}
                    </span>
                    <Icon className="w-4 h-4 text-[#6B5B8D]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-base font-bold text-[#0F0728] mb-1">
                    {step.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="font-mono text-[10px] text-[#7C3AED] font-bold uppercase tracking-wide mb-2.5">
                    {step.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-[#3B2B5C] leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Deliverable Badge */}
                <div className="pt-3 border-t border-[#E9D8FD] font-mono text-[10px] text-[#059669] font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 shrink-0" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
