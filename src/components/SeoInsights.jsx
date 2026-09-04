import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  TrendingUp,
  FileText
} from 'lucide-react';
import { seoInsights } from '../data/portfolioData';

export default function SeoInsights() {
  return (
    <section id="insights" className="py-24 bg-[#F8F4FF] border-t border-b border-[#E9D8FD] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#7C3AED]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] mb-3 shadow-xs font-bold">
            <BookOpen className="w-4 h-4 text-[#7C3AED]" />
            <span>PRACTITIONER KNOWLEDGE &amp; BLUEPRINTS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#0F0728] leading-tight">
            SEO Insights: How I Solve Complex Search Challenges
          </h2>
          <p className="text-[#3B2B5C] text-base sm:text-lg mt-3 font-medium">
            Real-world methodologies, technical execution frameworks, and architectural blueprints tested on authenticated e-commerce and commercial properties.
          </p>
        </div>

        {/* 4 Insight Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {seoInsights.map((insight, idx) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white border-2 border-[#E9D8FD] hover:border-[#7C3AED] rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-xl hover:shadow-[#7C3AED]/12 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Row: Category & Read Time */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[11px] font-bold px-3 py-1 rounded-full bg-[#F8F4FF] border border-[#E9D8FD] text-[#7C3AED]">
                    {insight.category}
                  </span>
                  <span className="font-mono text-xs text-[#6B5B8D] flex items-center gap-1 font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    {insight.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0F0728] mb-3 group-hover:text-[#7C3AED] transition-colors leading-snug">
                  {insight.title}
                </h3>

                {/* Key Takeaway Callout */}
                <div className="mb-5 p-4 rounded-2xl bg-[#F8F4FF] border border-[#E9D8FD]">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#7C3AED] block mb-1">
                    Executive Takeaway:
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-[#0F0728] font-bold leading-relaxed">
                    {insight.takeaway}
                  </p>
                </div>

                {/* Execution Bullet Points */}
                <div className="space-y-2 mb-6">
                  {insight.keyPoints.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4A3B69] font-medium leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] shrink-0 mt-2" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-[#E9D8FD] flex items-center justify-between font-mono text-xs text-[#7C3AED] font-bold">
                <span>Verified Practical Case Blueprint</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
