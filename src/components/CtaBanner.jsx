import React from 'react';
import { ArrowRight, Sparkles, MessageSquare, Phone, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function CtaBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#D946EF] p-8 sm:p-14 text-white shadow-2xl purple-glow-lg">
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 font-mono text-xs text-white mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Scale Your Search Traffic &amp; Revenue</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              Ready to Turn Organic Search Into Your Primary Revenue Driver?
            </h2>

            <p className="font-sans text-white/90 text-base sm:text-lg mb-8 leading-relaxed font-normal">
              Whether you need a full-funnel digital strategy, an in-depth technical crawl audit, or top Google Maps rankings across your target markets.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#7C3AED] font-mono text-xs sm:text-sm font-bold shadow-xl hover:bg-[#F8F4FF] hover:scale-[1.02] transition-all"
              >
                <span>Book a Strategy Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-black/20 hover:bg-black/30 border border-white/30 text-white font-mono text-xs sm:text-sm font-bold backdrop-blur-md transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#34D399]" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
