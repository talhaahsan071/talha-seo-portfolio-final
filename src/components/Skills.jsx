import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  FileCode2, 
  Share2, 
  Search, 
  ShoppingBag, 
  Layers, 
  Sparkles, 
  ShoppingCart 
} from 'lucide-react';
import { skills } from '../data/portfolioData';

const iconMap = {
  Cpu: Cpu,
  FileCode2: FileCode2,
  Share2: Share2,
  Search: Search,
  ShoppingBag: ShoppingBag,
  Layers: Layers,
  Sparkles: Sparkles,
  ShoppingCart: ShoppingCart
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F8F4FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
            <span className="font-bold">02 // Skills &amp; Core Capabilities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F0728] leading-tight">
            Full-Funnel Organic Search Expertise
          </h2>
          <p className="text-[#3B2B5C] text-base mt-3 font-medium">
            Disciplined, battle-tested methodologies designed for enterprise scalability across local and international markets.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Cpu;

            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="group relative bg-[#F8F4FF] hover:bg-white border border-[#E9D8FD] hover:border-[#7C3AED] rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-[#7C3AED]/10 hover:-translate-y-1"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#F3E8FF] border border-[#E9D8FD] group-hover:border-[#7C3AED]/40 flex items-center justify-center text-[#7C3AED] transition-colors mb-5 shadow-xs">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-[#0F0728] mb-2 group-hover:text-[#7C3AED] transition-colors">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-[#3B2B5C] leading-relaxed mb-6 font-medium">
                    {skill.description}
                  </p>
                </div>

                {/* Sub-tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E9D8FD]">
                  {skill.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-0.5 rounded font-mono text-[10px] bg-white text-[#6B5B8D] group-hover:text-[#7C3AED] border border-[#E9D8FD] font-semibold transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
