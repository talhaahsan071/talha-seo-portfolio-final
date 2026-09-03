import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  Lock, 
  ChevronRight, 
  X, 
  ZoomIn, 
  Sparkles, 
  FileText,
  BarChart2
} from 'lucide-react';
import { caseStudies } from '../data/portfolioData';

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isZoomedImage, setIsZoomedImage] = useState(false);

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
    <section id="case-studies" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F8F4FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
            <span className="font-bold">04 // Verified Case Studies &amp; Proven ROI</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F0728] leading-tight">
            Data-Backed Search Victories
          </h2>
          <p className="text-[#3B2B5C] text-base mt-3 font-medium">
            No vanity metrics. Every study below reflects defensible Google Search Console and Google Business Profile exports from authenticated client properties across diverse commercial industries.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((cat) => {
            const label = cat === 'All' 
              ? 'All Case Studies (4)' 
              : cat.split('/')[0].trim();
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

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              onClick={() => {
                setSelectedStudy(study);
                setIsZoomedImage(false);
              }}
              className="group relative bg-[#F8F4FF] hover:bg-white border border-[#E9D8FD] hover:border-[#7C3AED] rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-[#7C3AED]/15 hover:-translate-y-1.5"
            >
              <div>
                {/* GSC / Screenshot Header Preview */}
                {study.image && (
                  <div className="relative h-56 sm:h-64 overflow-hidden border-b border-[#E9D8FD] bg-[#0F0728]/5">
                    <img 
                      src={study.image} 
                      alt={study.client}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0728]/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E9D8FD] font-mono text-[11px] text-[#7C3AED] font-bold shadow-sm flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" /> Verified Report
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E9D8FD] font-mono text-[10px] text-[#0F0728] font-bold shadow-sm">
                      {study.category.split('/')[0]}
                    </div>

                    {/* Hover Click To Inspect Overlay */}
                    <div className="absolute inset-0 bg-[#0F0728]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                      <div className="px-4 py-2 rounded-xl bg-white text-[#7C3AED] font-mono text-xs font-bold shadow-xl flex items-center gap-2">
                        <ZoomIn className="w-4 h-4" />
                        <span>Inspect Full Strategy &amp; GSC Data</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  {/* SERP Breadcrumb URL Line */}
                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#6B5B8D] mb-3 truncate">
                    <Lock className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                    <span className="text-[#0F0728] font-bold">{study.url}</span>
                  </div>

                  {/* Metric Headline Row with Sparkline SVG */}
                  <div className="flex items-center justify-between border-b border-[#E9D8FD] pb-5 mb-5">
                    <div>
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-[#7C3AED] group-hover:text-[#D946EF] transition-colors">
                        {study.metric}
                      </span>
                      <p className="font-mono text-xs text-[#0F0728] font-bold mt-1">
                        {study.metricLabel}
                      </p>
                    </div>

                    {/* Sparkline Trend SVG */}
                    <div className="w-24 h-12 flex items-center justify-center p-1.5 bg-white border border-[#E9D8FD] rounded-xl shadow-xs">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                        <path
                          d={`M 0 ${40 - (study.sparkline[0] * 0.22)} L ${study.sparkline.map((val, idx) => `${(idx / (study.sparkline.length - 1)) * 100} ${40 - (val * 0.22)}`).join(' L ')}`}
                          fill="none"
                          stroke="#059669"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Client Name & Location */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F0728] mb-1">
                    {study.client}
                  </h3>
                  <p className="font-mono text-xs text-[#7C3AED] mb-3 flex items-center gap-1 font-bold">
                    <MapPin className="w-3.5 h-3.5 text-[#059669]" /> {study.location}
                  </p>

                  {/* Summary */}
                  <p className="font-sans text-sm text-[#3B2B5C] line-clamp-3 leading-relaxed mb-6 font-medium">
                    {study.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer tags & action */}
              <div className="p-6 sm:p-8 pt-0 border-t border-[#E9D8FD] space-y-3">
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px] pt-4">
                  {study.tags.map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-white text-[#3B2B5C] border border-[#E9D8FD] font-bold shadow-2xs">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between font-mono text-xs text-[#7C3AED] group-hover:text-[#0F0728] font-bold pt-2">
                  <span>Deep Dive Case Study &amp; Proof</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#7C3AED]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Case Study Modal Popup */}
        <AnimatePresence>
          {selectedStudy && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto">
              
              {/* Backdrop Click */}
              <div className="fixed inset-0" onClick={() => setSelectedStudy(null)} />

              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white border border-[#E9D8FD] rounded-3xl p-6 sm:p-10 shadow-2xl text-[#0F0728] purple-glow z-10 my-auto"
              >
                {/* Header */}
                <div className="flex items-start justify-between border-b border-[#E9D8FD] pb-6 mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] font-bold mb-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
                      <span>{selectedStudy.category}</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#0F0728] mt-1">{selectedStudy.client}</h3>
                    <p className="font-mono text-xs text-[#6B5B8D] mt-1 flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-[#059669]" />
                      <span className="font-bold text-[#0F0728]">{selectedStudy.url}</span>
                      <span>• {selectedStudy.location}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedStudy(null)}
                    className="p-2.5 text-[#6B5B8D] hover:text-[#0F0728] bg-[#F8F4FF] hover:bg-[#F3E8FF] border border-[#E9D8FD] rounded-2xl transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Highlight Metric Bar */}
                <div className="bg-gradient-to-r from-[#F8F4FF] via-white to-[#F8F4FF] border border-[#E9D8FD] rounded-2xl p-6 mb-8 flex flex-wrap items-center justify-between gap-4 shadow-sm">
                  <div>
                    <span className="font-mono text-xs text-[#6B5B8D] font-bold uppercase tracking-wider">Headline Outcome:</span>
                    <p className="font-serif text-3xl sm:text-4xl font-bold text-[#7C3AED] mt-0.5">{selectedStudy.metric}</p>
                    <p className="font-mono text-xs text-[#0F0728] font-bold mt-1">{selectedStudy.metricLabel}</p>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] font-mono text-xs font-bold shadow-xs">
                    {selectedStudy.growth}
                  </div>
                </div>

                {/* Search Console / GMB Screenshot Section */}
                <div className="mb-8 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-mono text-xs text-[#0F0728] font-bold uppercase tracking-wider flex items-center gap-2">
                      <BarChart2 className="w-4 h-4 text-[#7C3AED]" />
                      Authenticated Search Console / Profile Proof
                    </h4>
                    <span className="text-[11px] font-mono text-[#6B5B8D]">Click image to expand</span>
                  </div>

                  <div 
                    onClick={() => setIsZoomedImage(!isZoomedImage)}
                    className="relative rounded-2xl overflow-hidden border-2 border-[#E9D8FD] bg-[#0F0728] cursor-pointer group shadow-md"
                  >
                    <img
                      src={selectedStudy.image}
                      alt={selectedStudy.client}
                      className={`w-full transition-all duration-300 object-contain ${
                        isZoomedImage ? 'max-h-[600px]' : 'max-h-[340px]'
                      }`}
                    />
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-xl text-white font-mono text-xs font-bold flex items-center gap-1.5">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>{isZoomedImage ? "Click to Reduce" : "Click to Enlarge"}</span>
                    </div>
                  </div>
                </div>

                {/* Challenge & Solution Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  
                  {/* The Problem / Challenge */}
                  <div className="bg-[#F8F4FF] border border-[#E9D8FD] rounded-2xl p-6 space-y-2.5">
                    <h4 className="font-mono text-xs text-[#D946EF] font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#D946EF]" />
                      The Search Bottleneck / Challenge
                    </h4>
                    <p className="font-sans text-sm text-[#3B2B5C] leading-relaxed font-medium">
                      {selectedStudy.challenge}
                    </p>
                  </div>

                  {/* The Strategy & Execution */}
                  <div className="bg-[#F8F4FF] border border-[#E9D8FD] rounded-2xl p-6 space-y-2.5">
                    <h4 className="font-mono text-xs text-[#7C3AED] font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                      Strategic Solution &amp; Execution
                    </h4>
                    <div className="space-y-2 text-xs text-[#3B2B5C] font-medium leading-relaxed">
                      {Array.isArray(selectedStudy.strategy) ? (
                        selectedStudy.strategy.map((strat, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] shrink-0 mt-1.5" />
                            <span>{strat}</span>
                          </div>
                        ))
                      ) : (
                        <p>{selectedStudy.strategy}</p>
                      )}
                    </div>
                  </div>

                </div>

                {/* Measured Results Checklist */}
                <div className="bg-[#F8F4FF] border border-[#A7F3D0] rounded-2xl p-6 sm:p-8 mb-8 space-y-4 shadow-sm">
                  <h4 className="font-mono text-xs text-[#059669] font-bold uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                    Verified Outcomes &amp; Growth Deliverables
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#0F0728] font-medium">
                    {selectedStudy.results.map((res, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E9D8FD] shadow-2xs">
                        <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E9D8FD] pt-6">
                  <span className="font-mono text-xs text-[#6B5B8D] font-semibold">
                    100% Authenticated Google Search Console &amp; GBP Data
                  </span>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setSelectedStudy(null)}
                      className="w-full sm:w-auto px-5 py-2.5 bg-[#F8F4FF] hover:bg-[#F3E8FF] border border-[#E9D8FD] text-[#3B2B5C] font-mono text-xs font-bold rounded-xl transition-colors"
                    >
                      Close Inspection
                    </button>
                    <a
                      href="#contact"
                      onClick={() => setSelectedStudy(null)}
                      className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-white font-mono text-xs font-bold rounded-xl shadow-md hover:opacity-90 transition-opacity text-center"
                    >
                      Request Similar Audit
                    </a>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
