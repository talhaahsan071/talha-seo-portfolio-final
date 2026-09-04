import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  ShoppingCart, 
  MapPin, 
  Sparkles, 
  Target, 
  Award,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { skills } from '../data/portfolioData';

const iconMap = {
  ShoppingCart: ShoppingCart,
  MapPin: MapPin,
  Cpu: Cpu,
  Sparkles: Sparkles,
  Target: Target,
  Award: Award
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F4FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] mb-3 shadow-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
            <span>SOLUTIONS THAT DRIVE REVENUE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#0F0728] leading-tight">
            Search Solutions Built to Solve Real Business Bottlenecks
          </h2>
          <p className="text-[#3B2B5C] text-base sm:text-lg mt-3 font-medium">
            No bloated agency checklists or vanity metrics. Every service below is engineered to resolve a specific commercial bottleneck and turn search visitors into paying customers.
          </p>
        </div>

        {/* 6 Problem-Solving Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || Cpu;

            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative bg-[#F8F4FF] hover:bg-white border border-[#E9D8FD] hover:border-[#7C3AED] rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-2xl hover:shadow-[#7C3AED]/12 hover:-translate-y-1.5"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-[#F3E8FF] border border-[#E9D8FD] group-hover:border-[#7C3AED]/40 flex items-center justify-center text-[#7C3AED] transition-colors mb-5 shadow-xs">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Problem Callout Box */}
                  <div className="mb-4 p-3 rounded-xl bg-white border border-[#E9D8FD] text-xs font-mono text-[#D946EF] font-bold flex items-start gap-2 shadow-2xs">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#D946EF]" />
                    <span>{skill.problemSolved}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-[#0F0728] mb-3 group-hover:text-[#7C3AED] transition-colors">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-[#3B2B5C] leading-relaxed font-medium mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E9D8FD]">
                  {skill.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="font-mono text-[10px] uppercase font-bold px-2.5 py-1 rounded-lg bg-white border border-[#E9D8FD] text-[#3B2B5C]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Fast CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-mono font-bold text-[#7C3AED] hover:text-[#6D28D9] group"
          >
            <span>Have a custom challenge? Let's discuss a tailored organic search roadmap</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
