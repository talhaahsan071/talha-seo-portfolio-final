import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Target, 
  FileCode2, 
  Share2, 
  BarChart3, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { processSteps } from '../data/portfolioData';

const stepIcons = [Search, Target, FileCode2, Share2, BarChart3];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F8F4FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] mb-3 shadow-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
            <span>08 // 5-Stage Growth Methodology</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#0F0728] leading-tight">
            Systematized Search &amp; Growth Framework
          </h2>
          <p className="text-[#3B2B5C] text-base mt-3 font-medium">
            A disciplined, data-backed workflow refined across 50+ projects, delivering predictable rankings, traffic acceleration, and bottom-line revenue.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Sparkles;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`bg-[#F8F4FF] hover:bg-white border border-[#E9D8FD] hover:border-[#7C3AED] p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl hover:shadow-[#7C3AED]/12 group ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Top Step Pill & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading text-2xl font-extrabold text-[#7C3AED] group-hover:text-[#D946EF] transition-colors">
                      {step.step}
                    </span>
                    <div className="p-3 rounded-2xl bg-white border border-[#E9D8FD] text-[#7C3AED] group-hover:scale-110 transition-transform shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading text-xl font-bold text-[#0F0728] mb-1">
                    {step.title}
                  </h3>
                  <p className="font-mono text-xs text-[#7C3AED] font-bold mb-4">
                    {step.subtitle}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-sm text-[#3B2B5C] leading-relaxed font-medium mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverable Footer */}
                <div className="pt-4 border-t border-[#E9D8FD] font-mono text-xs flex items-center justify-between text-[#0F0728] font-bold">
                  <span className="text-[#6B5B8D]">Deliverable:</span>
                  <span className="text-[#059669]">{step.deliverable}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
