import React from 'react';
import { Building2, MapPin, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';
import { trustBrands } from '../data/portfolioData';

export default function Testimonials() {
  // Enhanced marquee cards combining brand trust & quantifiable achievements
  const marqueeItems = [
    {
      name: "Hope Enterprises",
      location: "Lahore, PK",
      focus: "E-Commerce & Retail",
      metric: "+280% Traffic Surge",
      detail: "10.7K Clicks • 447K Impressions",
      badge: "GSC Verified"
    },
    {
      name: "Carrot Sun Oil",
      location: "Dubai & Global",
      focus: "Skincare E-Commerce",
      metric: "0 to 60+ Clicks Daily",
      detail: "2.72K Clicks in 90 Days • Avg Pos 7.2",
      badge: "Topical Authority"
    },
    {
      name: "2S Lawyers",
      location: "Dubai & Abu Dhabi",
      focus: "UAE Legal Services",
      metric: "+300% Inbound Growth",
      detail: "297K Impressions • E-E-A-T Ranked",
      badge: "High-Intent Leads"
    },
    {
      name: "Delenzo Technologies",
      location: "Lahore, PK",
      focus: "Software & Digital Agency",
      metric: "Agency Growth Lead",
      detail: "Leading Search Systems & Client Accounts",
      badge: "In-House Lead"
    },
    {
      name: "Hope Enterprises (Local)",
      location: "Lahore, PK",
      focus: "Google Maps & GBP",
      metric: "Top 3 Local Map Pack",
      detail: "3,077 Profile Views • 619 Actions",
      badge: "GBP Dominance"
    },
    {
      name: "A List Security Group",
      location: "International",
      focus: "Security & Trucking Fleet",
      metric: "Multi-Project SEO",
      detail: "Local Maps & Dual Brand Authority",
      badge: "Enterprise"
    }
  ];

  // Duplicate for seamless 100% infinite CSS marquee
  const infiniteList = [...marqueeItems, ...marqueeItems];

  return (
    <section className="py-20 bg-[#F8F4FF] border-t border-b border-[#E9D8FD] overflow-hidden relative">
      
      {/* Edge gradient masks for smooth fade in and out */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F8F4FF] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F8F4FF] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] mb-3 shadow-xs font-bold">
          <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
          <span>PROVEN CLIENT FOOTPRINT &amp; REPUTATION</span>
        </div>
        <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#0F0728] tracking-tight">
          Trusted Across Diverse Commercial Industries
        </h2>
        <p className="text-[#3B2B5C] text-sm mt-2 font-medium">
          Delivering defensible search performance, revenue expansion, and market dominance. Hover to pause.
        </p>
      </div>

      {/* Infinite Horizontal Marquee Track */}
      <div className="flex overflow-hidden select-none">
        <div className="animate-infinite-marquee flex items-center gap-5 pl-5">
          {infiniteList.map((item, idx) => (
            <div
              key={idx}
              className="w-72 sm:w-80 shrink-0 bg-white border border-[#E9D8FD] hover:border-[#7C3AED] rounded-2xl p-5 shadow-xs hover:shadow-xl hover:shadow-[#7C3AED]/12 transition-all duration-300 group cursor-default"
            >
              {/* Header row with badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-md bg-[#F8F4FF] border border-[#E9D8FD] text-[#7C3AED]">
                  {item.badge}
                </span>
                <span className="font-mono text-[10px] text-[#059669] font-bold flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {item.location}
                </span>
              </div>

              {/* Brand Name & Focus */}
              <h3 className="font-heading text-base font-bold text-[#0F0728] group-hover:text-[#7C3AED] transition-colors mb-0.5">
                {item.name}
              </h3>
              <p className="font-sans text-xs text-[#6B5B8D] mb-3 font-medium">
                {item.focus}
              </p>

              {/* Metric Callout Highlight */}
              <div className="bg-[#F8F4FF] border border-[#E9D8FD] rounded-xl p-3">
                <span className="font-heading text-sm font-extrabold text-[#7C3AED] block">
                  {item.metric}
                </span>
                <span className="font-mono text-[11px] text-[#3B2B5C] font-semibold block mt-0.5">
                  {item.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
