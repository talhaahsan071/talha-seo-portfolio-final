import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, CheckCircle2, Zap } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Journey() {
  return (
    <section id="journey" className="py-24 bg-[#0B0614] text-white relative overflow-hidden">
      
      {/* Background ambient glow mesh in Royal Purple */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#7C3AED]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#8B5CF6]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#180E30] border border-[#3E2468] font-mono text-xs text-[#A78BFA] mb-4 shadow-sm font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>GROWTH &amp; CAREER EVOLUTION</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            My Journey
          </h2>

          <p className="font-sans text-[#C8B8E8] text-base sm:text-lg leading-relaxed font-normal">
            From foundational SEO &amp; digital marketing experiments in 2023 to leading agency growth, managing multi-project portfolios, and scaling global client partnerships.
          </p>
        </div>

        {/* Timeline Container with Center Vertical Line */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Vertical Glowing Line in Royal Purple */}
          <div className="absolute left-4 md:left-1/2 top-6 bottom-6 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#7C3AED] via-[#A78BFA] to-[#7C3AED] hidden sm:block shadow-[0_0_15px_rgba(124,58,237,0.8)]" />

          {/* Timeline Items List with Slide-in on Scroll */}
          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Glowing Node in Royal Purple */}
                  <div className="hidden sm:flex absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0B0614] border-2 border-[#7C3AED] shadow-[0_0_18px_rgba(124,58,237,0.9)] items-center justify-center text-[#A78BFA] z-10">
                    <Zap className="w-4 h-4 fill-[#A78BFA]" />
                  </div>

                  {/* Empty Spacer Column for Desktop Stagger */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card Column with Slide-In Animation */}
                  <div className={`w-full md:w-1/2 ${
                    isEven ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                      className="bg-[#130B24] hover:bg-[#1A0F33] border border-[#2D1B4E] hover:border-[#7C3AED] p-6 sm:p-8 rounded-3xl transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(124,58,237,0.2)] group"
                    >
                      {/* Top Header Row with Year and Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2D1B4E] pb-4 mb-4">
                        <span className="font-heading text-xl sm:text-2xl font-extrabold text-white">
                          {exp.period.split('—')[0].replace('JANUARY', '').replace('AUGUST', '').replace('MAY', '').replace('JULY', '').trim()}
                        </span>
                        
                        <span className="font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full bg-[#20113D] border border-[#442377] text-[#A78BFA] tracking-wider">
                          {exp.badge}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-[#A78BFA] transition-colors mb-1">
                        {exp.role}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs text-[#A898C8] mb-4 font-semibold">
                        <span className="text-[#E9D8FD] font-bold">{exp.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-[#34D399]">
                          <MapPin className="w-3.5 h-3.5" /> {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="font-sans text-sm text-[#C8B8E8] leading-relaxed mb-5 font-normal">
                        {exp.description}
                      </p>

                      {/* Achievements Bullet Checklist with Emerald Ticks */}
                      <div className="space-y-2.5 pt-4 border-t border-[#2D1B4E]">
                        {exp.achievements.map((item, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E9D8FD] font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>

                    </motion.div>
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
