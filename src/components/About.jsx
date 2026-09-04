import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#F3E8FF] blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill Badge & Heading */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F8F4FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] mb-3 shadow-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
            <span>ABOUT TALHA AHSAN</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F0728] tracking-tight">
            More Than Just An SEO.
          </h2>
        </div>

        {/* Two-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait Photo Card with Badge (5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden border-2 border-[#E9D8FD] bg-[#0F0728] shadow-2xl purple-glow group"
            >
              <img
                src={personalInfo.photos.headshot}
                alt="Talha Ahsan — SEO Expert & Growth Strategist"
                className="w-full h-[480px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Bottom Tag Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E9D8FD] text-[#0F0728] shadow-xl flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#0F0728]">TALHA AHSAN</h3>
                  <p className="font-mono text-xs text-[#7C3AED] font-bold">SEO Expert &amp; Technical Growth Lead</p>
                </div>
                <div className="px-3 py-1 rounded-xl bg-[#F3E8FF] border border-[#E9D8FD] font-mono text-[11px] text-[#7C3AED] font-bold">
                  Top 1% Execution
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Storytelling Content & Stats Bar (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Storytelling Intro in Simple, Engaging, Human Tone */}
            <div className="space-y-4 text-base sm:text-lg text-[#3B2B5C] leading-relaxed">
              <p className="font-heading text-xl sm:text-2xl font-bold text-[#0F0728] leading-snug">
                I'm <span className="text-[#7C3AED]">Talha Ahsan</span>, an SEO expert and technical growth consultant focused on helping businesses turn organic search into predictable, high-margin revenue.
              </p>
              
              <p className="text-base text-[#4A3B69] font-medium leading-relaxed">
                From solving complex technical site hurdles and e-commerce catalog structures to capturing high-intent commercial buyers, I combine data with practical execution to build digital search systems that deliver measurable revenue.
              </p>

              <p className="text-base text-[#4A3B69] font-medium leading-relaxed">
                I don't believe in vanity traffic, bloated checklists, or waiting months for basic progress. Every sprint, audit, and keyword target is designed with one clear outcome: accelerating your business growth and turning organic search visitors into loyal, paying clients.
              </p>
            </div>

            {/* Bottom 4-Metric Stats Bar */}
            <div className="p-6 rounded-2xl bg-[#0F0728] text-white border border-[#2D1B4E] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center shadow-lg">
              <div>
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#A78BFA] block">3+</span>
                <span className="font-mono text-[10px] sm:text-xs text-[#C8B8E8] uppercase tracking-wider font-semibold">YEARS EXP.</span>
              </div>
              <div>
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#A78BFA] block">50+</span>
                <span className="font-mono text-[10px] sm:text-xs text-[#C8B8E8] uppercase tracking-wider font-semibold">PROJECTS</span>
              </div>
              <div>
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#A78BFA] block">8+</span>
                <span className="font-mono text-[10px] sm:text-xs text-[#C8B8E8] uppercase tracking-wider font-semibold">INDUSTRIES</span>
              </div>
              <div>
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#A78BFA] block">Global</span>
                <span className="font-mono text-[10px] sm:text-xs text-[#C8B8E8] uppercase tracking-wider font-semibold">CLIENTS</span>
              </div>
            </div>

            {/* Link to Problem Solving Solutions */}
            <div className="pt-2">
              <a
                href="#skills"
                className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-[#7C3AED] hover:text-[#6D28D9] tracking-wider uppercase group"
              >
                <span>Explore Problem-Solving Search Solutions</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
