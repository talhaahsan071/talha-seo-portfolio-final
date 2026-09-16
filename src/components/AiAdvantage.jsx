import React from 'react';
import { 
  Zap, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Cpu, 
  TrendingUp, 
  Code2,
  Terminal,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { aiAdvantageData, personalInfo } from '../data/portfolioData';

export default function AiAdvantage() {
  return (
    <section id="ai-advantage" className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF8FF] via-white to-[#FAF8FF] border-b border-[#E9D8FD]/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Compact & Scannable */}
        <div className="max-w-3xl mb-10 sm:mb-14 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D8FD] mb-2.5 shadow-2xs">
            <Zap className="w-3.5 h-3.5 text-[#7C3AED]" />
            <span className="font-mono text-[11px] font-bold text-[#7C3AED] uppercase tracking-wider">
              {aiAdvantageData.badge}
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#0F0728] tracking-tight mb-2.5">
            {aiAdvantageData.title}
          </h2>
          <p className="text-[#3B2B5C] text-xs sm:text-base leading-relaxed">
            {aiAdvantageData.subtitle}
          </p>
        </div>

        {/* Traditional Agency vs. Talha's AI-Augmented Workflow */}
        <div className="mb-10 rounded-2xl bg-white border border-[#E9D8FD] p-4 sm:p-6 shadow-xs overflow-hidden">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E9D8FD]">
            <span className="font-mono text-xs font-bold text-[#0F0728] uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#7C3AED]" />
              Execution Speed &amp; Accuracy Breakdown
            </span>
            <span className="font-mono text-[10px] font-bold text-[#059669] bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-[#A7F3D0]">
              5x Faster Delivery
            </span>
          </div>

          <div className="space-y-3">
            {aiAdvantageData.comparison.map((item, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 p-3 rounded-xl bg-[#FAF8FF] border border-[#E9D8FD]/60 text-xs"
              >
                <div className="md:col-span-3 font-heading font-bold text-[#0F0728] flex items-center">
                  {item.metric}
                </div>
                <div className="md:col-span-4 text-[#8C7DA8] flex items-start gap-2">
                  <span className="text-[#E53E3E] font-mono font-bold text-[10px] shrink-0 mt-0.5">TRADITIONAL:</span>
                  <span className="leading-snug">{item.traditional}</span>
                </div>
                <div className="md:col-span-5 text-[#0F0728] flex items-start gap-2 font-medium bg-white p-2 rounded-lg border border-[#E9D8FD]">
                  <span className="text-[#059669] font-mono font-bold text-[10px] shrink-0 mt-0.5">TALHA (AI):</span>
                  <span className="leading-snug text-[#3B2B5C]">{item.talhaAi}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Core AI Pipeline Capabilities - Compact Cards on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {aiAdvantageData.capabilities.map((cap, cIdx) => (
            <div
              key={cIdx}
              className="bg-white border border-[#E9D8FD] hover:border-[#7C3AED] rounded-2xl p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="font-mono text-[9px] font-bold text-[#7C3AED] bg-[#F3E8FF] px-2 py-0.5 rounded border border-[#E9D8FD]">
                    {cap.badge}
                  </span>
                  <Cpu className="w-3.5 h-3.5 text-[#8C7DA8]" />
                </div>
                <h3 className="font-heading text-sm font-bold text-[#0F0728] mb-1.5">
                  {cap.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#6B5B8D] leading-relaxed mb-3">
                  {cap.description}
                </p>
              </div>

              <div className="pt-2.5 border-t border-[#E9D8FD]/70 font-mono text-[10px] text-[#059669] font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Zero Guesswork</span>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal Insight Snippet */}
        <div className="rounded-xl bg-[#0F0728] p-4 sm:p-5 border border-[#3B2B5C] text-white font-mono text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#7C3AED] shrink-0" />
            <span className="text-[#E9D8FD] text-[11px] sm:text-xs">
              <strong className="text-white">Practitioner Note:</strong> AI accelerates the data crunching. Commercial judgment and execution stay 100% human-crafted.
            </span>
          </div>
          <a
            href={personalInfo.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-[11px] transition-colors shrink-0 flex items-center gap-1"
          >
            <span>Discuss AI SEO</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
}
