import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Cpu, 
  ShoppingCart, 
  Sparkles, 
  MapPin, 
  Target, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Globe,
  Award
} from 'lucide-react';
import { entityBio, personalInfo } from '../data/portfolioData';

const iconMap = {
  Cpu: Cpu,
  ShoppingCart: ShoppingCart,
  Sparkles: Sparkles,
  MapPin: MapPin,
  Target: Target
};

export default function EntityBio() {
  return (
    <section id="profile" className="py-24 bg-[#F8F4FF] border-t border-b border-[#E9D8FD] relative overflow-hidden">
      
      {/* Subtle Purple Glow Highlights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#7C3AED]/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D946EF]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Human-First & Engaging */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] mb-4 shadow-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-[#059669]" />
            <span>{entityBio.badge}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#0F0728] tracking-tight">
            {entityBio.title}
          </h2>
          <p className="text-[#3B2B5C] text-sm sm:text-base mt-3 font-medium">
            {entityBio.subheading}
          </p>
        </div>

        {/* Primary Bio Card */}
        <div className="bg-white border-2 border-[#E9D8FD] rounded-3xl p-6 sm:p-12 shadow-xl purple-glow mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E9D8FD] pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#D946EF] p-0.5 shadow-md">
                <img 
                  src={personalInfo.photos.headshot} 
                  alt="Talha Ahsan" 
                  className="w-full h-full object-cover object-top rounded-[14px]"
                />
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0F0728]">
                  Talha Ahsan
                </h3>
                <p className="font-mono text-xs text-[#7C3AED] font-bold">
                  SEO Expert (Priority #1) &bull; 360° Digital Growth Strategist
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#059669] font-bold px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
                Verified Client Performance
              </span>
            </div>
          </div>

          {/* Biographical Prose in Engaging, Authoritative Voice */}
          <div className="space-y-4 text-[#3B2B5C] font-sans text-base sm:text-lg leading-relaxed font-medium">
            {entityBio.definitionalProse.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Fast Fact Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-8 border-t border-[#E9D8FD]">
            <div className="p-3.5 bg-[#F8F4FF] rounded-2xl border border-[#E9D8FD]">
              <span className="font-mono text-[11px] text-[#6B5B8D] block">Core Specialization</span>
              <strong className="font-heading text-sm text-[#0F0728] block mt-0.5">E-Com &amp; Technical SEO</strong>
            </div>
            <div className="p-3.5 bg-[#F8F4FF] rounded-2xl border border-[#E9D8FD]">
              <span className="font-mono text-[11px] text-[#6B5B8D] block">Modern Workflows</span>
              <strong className="font-heading text-sm text-[#0F0728] block mt-0.5">AI-Powered Pipelines</strong>
            </div>
            <div className="p-3.5 bg-[#F8F4FF] rounded-2xl border border-[#E9D8FD]">
              <span className="font-mono text-[11px] text-[#6B5B8D] block">Proven Footprint</span>
              <strong className="font-heading text-sm text-[#7C3AED] block mt-0.5">50+ Global Projects</strong>
            </div>
            <div className="p-3.5 bg-[#F8F4FF] rounded-2xl border border-[#E9D8FD]">
              <span className="font-mono text-[11px] text-[#6B5B8D] block">Availability</span>
              <strong className="font-heading text-sm text-[#059669] block mt-0.5">Worldwide &bull; Remote</strong>
            </div>
          </div>
        </div>

        {/* Core Offerings: Solving Real Client Needs */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-3 h-3 rounded-full bg-[#7C3AED]" />
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F0728]">
              Strategic Core Offerings &amp; Deliverables
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entityBio.coreOfferings.map((offering, idx) => {
              const Icon = iconMap[offering.icon] || Sparkles;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-[#E9D8FD] hover:border-[#7C3AED] rounded-3xl p-6 shadow-xs hover:shadow-xl hover:shadow-[#7C3AED]/10 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#F8F4FF] border border-[#E9D8FD] flex items-center justify-center text-[#7C3AED] mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-heading text-lg font-bold text-[#0F0728] mb-2.5">
                      {offering.title}
                    </h4>
                    <p className="font-sans text-sm text-[#3B2B5C] leading-relaxed font-medium">
                      {offering.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#E9D8FD] flex items-center gap-1.5 font-mono text-[11px] text-[#7C3AED] font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                    <span>Tied to Measurable Revenue</span>
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
