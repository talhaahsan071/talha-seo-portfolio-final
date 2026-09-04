import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Database, 
  Terminal, 
  Layers,
  Search,
  Activity
} from 'lucide-react';
import { aiSeoPipelines } from '../data/portfolioData';

export default function AiSeoLab() {
  const [activeTab, setActiveTab] = useState(0);
  const currentPipeline = aiSeoPipelines[activeTab];

  return (
    <section id="ai-lab" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#7C3AED]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D946EF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F4FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] mb-3 shadow-xs font-bold">
            <Zap className="w-4 h-4 text-[#7C3AED]" />
            <span>THE AI SEO AUTOMATION LAB</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#0F0728] tracking-tight">
            How I Use AI &amp; Automation to Out-Execute Traditional Agencies
          </h2>
          <p className="text-[#3B2B5C] text-base sm:text-lg mt-3 font-medium">
            I don't just "use ChatGPT for basic blog posts"—I build programmatic search pipelines that automate intent clustering, content brief architecture, and GSC tracking 5x faster.
          </p>
        </div>

        {/* Pipeline Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {aiSeoPipelines.map((pipe, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={pipe.id}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-3 rounded-2xl font-mono text-xs font-bold transition-all flex items-center gap-2 shadow-xs ${
                  isActive
                    ? 'bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/25 scale-[1.02]'
                    : 'bg-[#F8F4FF] hover:bg-[#F3E8FF] text-[#3B2B5C] border border-[#E9D8FD]'
                }`}
              >
                <Cpu className="w-4 h-4" />
                <span>{pipe.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-md ${
                  isActive ? 'bg-white/20 text-white' : 'bg-[#E9D8FD] text-[#7C3AED]'
                }`}>
                  {pipe.speed}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Pipeline Showcase Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPipeline.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#F8F4FF] border-2 border-[#E9D8FD] rounded-3xl p-6 sm:p-10 shadow-xl"
          >
            {/* Pipeline Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#E9D8FD] pb-6 mb-8">
              <div>
                <span className="font-mono text-xs text-[#7C3AED] font-bold uppercase tracking-wider block mb-1">
                  Active Automation Architecture
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0F0728]">
                  {currentPipeline.name}
                </h3>
                <p className="font-sans text-sm text-[#4A3B69] mt-1 font-medium">
                  {currentPipeline.tagline}
                </p>
              </div>

              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-[#E9D8FD] shadow-2xs">
                <Sparkles className="w-4 h-4 text-[#059669]" />
                <span className="font-mono text-xs font-bold text-[#059669]">
                  {currentPipeline.speed}
                </span>
              </div>
            </div>

            {/* Step-by-Step Execution Workflow */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {currentPipeline.steps.map((step) => (
                <div 
                  key={step.stepNum}
                  className="bg-white border border-[#E9D8FD] rounded-2xl p-5 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-[#F8F4FF] border border-[#E9D8FD] font-mono text-xs font-bold text-[#7C3AED] flex items-center justify-center mb-3">
                      0{step.stepNum}
                    </div>
                    <h4 className="font-heading text-sm font-bold text-[#0F0728] mb-1.5">
                      {step.label}
                    </h4>
                    <p className="font-sans text-xs text-[#5B4B7C] leading-relaxed font-medium">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Simulated Live Output Terminal / JSON Box */}
            <div className="bg-[#0F0728] rounded-2xl p-5 sm:p-6 text-white border border-[#2D1B4E] shadow-lg">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-[#C8B8E8]">
                  <Terminal className="w-4 h-4 text-[#A78BFA]" />
                  <span>OUTPUT PREVIEW: Automated Structured Execution</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase">Ready for Production</span>
                </div>
              </div>

              {/* Dynamic JSON / Structured Terminal view */}
              <pre className="font-mono text-xs text-[#E9D8FD] leading-relaxed overflow-x-auto whitespace-pre-wrap">
                {JSON.stringify(currentPipeline.sampleOutput, null, 2)}
              </pre>
            </div>

            {/* Bottom Proof Note */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#6B5B8D] font-semibold pt-4 border-t border-[#E9D8FD]">
              <span>Powered by Python, Claude 3.5 Sonnet, GPT-4o &amp; Google Search Console API</span>
              <a
                href="#contact"
                className="text-[#7C3AED] hover:text-[#5B21B6] font-bold flex items-center gap-1"
              >
                <span>Request Custom AI Search Automation for Your Brand</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
