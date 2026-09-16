import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  BarChart2, 
  Zap, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Calendar,
  PhoneCall
} from 'lucide-react';
import { whyChooseMeData, personalInfo } from '../data/portfolioData';

const reasonIcons = [
  Users,
  ShieldCheck,
  TrendingUp,
  BarChart2,
  Zap,
  MessageSquare
];

export default function WhyChooseMe() {
  return (
    <section id="why-choose-me" className="py-20 sm:py-24 bg-gradient-to-b from-[#FAF8FF] via-white to-[#FAF8FF] border-b border-[#E9D8FD]/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F3E8FF] border border-[#E9D8FD] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
            <span className="font-mono text-xs font-bold text-[#7C3AED] uppercase tracking-wider">
              {whyChooseMeData.badge}
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F0728] tracking-tight mb-3">
            {whyChooseMeData.title}
          </h2>
          <p className="text-[#3B2B5C] text-sm sm:text-base leading-relaxed font-medium">
            {whyChooseMeData.subtitle}
          </p>
        </div>

        {/* 6 Reasons Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {whyChooseMeData.reasons.map((reason, idx) => {
            const IconComponent = reasonIcons[idx] || CheckCircle2;

            return (
              <div
                key={reason.number}
                className="bg-white border border-[#E9D8FD] hover:border-[#7C3AED] rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl hover:shadow-[#7C3AED]/10 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#F8F4FF] group-hover:bg-[#7C3AED] text-[#7C3AED] group-hover:text-white border border-[#E9D8FD] flex items-center justify-center transition-colors shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#7C3AED] bg-[#F8F4FF] px-2.5 py-1 rounded-full border border-[#E9D8FD]">
                      {reason.badge}
                    </span>
                  </div>

                  <span className="font-mono text-xs font-extrabold text-[#7C3AED] block mb-1">
                    REASON {reason.number}
                  </span>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0F0728] mb-3 group-hover:text-[#7C3AED] transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#3B2B5C] leading-relaxed font-medium">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#E9D8FD]/80 font-mono text-[11px] text-[#059669] font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>100% Guaranteed Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Step Simple Ranking Framework */}
        <div className="bg-white border border-[#E9D8FD] rounded-3xl p-6 sm:p-10 shadow-xs mb-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-mono text-xs font-bold text-[#7C3AED] uppercase tracking-wider block mb-1">
              THE PROVEN FORMULA
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F0728]">
              How We Take Your Website to Page 1 of Google
            </h3>
            <p className="text-xs sm:text-sm text-[#3B2B5C] font-medium mt-2">
              A simple, transparent 4-step roadmap to start getting real traffic and customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whyChooseMeData.steps.map((s, sIdx) => (
              <div 
                key={s.step} 
                className="bg-[#FAF8FF] border border-[#E9D8FD] rounded-2xl p-5 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#7C3AED] text-white font-mono text-xs font-bold flex items-center justify-center mb-4 shadow-sm shadow-[#7C3AED]/20">
                    {s.step}
                  </div>
                  <h4 className="font-heading text-base font-bold text-[#0F0728] mb-2">
                    {s.title}
                  </h4>
                  <p className="text-xs text-[#3B2B5C] leading-relaxed font-medium">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Banner */}
        <div className="rounded-3xl bg-[#0B0614] border border-[#2D1B4E] p-6 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#A78BFA] font-bold mb-2">
              <PhoneCall className="w-3.5 h-3.5 text-[#059669]" /> Free 15-Minute Consultation
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
              Want to Know What Is Stopping Your Website from Ranking?
            </h3>
            <p className="text-xs sm:text-sm text-[#C8B8E8] max-w-xl font-medium">
              Send me your website link on WhatsApp. I will personally review it and tell you the top 3 things you need to fix to reach Page 1.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/923204966959?text=Hi%20Talha,%20can%20you%20review%20my%20website%20and%20tell%20me%20how%20to%20rank%20on%20Google?"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-mono text-xs font-bold transition-all shadow-md shadow-[#7C3AED]/25 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Website on WhatsApp</span>
            </a>
            <a
              href="https://calendly.com/talhaahsanofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-mono text-xs font-bold transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#A78BFA]" />
              <span>Book Strategy Call</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
