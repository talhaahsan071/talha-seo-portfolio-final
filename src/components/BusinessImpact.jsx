import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function BusinessImpact() {
  const stats = [
    {
      value: personalInfo.experienceYears,
      label: "Years Experience",
      subtext: "Continuous hands-on expertise"
    },
    {
      value: personalInfo.projectsDelivered,
      label: "Projects Delivered",
      subtext: "Across multiple global markets"
    },
    {
      value: "360°",
      label: "Digital Services",
      subtext: "SEO, Content, Ads & CRO"
    },
    {
      value: "99%",
      label: "Client Satisfaction",
      subtext: "Measurable ROI guaranteed"
    }
  ];

  return (
    <section className="py-24 bg-[#0B0614] text-white border-t border-b border-[#23143E] relative overflow-hidden">
      
      {/* Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#7C3AED]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#180E30] border border-[#3E2468] font-mono text-xs text-[#A78BFA] mb-6 shadow-sm font-bold">
          <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
          <span>MEASURABLE BUSINESS IMPACT</span>
        </div>

        {/* Big Headline */}
        <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] max-w-4xl mx-auto tracking-tight mb-5">
          Good Design Looks Great. <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#E879F9]">
            Great Digital Strategy Performs.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-[#C8B8E8] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal mb-16">
          We don't focus on vanity metrics. Every web application, SEO sprint, and marketing funnel is engineered to measurably increase conversions, organic pipeline, and bottom-line revenue.
        </p>

        {/* 4 Impact Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-[#130B24] border border-[#2D1B4E] hover:border-[#7C3AED]/70 p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:shadow-[0_10px_30px_rgba(124,58,237,0.18)] hover:-translate-y-1 text-center group"
            >
              <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2 tracking-tight group-hover:text-[#A78BFA] transition-colors">
                {stat.value}
              </div>
              <div className="font-heading text-base sm:text-lg font-bold text-[#E9D8FD] mb-1">
                {stat.label}
              </div>
              <div className="font-mono text-xs text-[#8A7AA8] font-medium">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
