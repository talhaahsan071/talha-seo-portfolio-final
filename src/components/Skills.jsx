import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Cpu, 
  Link as LinkIcon, 
  MapPin, 
  ShoppingCart, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { skills, personalInfo } from '../data/portfolioData';

const iconMap = {
  FileText: FileText,
  Cpu: Cpu,
  Link: LinkIcon,
  MapPin: MapPin,
  ShoppingCart: ShoppingCart,
  BarChart3: BarChart3
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F4FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] mb-3 shadow-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
            <span>SERVICES I OFFER</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F0728] leading-tight">
            Complete SEO Services That Bring You Customers &amp; Sales
          </h2>
          <p className="text-[#3B2B5C] text-sm sm:text-base mt-3 font-medium leading-relaxed">
            No bloated agency checklists or confusing technical jargon. Real, proven SEO services built to rank your website #1 on Google, bring you daily phone calls, and grow your sales.
          </p>
        </div>

        {/* 6 Core Offerings Grid (3x2 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || FileText;

            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group relative bg-[#FAF8FF] hover:bg-white border border-[#E9D8FD] hover:border-[#7C3AED] rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl hover:shadow-[#7C3AED]/12 hover:-translate-y-1"
              >
                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-[#F3E8FF] border border-[#E9D8FD] group-hover:border-[#7C3AED]/40 flex items-center justify-center text-[#7C3AED] transition-colors shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-[#7C3AED] bg-white px-2.5 py-1 rounded-full border border-[#E9D8FD]">
                      {skill.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0F0728] mb-2 group-hover:text-[#7C3AED] transition-colors">
                    {skill.title}
                  </h3>

                  {/* Grade 5 Clear Description */}
                  <p className="font-sans text-xs sm:text-sm text-[#3B2B5C] leading-relaxed font-medium mb-5">
                    {skill.shortDescription}
                  </p>

                  {/* 4 Deliverables with Checkmarks */}
                  <div className="space-y-2 mb-6 pt-2 border-t border-[#E9D8FD]/80">
                    <span className="font-mono text-[10px] uppercase font-bold text-[#6B5B8D] tracking-wider block mb-2">
                      What You Get:
                    </span>
                    {skill.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-[#0F0728] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Tags & Action */}
                <div className="pt-4 border-t border-[#E9D8FD] space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {skill.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="font-mono text-[9px] uppercase font-bold px-2 py-0.5 rounded-md bg-white border border-[#E9D8FD] text-[#6B5B8D]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <Link
                      to={`/services/${skill.id}`}
                      className="font-mono text-xs font-bold text-[#7C3AED] hover:text-[#6D28D9] flex items-center gap-1 group/lnk"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover/lnk:translate-x-1" />
                    </Link>

                    <a
                      href={`https://wa.me/923204966959?text=Hi%20Talha,%20I'm%20interested%20in%20your%20${encodeURIComponent(skill.title)}%20service.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] font-bold text-[#059669] hover:underline flex items-center gap-1"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Navigation CTA */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-mono font-bold shadow-md shadow-[#7C3AED]/20 transition-all hover:scale-105"
          >
            <span>View Dedicated Services Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FAF8FF] hover:bg-[#F3E8FF] border border-[#E9D8FD] text-xs font-mono font-bold text-[#0F0728] transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#059669]" />
            <span>Need a Custom SEO Package? Let's Talk</span>
          </a>
        </div>

      </div>
    </section>
  );
}
