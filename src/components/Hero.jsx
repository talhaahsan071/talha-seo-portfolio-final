import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lock, 
  Search, 
  MapPin, 
  TrendingUp, 
  Building2, 
  Award, 
  Globe, 
  Download, 
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Mail,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { heroSnippet, personalInfo } from '../data/portfolioData';

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

export default function Hero({ onOpenCv }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  const socialPills = [
    { label: "LinkedIn", href: personalInfo.linkedin, icon: LinkedinIcon, show: !!personalInfo.linkedin },
    { label: "WhatsApp", href: personalInfo.whatsapp, icon: MessageSquare, show: !!personalInfo.whatsapp },
    { label: "Email", href: `mailto:${personalInfo.email}`, icon: Mail, show: !!personalInfo.email },
    { label: "Google Business (GMB)", href: personalInfo.gmbUrl, icon: MapPin, show: !!personalInfo.gmbUrl }
  ].filter(item => item.show);

  return (
    <section className="relative min-h-[95vh] pt-28 pb-20 overflow-hidden flex items-center justify-center bg-white">
      
      {/* Soft Purple Background Glow Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#F3E8FF] via-[#F8F4FF] to-[#E9D8FD] blur-[100px] rounded-full opacity-70" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#E0E7FF]/50 blur-[90px] rounded-full" />
      </div>

      {/* Upward Line Trace SVG */}
      <div className="absolute inset-0 pointer-events-none opacity-30 flex items-center justify-center overflow-hidden">
        <svg 
          className="w-full h-full max-w-7xl" 
          viewBox="0 0 1200 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="150" x2="1200" y2="150" stroke="#E9D8FD" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="0" y1="300" x2="1200" y2="300" stroke="#E9D8FD" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="0" y1="450" x2="1200" y2="450" stroke="#E9D8FD" strokeWidth="1.5" strokeDasharray="4 4" />

          <path
            d="M 50 520 C 200 510, 350 480, 500 380 C 650 280, 800 240, 950 140 C 1050 70, 1120 50, 1180 30"
            stroke="url(#purpleTraceGradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="animate-line-trace"
          />

          <circle cx="500" cy="380" r="5" fill="#7C3AED" className="animate-pulse" />
          <circle cx="950" cy="140" r="6" fill="#D946EF" className="animate-pulse" />
          <circle cx="1180" cy="30" r="8" fill="#059669" />

          <defs>
            <linearGradient id="purpleTraceGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#D946EF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Top Credibility Pill */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8F4FF] border border-[#E9D8FD] text-xs font-mono text-[#0F0728] shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#059669] animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#059669]" />
            <span className="font-bold text-[#0F0728]">{heroSnippet.credibility}</span>
          </div>
        </motion.div>

        {/* Dual Layout: SERP Card Left & Headshot Photo Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (7 cols): THE GOOGLE SERP CARD */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 relative bg-white border border-[#E9D8FD] rounded-3xl p-6 sm:p-9 shadow-xl purple-glow"
          >
            {/* SERP Browser Header */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E9D8FD] pb-4 mb-6">
              
              {/* Breadcrumb line */}
              <div className="flex items-center gap-2 font-mono text-xs text-[#6B5B8D] overflow-x-auto py-1">
                <Lock className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                <span className="text-[#0F0728] font-bold">{personalInfo.domain}</span>
                <span className="text-[#6B5B8D]">›</span>
                <span className="text-[#3B2B5C] shrink-0 font-semibold">proven-search-growth</span>
                <span className="text-[#6B5B8D]">›</span>
                <span className="text-[#059669] shrink-0 font-bold">+280%-revenue-surge</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D8FD] font-mono text-[11px] text-[#7C3AED]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
                <span className="font-bold">Verified Google Search Result</span>
              </div>
            </motion.div>

            {/* Main Headline (Recommended by ChatGPT) */}
            <motion.div variants={itemVariants} className="mb-4">
              <a href="#about" className="group inline-block focus:outline-none">
                <h1 className="font-heading text-[clamp(1.65rem,3.2vw,2.4rem)] font-extrabold leading-[1.22] text-[#7C3AED] group-hover:text-[#D946EF] transition-colors duration-200">
                  {heroSnippet.title}
                </h1>
              </a>
            </motion.div>

            {/* Subhead Description */}
            <motion.div variants={itemVariants} className="mb-6">
              <p className="font-sans text-base sm:text-lg text-[#3B2B5C] leading-relaxed font-medium">
                {heroSnippet.snippet}
              </p>
            </motion.div>

            {/* Rich Snippet Chips */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 sm:gap-3 border-t border-[#E9D8FD] pt-5 mb-7">
              
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8F4FF] border border-[#E9D8FD] font-mono text-xs text-[#0F0728] shadow-xs">
                <Search className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span className="font-bold">Technical &amp; E-Com SEO</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8F4FF] border border-[#E9D8FD] font-mono text-xs text-[#0F0728] shadow-xs">
                <Building2 className="w-3.5 h-3.5 text-[#D946EF]" />
                <span className="font-bold">50+ Projects</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8F4FF] border border-[#E9D8FD] font-mono text-xs text-[#0F0728] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#6366F1]" />
                <span className="font-bold">AI Search Pipelines</span>
              </div>

              <a 
                href="#case-studies"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#F3E8FF] hover:bg-[#E9D8FD] border border-[#7C3AED]/40 font-mono text-xs text-[#7C3AED] transition-all hover:scale-105"
              >
                <MapPin className="w-3.5 h-3.5 text-[#059669]" />
                <span className="underline underline-offset-2 font-bold">Top Maps &amp; GSC Wins</span>
                <ArrowRight className="w-3 h-3 text-[#059669]" />
              </a>
            </motion.div>

            {/* Action CTAs: Direct & Compelling */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 mb-6">
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#D946EF] text-white font-mono text-sm font-bold shadow-lg shadow-[#7C3AED]/25 hover:shadow-[#7C3AED]/40 hover:scale-[1.02] transition-all duration-200"
              >
                <span>View Case Studies &amp; Evidence</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-mono text-sm font-bold transition-all duration-200 hover:scale-[1.02] shadow-md shadow-[#059669]/20"
              >
                <span>Let's Grow Your Organic Traffic</span>
              </a>

              <button
                onClick={onOpenCv}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white hover:bg-[#F8F4FF] border border-[#E9D8FD] text-[#3B2B5C] font-mono text-sm font-bold transition-all duration-200 hover:scale-[1.02]"
              >
                <Download className="w-4 h-4 text-[#7C3AED]" />
                <span>CV</span>
              </button>
            </motion.div>

            {/* Social Pill Row */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#E9D8FD]/70">
              <span className="font-mono text-[11px] text-[#6B5B8D] font-semibold mr-1">Direct Channels:</span>
              {socialPills.map((pill, i) => {
                const Icon = pill.icon;
                return (
                  <a
                    key={i}
                    href={pill.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F4FF] hover:bg-[#F3E8FF] border border-[#E9D8FD] text-[11px] font-mono font-bold text-[#3B2B5C] hover:text-[#7C3AED] transition-colors shadow-2xs"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#7C3AED]" />
                    <span>{pill.label}</span>
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column (5 cols): TALHA'S FEATURED PORTRAIT PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#E9D8FD] bg-white shadow-xl purple-glow">
              <img
                src={personalInfo.photos.headshot}
                alt="Talha Ahsan — SEO Expert"
                className="w-full h-[470px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#E9D8FD] text-[#0F0728] shadow-xl flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#0F0728]">Talha Ahsan</h3>
                  <p className="font-mono text-xs text-[#7C3AED] font-bold">SEO Expert &bull; Technical Growth</p>
                </div>
                <div className="text-right font-mono text-xs">
                  <span className="inline-flex items-center gap-1 text-[#059669] font-bold">
                    <TrendingUp className="w-3.5 h-3.5" /> +180% Avg Growth
                  </span>
                  <p className="text-[#6B5B8D] text-[10px]">Delenzo Technologies</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
