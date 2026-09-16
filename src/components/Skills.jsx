import React from 'react';
import { Link } from 'react-router-dom';
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
        <div className="mb-10 sm:mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F4FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] mb-3 shadow-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
            <span>STRATEGIC CORE OFFERINGS &amp; DELIVERABLES</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F0728] leading-tight">
            Strategic Core Offerings &amp; Deliverables
          </h2>
          <p className="text-[#3B2B5C] text-sm sm:text-base mt-2.5 font-medium">
            No bloated agency checklists or confusing jargon. Four proven search services built to bring real traffic, customer phone calls, and sales.
          </p>
        </div>

        {/* 4 Core Offerings Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {skills.map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || Cpu;

            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group relative bg-[#F8F4FF] hover:bg-white border border-[#E9D8FD] hover:border-[#7C3AED] rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl hover:shadow-[#7C3AED]/12 hover:-translate-y-1"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-[#F3E8FF] border border-[#E9D8FD] group-hover:border-[#7C3AED]/40 flex items-center justify-center text-[#7C3AED] transition-colors mb-4 shadow-xs">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Problem Callout Box */}
                  <div className="mb-3 p-2 rounded-lg bg-white border border-[#E9D8FD] text-[11px] font-mono text-[#D946EF] font-bold flex items-start gap-1.5 shadow-2xs">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#D946EF]" />
                    <span>{skill.problemSolved}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#0F0728] mb-2 group-hover:text-[#7C3AED] transition-colors">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-[#3B2B5C] leading-relaxed font-medium mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Tags & Deep Dive Link */}
                <div className="pt-3 border-t border-[#E9D8FD] flex flex-col gap-2">
                  <div className="flex flex-wrap gap-1">
                    {skill.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="font-mono text-[9px] uppercase font-bold px-2 py-0.5 rounded-md bg-white border border-[#E9D8FD] text-[#3B2B5C]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/services/${skill.id}`}
                    className="font-mono text-[11px] font-bold text-[#7C3AED] hover:text-[#6D28D9] flex items-center gap-1 mt-1 group/lnk"
                  >
                    <span>Explore Deliverables</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover/lnk:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Fast CTA with link to /services */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F8F4FF] hover:bg-[#F3E8FF] border border-[#E9D8FD] text-xs font-mono font-bold text-[#7C3AED] transition-colors"
          >
            <span>View All 4 Dedicated Services Breakdowns</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-[#6B5B8D] hover:text-[#7C3AED] group"
          >
            <span>Have a custom challenge? Let's discuss a tailored roadmap</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
