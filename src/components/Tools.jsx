import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Search, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  Zap,
  Target
} from 'lucide-react';
import { top1PercentAdvantage } from '../data/portfolioData';

const iconMap = [
  Search,
  Zap,
  TrendingUp,
  Users
];

export default function Tools() {
  return (
    <section id="tools" className="py-24 bg-[#F8F4FF] border-t border-b border-[#E9D8FD] relative overflow-hidden">
      
      {/* Background Lighting Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7C3AED]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#D946EF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Top 1% Advantage */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] mb-3 shadow-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
            <span>THE TOP 1% ADVANTAGE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#0F0728] leading-tight">
            Why Modern Brands Work With Me Over Traditional Agencies
          </h2>
          <p className="text-[#3B2B5C] text-base sm:text-lg mt-3 font-medium">
            In a crowded market of outdated SEO agencies and generic checklists, here is how my research-first, AI-accelerated methodology delivers disproportionate growth for your business.
          </p>
        </div>

        {/* 4 Top-1% Strategic Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {top1PercentAdvantage.map((adv, idx) => {
            const Icon = iconMap[idx] || Sparkles;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white border-2 border-[#E9D8FD] hover:border-[#7C3AED] rounded-3xl p-8 sm:p-9 shadow-sm hover:shadow-2xl hover:shadow-[#7C3AED]/12 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header with Number & Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F8F4FF] border border-[#E9D8FD] group-hover:border-[#7C3AED]/50 flex items-center justify-center text-[#7C3AED] group-hover:scale-105 transition-all shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#7C3AED] font-bold px-3 py-1 rounded-full bg-[#F8F4FF] border border-[#E9D8FD]">
                        {adv.badge}
                      </span>
                      <span className="font-mono text-xs text-[#6B5B8D] font-bold">
                        PILLAR // {adv.number}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0F0728] mb-1.5 group-hover:text-[#7C3AED] transition-colors">
                    {adv.title}
                  </h3>
                  <p className="font-mono text-xs text-[#6B5B8D] font-semibold mb-4">
                    {adv.subtitle}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-sm sm:text-base text-[#3B2B5C] leading-relaxed font-medium mb-6">
                    {adv.description}
                  </p>
                </div>

                {/* Bottom Metric & Quality Assurance */}
                <div className="pt-6 border-t border-[#E9D8FD] flex items-center justify-between">
                  <span className="font-mono text-xs text-[#059669] font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                    <span>{adv.metric}</span>
                  </span>
                  <span className="font-mono text-[11px] text-[#6B5B8D] font-semibold">
                    Client Growth Standard
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Proof Assurance Box */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-[#E9D8FD] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center text-[#059669]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading text-sm sm:text-base font-bold text-[#0F0728]">
                Proven Across 50+ Projects in 8+ Industries
              </h4>
              <p className="font-sans text-xs text-[#6B5B8D] font-medium">
                From national retail giants to international corporate legal firms, every client gets custom strategic execution.
              </p>
            </div>
          </div>

          <a
            href="#case-studies"
            className="px-5 py-2.5 rounded-xl bg-[#F8F4FF] hover:bg-[#F3E8FF] border border-[#E9D8FD] text-[#7C3AED] font-mono text-xs font-bold transition-all shrink-0"
          >
            Inspect Client Results &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
