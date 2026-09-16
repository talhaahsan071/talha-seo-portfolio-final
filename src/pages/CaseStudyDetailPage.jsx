import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  Lock, 
  TrendingUp, 
  ArrowRight, 
  ArrowLeft,
  ChevronRight, 
  ZoomIn, 
  X,
  Calendar,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  ExternalLink,
  Target
} from 'lucide-react';
import { caseStudies, personalInfo } from '../data/portfolioData';

export default function CaseStudyDetailPage() {
  const { id } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Normalize id lookup to match 'carrot-sun' or 'carrot-sun-oil' or exact id
  const study = caseStudies.find(s => 
    s.id === id || 
    (id === 'carrot-sun-oil' && s.id === 'carrot-sun') ||
    (id === 'carrot-sun' && s.id === 'carrot-sun-oil')
  );

  useEffect(() => {
    if (study) {
      document.title = `${study.client} - SEO Case Study & GSC Proof | Talha Ahsan`;
    } else {
      document.title = 'Case Study Not Found - Talha Ahsan';
    }
    window.scrollTo(0, 0);
  }, [study, id]);

  if (!study) {
    return (
      <div className="min-h-screen bg-white text-[#0F0728] font-sans antialiased pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#F3E8FF] border border-[#E9D8FD] flex items-center justify-center mx-auto mb-4 text-[#7C3AED]">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h1 className="font-heading text-3xl font-extrabold text-[#0F0728] mb-3">Case Study Not Found</h1>
          <p className="text-[#3B2B5C] mb-6">The requested case study deep dive does not exist or has been moved.</p>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7C3AED] text-white font-mono text-xs font-bold hover:bg-[#6D28D9] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Case Studies Directory</span>
          </Link>
        </div>
      </div>
    );
  }

  // Other related studies to browse next
  const otherStudies = caseStudies.filter(s => s.id !== study.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-[#0F0728] font-sans antialiased selection:bg-[#7C3AED] selection:text-white pt-24 pb-20">
      
      {/* 01. Breadcrumb Bar */}
      <div className="bg-[#FAF8FF] border-b border-[#E9D8FD] py-3 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#6B5B8D] flex-wrap">
          <Link to="/" className="hover:text-[#7C3AED] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/case-studies" className="hover:text-[#7C3AED] transition-colors">Case Studies</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#0F0728] font-bold truncate">{study.client}</span>
        </div>
      </div>

      {/* 02. Header & Overview */}
      <div className="py-12 sm:py-16 bg-gradient-to-b from-[#FAF8FF] via-white to-white border-b border-[#E9D8FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] font-mono text-xs text-[#059669] font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> Defensible Proof
              </span>
              <span className="px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] font-bold">
                {study.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-[#E9D8FD] font-mono text-xs text-[#6B5B8D] font-bold flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#7C3AED]" /> {study.location}
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#0F0728] tracking-tight leading-tight mb-4">
              {study.client}
            </h1>

            <p className="text-[#3B2B5C] text-lg sm:text-xl font-medium leading-relaxed mb-6">
              {study.summary}
            </p>

            <div className="flex items-center gap-2 font-mono text-xs text-[#6B5B8D] bg-[#FAF8FF] border border-[#E9D8FD] px-3.5 py-2 rounded-xl inline-flex">
              <Lock className="w-3.5 h-3.5 text-[#059669]" />
              <span className="text-[#0F0728] font-bold">{study.url}</span>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-4">
            <div className="bg-[#FAF8FF] border border-[#E9D8FD] rounded-2xl p-5 shadow-xs">
              <span className="font-mono text-xs text-[#6B5B8D] uppercase tracking-wider block mb-1">Growth Surge</span>
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#7C3AED]">{study.metric}</div>
              <span className="font-mono text-[11px] text-[#059669] font-bold mt-1 inline-block">Page 1 Visibility</span>
            </div>

            <div className="bg-[#FAF8FF] border border-[#E9D8FD] rounded-2xl p-5 shadow-xs">
              <span className="font-mono text-xs text-[#6B5B8D] uppercase tracking-wider block mb-1">Search Volume</span>
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F0728]">{study.tags[0]}</div>
              <span className="font-mono text-[11px] text-[#6B5B8D] font-bold mt-1 inline-block">Targeted Organic Clicks</span>
            </div>

            <div className="bg-[#FAF8FF] border border-[#E9D8FD] rounded-2xl p-5 shadow-xs">
              <span className="font-mono text-xs text-[#6B5B8D] uppercase tracking-wider block mb-1">Impressions</span>
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F0728]">{study.tags[1]}</div>
              <span className="font-mono text-[11px] text-[#6B5B8D] font-bold mt-1 inline-block">Total Search Impressions</span>
            </div>

            <div className="bg-[#FAF8FF] border border-[#E9D8FD] rounded-2xl p-5 shadow-xs">
              <span className="font-mono text-xs text-[#6B5B8D] uppercase tracking-wider block mb-1">Status</span>
              <div className="font-heading text-xl sm:text-2xl font-extrabold text-[#059669] flex items-center gap-1.5">
                <CheckCircle2 className="w-5 h-5" /> Verified
              </div>
              <span className="font-mono text-[11px] text-[#6B5B8D] font-bold mt-1 inline-block">Google Search Console</span>
            </div>
          </div>
        </div>
      </div>

      {/* 03. Full GSC Screenshot Proof Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#FAF8FF] border border-[#E9D8FD] rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#7C3AED] font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4 text-[#7C3AED]" /> Authenticated Performance Dashboard
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0F0728]">
                Official Google Search Console / Business Profile Proof
              </h2>
            </div>
            <button
              onClick={() => setLightboxOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-[#F3E8FF] text-[#7C3AED] border border-[#E9D8FD] font-mono text-xs font-bold transition-all shadow-xs"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Click to Enlarge Proof</span>
            </button>
          </div>

          <div 
            onClick={() => setLightboxOpen(true)}
            className="relative rounded-2xl overflow-hidden border border-[#E9D8FD] bg-[#0F0728]/5 cursor-pointer group"
          >
            <img 
              src={study.image} 
              alt={`${study.client} Google Search Console performance graph`}
              className="w-full h-auto object-contain max-h-[550px] mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-[#0F0728]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-4 py-2 rounded-xl bg-[#0F0728]/80 text-white font-mono text-xs font-bold backdrop-blur-xs flex items-center gap-2">
                <ZoomIn className="w-4 h-4" /> Click to View High-Resolution
              </span>
            </div>
          </div>
          <p className="font-mono text-[11px] text-[#6B5B8D] text-center mt-3">
            Source: Live Google Search Console / Business Profile data export verified by Talha Ahsan.
          </p>
        </div>
      </div>

      {/* 04. Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden p-2 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 px-2 border-b border-gray-200">
              <div className="flex items-center gap-2 font-mono text-xs text-[#7C3AED] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#059669]" /> {study.client} — Verified Performance Record
              </div>
              <button 
                onClick={() => setLightboxOpen(false)}
                className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 overflow-auto max-h-[80vh]">
              <img 
                src={study.image} 
                alt={study.client}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}

      {/* 05. The Challenge & Strategic Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Story Column */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* The Challenge */}
            <div className="bg-white border border-[#E9D8FD] rounded-3xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#DC2626] mb-3">
                <AlertCircle className="w-4 h-4" /> THE INITIAL SEARCH PROBLEM
              </div>
              <h2 className="font-heading text-2xl font-bold text-[#0F0728] mb-4">
                What Was Holding {study.client.split('(')[0].trim()} Back?
              </h2>
              <p className="text-[#3B2B5C] text-base leading-relaxed font-medium">
                {study.challenge}
              </p>
            </div>

            {/* The 4-Stage Strategy */}
            <div className="bg-white border border-[#E9D8FD] rounded-3xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#7C3AED] mb-3">
                <Target className="w-4 h-4" /> THE EXECUTION BLUEPRINT
              </div>
              <h2 className="font-heading text-2xl font-bold text-[#0F0728] mb-6">
                Step-by-Step Strategic Framework Deployed
              </h2>
              <div className="space-y-4">
                {study.strategy.map((item, idx) => {
                  const parts = item.split(':');
                  const heading = parts.length > 1 ? parts[0] : `Phase 0${idx + 1}`;
                  const body = parts.length > 1 ? parts.slice(1).join(':') : item;

                  return (
                    <div 
                      key={idx}
                      className="p-5 rounded-2xl bg-[#FAF8FF] border border-[#E9D8FD] flex gap-4 items-start"
                    >
                      <span className="w-8 h-8 rounded-xl bg-[#7C3AED] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 shadow-xs">
                        0{idx + 1}
                      </span>
                      <div>
                        <h3 className="font-heading text-base font-bold text-[#0F0728] mb-1">
                          {heading}
                        </h3>
                        <p className="text-sm text-[#3B2B5C] leading-relaxed font-medium">
                          {body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Documented Results */}
            <div className="bg-gradient-to-br from-[#FAF8FF] to-white border border-[#A7F3D0] rounded-3xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#059669] mb-3">
                <CheckCircle2 className="w-4 h-4" /> QUANTIFIABLE BUSINESS OUTCOMES
              </div>
              <h2 className="font-heading text-2xl font-bold text-[#0F0728] mb-6">
                Key Performance Metrics &amp; Commercial Growth
              </h2>
              <div className="space-y-3.5">
                {study.results.map((res, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#E9D8FD]">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                    <p className="text-sm text-[#0F0728] font-medium leading-relaxed">
                      {res}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar: Client Fast Facts & Direct CTA */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Fast Facts Card */}
            <div className="bg-[#FAF8FF] border border-[#E9D8FD] rounded-3xl p-6 shadow-xs">
              <h3 className="font-heading text-base font-bold text-[#0F0728] mb-4 pb-3 border-b border-[#E9D8FD]">
                Project Snapshot
              </h3>
              <dl className="space-y-3 text-xs font-mono">
                <div>
                  <dt className="text-[#6B5B8D] uppercase">Client / Brand</dt>
                  <dd className="text-[#0F0728] font-bold text-sm mt-0.5">{study.client}</dd>
                </div>
                <div>
                  <dt className="text-[#6B5B8D] uppercase">Target Market</dt>
                  <dd className="text-[#0F0728] font-bold mt-0.5">{study.location}</dd>
                </div>
                <div>
                  <dt className="text-[#6B5B8D] uppercase">Industry Vertical</dt>
                  <dd className="text-[#0F0728] font-bold mt-0.5">{study.category}</dd>
                </div>
                <div>
                  <dt className="text-[#6B5B8D] uppercase">Core Achievement</dt>
                  <dd className="text-[#7C3AED] font-bold text-sm mt-0.5">{study.metricLabel}</dd>
                </div>
                <div>
                  <dt className="text-[#6B5B8D] uppercase">Verification Status</dt>
                  <dd className="text-[#059669] font-bold mt-0.5 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> 100% GSC Authenticated
                  </dd>
                </div>
              </dl>
            </div>

            {/* Direct Consultation Box */}
            <div className="bg-[#0B0614] border border-[#2D1B4E] rounded-3xl p-6 text-white text-center shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center mx-auto mb-3 text-[#A78BFA]">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-2">Need Similar Growth?</h3>
              <p className="text-xs text-[#C8B8E8] leading-relaxed mb-5">
                Whether you run an e-commerce shop, professional practice, or local retail store, I can deploy this exact search framework for your business.
              </p>
              <div className="space-y-2">
                <a
                  href={`https://wa.me/923204966959?text=Hi%20Talha,%20I%20reviewed%20the%20${encodeURIComponent(study.client)}%20case%20study%20and%20want%20to%20discuss%20my%20website.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="https://calendly.com/talhaahsanofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#1A0F33] hover:bg-[#251547] text-white border border-[#3E2468] font-mono text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#A78BFA]" />
                  <span>Book Strategy Call</span>
                </a>
              </div>
            </div>

            {/* Return to Archive */}
            <div className="text-center pt-2">
              <Link 
                to="/case-studies"
                className="font-mono text-xs font-bold text-[#7C3AED] hover:underline inline-flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>View All 4 Case Studies</span>
              </Link>
            </div>

          </div>

        </div>
      </div>

      {/* 06. Related Other Case Studies */}
      {otherStudies.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 border-t border-[#E9D8FD] mt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="font-mono text-xs font-bold text-[#7C3AED] uppercase tracking-wider block mb-1">More Results</span>
              <h2 className="font-heading text-2xl font-bold text-[#0F0728]">Explore Other Projects</h2>
            </div>
            <Link 
              to="/case-studies" 
              className="font-mono text-xs font-bold text-[#7C3AED] hover:underline flex items-center gap-1"
            >
              <span>View Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherStudies.map((other) => (
              <Link
                key={other.id}
                to={`/case-studies/${other.id}`}
                className="group bg-[#FAF8FF] hover:bg-white border border-[#E9D8FD] hover:border-[#7C3AED] rounded-2xl p-5 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-heading text-xl font-extrabold text-[#7C3AED]">{other.metric}</span>
                    <span className="px-2 py-0.5 rounded bg-[#ECFDF5] text-[#059669] font-mono text-[10px] font-bold">{other.growth}</span>
                  </div>
                  <h3 className="font-heading text-base font-bold text-[#0F0728] mb-1 group-hover:text-[#7C3AED] transition-colors">
                    {other.client}
                  </h3>
                  <p className="font-mono text-[11px] text-[#6B5B8D] mb-2">{other.location}</p>
                  <p className="text-xs text-[#3B2B5C] line-clamp-2 leading-relaxed font-medium mb-4">
                    {other.summary}
                  </p>
                </div>
                <div className="font-mono text-xs font-bold text-[#7C3AED] flex items-center gap-1 group-hover:translate-x-1 transition-transform pt-2 border-t border-[#E9D8FD]">
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
