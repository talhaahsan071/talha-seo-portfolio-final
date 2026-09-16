import React from 'react';
import { 
  Sparkles, 
  Terminal, 
  Cpu, 
  Database, 
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Layers
} from 'lucide-react';
import { aiSeoWorkflow } from '../data/portfolioData';

export default function AiSeoLab() {
  return (
    <section id="ai-lab" className="py-20 bg-white border-b border-[#E9D8FD]/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D8FD] mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
            <span className="font-mono text-xs font-bold text-[#7C3AED] uppercase tracking-wider">
              {aiSeoWorkflow.badge}
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#0F0728] tracking-tight mb-3">
            {aiSeoWorkflow.title}
          </h2>
          <p className="text-[#3B2B5C] text-base leading-relaxed">
            {aiSeoWorkflow.description}
          </p>
        </div>

        {/* 5-Stage Workflow Pipeline Display */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 mb-8">
          {aiSeoWorkflow.stages.map((stage, sIdx) => (
            <div
              key={stage.stage}
              className="bg-[#FBF9FE] border border-[#E9D8FD] rounded-xl p-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] font-bold text-[#7C3AED] bg-white px-2 py-0.5 rounded border border-[#E9D8FD]">
                    {stage.stage}
                  </span>
                </div>
                <h3 className="font-heading text-sm font-bold text-[#0F0728] mb-1">
                  {stage.name}
                </h3>
                <p className="text-xs text-[#6B5B8D] leading-snug">
                  {stage.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Real Practitioner Example Console Box */}
        <div className="rounded-2xl bg-[#0F0728] text-white p-6 sm:p-7 border border-[#3B2B5C] shadow-lg">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#3B2B5C]/60">
            <div className="flex items-center gap-2 font-mono text-xs text-[#E9D8FD]">
              <Terminal className="w-4 h-4 text-[#7C3AED]" />
              <span className="font-bold">Real Implementation: {aiSeoWorkflow.example.headline}</span>
            </div>
            <span className="font-mono text-[10px] text-[#059669] font-bold bg-[#059669]/20 px-2 py-0.5 rounded">
              Human-Guided Automation
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[#E9D8FD] font-bold block mb-1">Input Dataset</span>
              <p className="text-[#CBD5E1] text-[11px] leading-relaxed">
                {aiSeoWorkflow.example.input}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[#E9D8FD] font-bold block mb-1">Algorithmic Method</span>
              <p className="text-[#CBD5E1] text-[11px] leading-relaxed">
                {aiSeoWorkflow.example.method}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#7C3AED]/20 border border-[#7C3AED]/40">
              <span className="text-[#E9D8FD] font-bold block mb-1">Business Impact</span>
              <p className="text-white text-[11px] leading-relaxed font-bold">
                {aiSeoWorkflow.example.impact}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
