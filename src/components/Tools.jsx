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
  Target,
  Layers,
  Cpu,
  ShoppingBag,
  Terminal
} from 'lucide-react';
import { top1PercentAdvantage, seoStackCategories } from '../data/portfolioData';

const advantageIcons = [
  Search,
  Zap,
  TrendingUp,
  Users
];

const categoryIcons = [
  Search,
  Cpu,
  ShoppingBag,
  Terminal
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {top1PercentAdvantage.map((adv, idx) => {
            const Icon = advantageIcons[idx] || Sparkles;

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

        {/* Categorized SEO Stack (Organized by Purpose) */}
        <div className="pt-10 border-t border-[#E9D8FD]">
          <div className="mb-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] mb-2 font-bold">
              <Layers className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span>THE SPECIALIZED SEO TOOLKIT</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F0728]">
              Tools Organized by Strategic Purpose
            </h3>
            <p className="text-sm text-[#4A3B69] font-medium mt-1">
              Every tool in my stack serves an exact function—from deep crawl log inspection to modern AI intent clustering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoStackCategories.map((cat, cIdx) => {
              const CategoryIcon = categoryIcons[cIdx] || Layers;
              return (
                <div
                  key={cIdx}
                  className="bg-white border border-[#E9D8FD] rounded-3xl p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#F8F4FF] border border-[#E9D8FD] flex items-center justify-center text-[#7C3AED] mb-4">
                      <CategoryIcon className="w-5 h-5" />
                    </div>

                    <h4 className="font-heading text-base font-bold text-[#0F0728] mb-1.5">
                      {cat.category}
                    </h4>
                    <p className="font-sans text-xs text-[#6B5B8D] font-medium mb-4 leading-relaxed">
                      {cat.description}
                    </p>

                    <div className="space-y-3 pt-3 border-t border-[#E9D8FD]">
                      {cat.tools.map((t, tIdx) => (
                        <div key={tIdx}>
                          <span className="font-mono text-xs font-bold text-[#0F0728] block">
                            {t.name}
                          </span>
                          <span className="font-sans text-[11px] text-[#5B4B7C] block leading-snug">
                            {t.role}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
