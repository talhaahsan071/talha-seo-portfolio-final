import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  Lock, 
  TrendingUp, 
  ArrowRight, 
  ChevronRight, 
  ZoomIn, 
  Filter, 
  Calendar,
  MessageSquare
} from 'lucide-react';
import { caseStudies } from '../data/portfolioData';

export default function CaseStudiesArchivePage() {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = 'SEO Case Studies & Real Google Search Console Proof - Talha Ahsan';
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    'All',
    'E-Commerce & Retail / Pakistan',
    'E-Commerce / Skincare & Beauty',
    'Legal Consultancy / UAE Legal Services',
    'Local SEO & Google Business Profile'
  ];

  const filteredStudies = activeCategory === 'All'
    ? caseStudies
    : caseStudies.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-[#0F0728] font-sans antialiased selection:bg-[#7C3AED] selection:text-white pt-24 pb-20">
      
      {/* 01. Breadcrumb Bar */}
      <div className="bg-[#FAF8FF] border-b border-[#E9D8FD] py-3 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#6B5B8D]">
          <Link to="/" className="hover:text-[#7C3AED] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#0F0728] font-bold">Case Studies</span>
        </div>
      </div>

      {/* 02. Header */}
      <div className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF8FF] via-white to-white border-b border-[#E9D8FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] font-bold mb-4 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
              <span>DEFENSIBLE GOOGLE SEARCH CONSOLE ARCHIVE</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#0F0728] tracking-tight leading-tight mb-4">
              Proven Case Studies &amp; Verified Search Results
            </h1>
            <p className="text-[#3B2B5C] text-base sm:text-lg leading-relaxed font-medium">
              Zero invented statistics or vanity screenshots. Every project below reflects real, authenticated Google Search Console and Google Business Profile exports across e-commerce, local businesses, and international enterprises.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-8 pt-4">
            {categories.map((cat) => {
              const label = cat === 'All' ? 'All Case Studies (4)' : cat.split('/')[0].trim();
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#7C3AED] text-white shadow-md shadow-[#7C3AED]/25 scale-[1.02]'
                      : 'bg-[#F8F4FF] hover:bg-[#F3E8FF] text-[#3B2B5C] border border-[#E9D8FD]'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 03. Grid of Case Studies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study, idx) => (
            <div
              key={study.id}
              className="group bg-[#FAF8FF] hover:bg-white border border-[#E9D8FD] hover:border-[#7C3AED] rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl hover:shadow-[#7C3AED]/12"
            >
              <div>
                {study.image && (
                  <div className="relative h-48 overflow-hidden border-b border-[#E9D8FD] bg-[#0F0728]/5">
                    <img 
                      src={study.image} 
                      alt={study.client} 
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-full bg-white/95 border border-[#E9D8FD] font-mono text-[10px] text-[#7C3AED] font-bold shadow-xs flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-[#059669]" /> Verified
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-1 font-mono text-[11px] text-[#6B5B8D] mb-2 truncate">
                    <Lock className="w-3 h-3 text-[#059669] shrink-0" />
                    <span className="text-[#0F0728] font-bold truncate">{study.url}</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-[#E9D8FD] pb-3 mb-3">
                    <div>
                      <span className="font-heading text-2xl font-extrabold text-[#7C3AED]">
                        {study.metric}
                      </span>
                      <p className="font-mono text-[11px] text-[#0F0728] font-bold mt-0.5">
                        {study.metricLabel}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] font-mono text-xs font-bold">
                      {study.growth}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#0F0728] mb-1">
                    {study.client}
                  </h3>
                  <p className="font-mono text-xs text-[#7C3AED] mb-2 flex items-center gap-1 font-bold">
                    <MapPin className="w-3 h-3 text-[#059669]" /> {study.location}
                  </p>
                  <p className="text-xs sm:text-sm text-[#3B2B5C] line-clamp-3 leading-relaxed font-medium mb-4">
                    {study.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0 border-t border-[#E9D8FD]">
                <div className="flex flex-wrap gap-1 font-mono text-[10px] pt-3 mb-4">
                  {study.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded-md bg-white text-[#3B2B5C] border border-[#E9D8FD] font-bold">
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/case-studies/${study.id}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#F3E8FF] hover:bg-[#7C3AED] text-[#7C3AED] hover:text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Read Full Case Study Deep Dive</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 04. Bottom Conversion Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-[#0B0614] border border-[#2D1B4E] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Want Similar Organic Search Results for Your Business?
          </h2>
          <p className="text-sm sm:text-base text-[#C8B8E8] max-w-xl mx-auto mb-6">
            Book a complimentary 15-minute search audit. We will review your search bottlenecks, examine competitor ranking gaps, and build a tailored growth roadmap.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/923204966959?text=Hi%20Talha,%20I%20saw%20your%20case%20studies%20and%20want%20to%20discuss%20my%20website%20SEO."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-mono text-xs font-bold shadow-lg transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Project on WhatsApp</span>
            </a>
            <a
              href="https://calendly.com/talhaahsanofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#1A0F33] hover:bg-[#251547] text-white border border-[#3E2468] font-mono text-xs font-bold transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#A78BFA]" />
              <span>Book Strategy Call</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
