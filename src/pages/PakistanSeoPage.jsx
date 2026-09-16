import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  CheckCircle2, 
  TrendingUp, 
  Phone, 
  MessageSquare, 
  Calendar, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Lock, 
  Sparkles, 
  Cpu, 
  ShoppingCart, 
  ExternalLink,
  ChevronRight,
  HelpCircle,
  BarChart2,
  Award,
  Zap,
  Clock,
  X,
  MapPin,
  FileCheck
} from 'lucide-react';
import { personalInfo, caseStudies, educationList } from '../data/portfolioData';

export default function PakistanSeoPage() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.title = 'Best SEO Expert in Pakistan | Top SEO Consultant & Strategist - Talha Ahsan';
    window.scrollTo(0, 0);
  }, []);

  const nationalCaseStudies = caseStudies.slice(0, 3);

  const pakistanFaqs = [
    {
      q: 'Who is the best SEO expert in Pakistan?',
      a: 'The best SEO expert is one who delivers verified, defensible organic revenue growth rather than vanity keyword rankings. Talha Ahsan is a certified SEO specialist (PBTE & NAVTTC certified) and SEO Lead at Delenzo Technologies, with a documented track record of delivering 10,700+ organic clicks for Pakistani e-commerce brands, #1 Google Maps rankings, and international scaling for UAE & US businesses.'
    },
    {
      q: 'How much do SEO services cost in Pakistan?',
      a: 'Professional SEO services in Pakistan generally range between PKR 40,000 to PKR 150,000+ per month depending on the domain authority, catalog size, and industry competitiveness. Unlike agencies that lock clients into rigid annual retainers, I offer milestone-driven monthly growth sprints with complete deliverable transparency.'
    },
    {
      q: 'How can SEO help Pakistani e-commerce stores scale without high ad costs?',
      a: 'Meta and TikTok ad costs in Pakistan have skyrocketed, cutting into profit margins. SEO builds an owned organic traffic engine. By restructuring your store collections, indexing all product variations, and ranking for high-intent commercial terms, ready-to-buy customers find your products on Google every day with zero cost-per-click.'
    },
    {
      q: 'Do you provide SEO services for businesses outside Lahore across Pakistan?',
      a: 'Yes. I serve clients across all major Pakistani business hubs, including Karachi, Islamabad, Rawalpindi, Faisalabad, Sialkot, and Multan, as well as overseas Pakistani entrepreneurs and international brands in Dubai (UAE), Saudi Arabia, the UK, and the USA.'
    },
    {
      q: 'What is the difference between white-hat SEO and cheap agency shortcuts?',
      a: 'Cheap agencies often buy spammy PBN backlinks that cause Google algorithmic penalties and temporary spikes that crash. I exclusively practice sustainable white-hat search architecture: clean Core Web Vitals, Google Knowledge Graph entity mapping, structured JSON-LD schema, and authoritative contextual backlinks.'
    }
  ];

  const nationalPackages = [
    {
      name: 'National E-Commerce Growth Sprint',
      target: 'D2C brands, Shopify & WooCommerce stores across Pakistan',
      tag: 'E-Commerce Focus',
      popular: true,
      deliverables: [
        'Complete Store Architecture & Collection Restructure',
        'Commercial Buyer Intent Keyword Targeting across Pakistan',
        'Faceted Navigation, Canonical & Indexing Leak Fixes',
        'Core Web Vitals & Mobile Speed Optimization (<2.2s LCP)',
        'Product & Collection JSON-LD Schema Markup',
        'Topical Search Hubs for High-Volume Buyer Categories',
        'Bi-Weekly Google Search Console Revenue Tracking'
      ],
      cta: 'Scale Your E-Commerce Store'
    },
    {
      name: 'National Brand & Multi-City Expansion',
      target: 'Service businesses, B2B companies & multi-branch firms',
      tag: 'Multi-City Reach',
      popular: false,
      deliverables: [
        'Multi-City Landing Page & Location Silo Architecture',
        'Google Business Profile Multi-Location Optimization',
        'High-Intent Commercial Keyword Funnels',
        'Authoritative Niche Backlink Outreach Strategy',
        'Comprehensive On-Page & Conversion UX Tuning',
        'Monthly Transparent Executive Search Reports'
      ],
      cta: 'Expand Across Pakistan'
    },
    {
      name: 'Enterprise & Global Remote Partnership',
      target: 'Tech scale-ups, global exporters & high-ticket B2B brands',
      tag: 'Global Authority',
      popular: false,
      deliverables: [
        'Everything in E-Commerce & National Brand Packages',
        'AI-Assisted Programmatic SEO Pipelines & Clustering',
        'International Geo-Targeting (Pakistan, UAE, UK, US)',
        'Advanced Technical SEO & JavaScript Crawl Tuning',
        'Dedicated Weekly Strategy Calls & Direct WhatsApp Access',
        'Full Conversion Rate Optimization (CRO) Funnels'
      ],
      cta: 'Book Enterprise Consultation'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#0F0728] font-sans antialiased selection:bg-[#7C3AED] selection:text-white pt-24 pb-16">
      
      {/* 01. Breadcrumb Bar */}
      <div className="bg-[#FAF8FF] border-b border-[#E9D8FD] py-3 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#6B5B8D]">
          <Link to="/" className="hover:text-[#7C3AED] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#0F0728] font-bold">SEO Expert in Pakistan</span>
        </div>
      </div>

      {/* 02. Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF8FF] via-white to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] font-bold mb-5 shadow-xs">
              <Globe className="w-3.5 h-3.5 text-[#059669]" />
              <span>NATIONWIDE SEARCH &amp; E-COMMERCE GROWTH CONSULTANT</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F0728] tracking-tight leading-[1.15] mb-6">
              Hire the Leading <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#D946EF] bg-clip-text text-transparent">
                SEO Expert in Pakistan
              </span>
            </h1>

            <p className="font-sans text-base sm:text-xl text-[#3B2B5C] leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              Transform your website into a high-converting customer acquisition engine. I help ambitious Pakistani brands, Shopify stores, and enterprise scale-ups capture Page 1 rankings and turn searchers into profitable orders.
            </p>

            {/* Credibility Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 text-xs font-mono text-[#3B2B5C]">
              <span className="px-3 py-1.5 rounded-xl bg-white border border-[#E9D8FD] shadow-xs flex items-center gap-1.5 font-bold">
                <FileCheck className="w-3.5 h-3.5 text-[#059669]" /> Govt. PBTE &amp; NAVTTC Certified (NVQ Level 3)
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white border border-[#E9D8FD] shadow-xs flex items-center gap-1.5 font-bold">
                <Award className="w-3.5 h-3.5 text-[#7C3AED]" /> SEO Lead @ Delenzo Technologies
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white border border-[#E9D8FD] shadow-xs flex items-center gap-1.5 font-bold">
                <TrendingUp className="w-3.5 h-3.5 text-[#059669]" /> 50+ Projects Across Pakistan &amp; UAE
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/923204966959?text=Hi%20Talha,%20I'd%20like%20to%20discuss%20an%20SEO%20project%20for%20my%20business%20in%20Pakistan."
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-2xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-mono text-sm font-bold shadow-lg shadow-[#7C3AED]/25 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss Pakistan Project on WhatsApp</span>
              </a>

              <a
                href="https://calendly.com/talhaahsanofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-2xl bg-white hover:bg-[#FAF8FF] text-[#0F0728] border border-[#E9D8FD] font-mono text-sm font-bold shadow-xs transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#7C3AED]" />
                <span>Book Free 15-Min Strategy Session</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 03. National Stats Bar */}
      <section className="py-8 bg-[#0B0614] text-white border-y border-[#2D1B4E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#A78BFA]">10.7K+</span>
              <p className="font-mono text-xs text-[#C8B8E8] mt-1 font-bold">Organic Clicks Delivered</p>
            </div>
            <div>
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#34D399]">3+ Years</span>
              <p className="font-mono text-xs text-[#C8B8E8] mt-1 font-bold">Documented SEO Experience</p>
            </div>
            <div>
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#A78BFA]">50+</span>
              <p className="font-mono text-xs text-[#C8B8E8] mt-1 font-bold">Websites &amp; Brands Managed</p>
            </div>
            <div>
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#F59E0B]">5.0 ★</span>
              <p className="font-mono text-xs text-[#C8B8E8] mt-1 font-bold">Google Maps Verified Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Verified Client Evidence Across Pakistan */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] font-bold mb-2.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
              <span>DEFENSIBLE PERFORMANCE METRICS</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#0F0728] tracking-tight">
              Real Search Results for Ambitious Brands
            </h2>
            <p className="text-[#3B2B5C] text-sm sm:text-base mt-2 font-medium">
              Every metric below is backed by real Google Search Console data from active commercial projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {nationalCaseStudies.map((study, idx) => (
              <div 
                key={study.id}
                className="bg-[#FAF8FF] border border-[#E9D8FD] hover:border-[#7C3AED] rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl hover:shadow-[#7C3AED]/12 group"
              >
                <div>
                  {study.image && (
                    <div className="relative h-44 overflow-hidden border-b border-[#E9D8FD] bg-[#0F0728]/5">
                      <img 
                        src={study.image} 
                        alt={study.client}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded-full bg-white/95 border border-[#E9D8FD] font-mono text-[10px] text-[#7C3AED] font-bold shadow-xs flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-[#059669]" /> Verified
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between border-b border-[#E9D8FD] pb-3 mb-3">
                      <div>
                        <span className="font-heading text-xl sm:text-2xl font-extrabold text-[#7C3AED]">
                          {study.metric}
                        </span>
                        <p className="font-mono text-[11px] text-[#0F0728] font-bold mt-0.5">
                          {study.metricLabel}
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] font-mono text-[11px] font-bold">
                        {study.growth}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-[#0F0728] mb-1">
                      {study.client}
                    </h3>
                    <p className="font-mono text-xs text-[#7C3AED] mb-2 flex items-center gap-1 font-bold">
                      <MapPin className="w-3 h-3 text-[#059669]" /> {study.location}
                    </p>

                    <p className="text-xs text-[#3B2B5C] leading-relaxed mb-4 font-medium line-clamp-3">
                      {study.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 border-t border-[#E9D8FD]">
                  <button
                    onClick={() => setSelectedCase(study)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#F3E8FF] hover:bg-[#7C3AED] text-[#7C3AED] hover:text-white font-mono text-xs font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>View Search Strategy &amp; Proof</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 05. National SEO Packages */}
      <section className="py-20 bg-[#FAF8FF] border-y border-[#E9D8FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] font-bold mb-3">
              <Zap className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span>TRANSPARENT SPRINT DELIVERABLES</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#0F0728] tracking-tight">
              Pakistan SEO Growth Packages Built for Direct Revenue
            </h2>
            <p className="text-[#3B2B5C] text-sm sm:text-base mt-2 font-medium">
              Predictable monthly sprints designed to replace expensive paid ads with sustained Google search volume.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {nationalPackages.map((pkg, idx) => (
              <div 
                key={idx}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular 
                    ? 'bg-[#0B0614] text-white border-2 border-[#7C3AED] shadow-2xl relative shadow-[#7C3AED]/20 lg:-translate-y-2' 
                    : 'bg-white text-[#0F0728] border border-[#E9D8FD] hover:border-[#7C3AED]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-[11px] font-bold px-3 py-1 rounded-full ${
                      pkg.popular 
                        ? 'bg-[#7C3AED] text-white' 
                        : 'bg-[#F3E8FF] text-[#7C3AED] border border-[#E9D8FD]'
                    }`}>
                      {pkg.tag}
                    </span>
                    <span className={`font-mono text-xs font-bold ${pkg.popular ? 'text-[#C8B8E8]' : 'text-[#6B5B8D]'}`}>
                      Monthly Sprint
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">
                    {pkg.name}
                  </h3>
                  <p className={`text-xs sm:text-sm mb-6 font-medium ${pkg.popular ? 'text-[#C8B8E8]' : 'text-[#3B2B5C]'}`}>
                    {pkg.target}
                  </p>

                  <div className={`space-y-3 pt-4 border-t mb-8 ${pkg.popular ? 'border-[#2D1B4E]' : 'border-[#E9D8FD]'}`}>
                    <p className={`font-mono text-xs font-bold uppercase tracking-wider mb-3 ${pkg.popular ? 'text-[#A78BFA]' : 'text-[#7C3AED]'}`}>
                      What's Included:
                    </p>
                    {pkg.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                        <span className={pkg.popular ? 'text-[#E9D8FD]' : 'text-[#3B2B5C]'}>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/923204966959?text=Hi%20Talha,%20I'm%20interested%20in%20your%20${encodeURIComponent(pkg.name)}%20for%20my%20business%20in%20Pakistan.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-5 rounded-2xl font-mono text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 text-center ${
                    pkg.popular 
                      ? 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-lg shadow-[#7C3AED]/30' 
                      : 'bg-[#F8F4FF] hover:bg-[#7C3AED] text-[#7C3AED] hover:text-white border border-[#E9D8FD]'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{pkg.cta}</span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 06. Official Government Certification & Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] font-bold mb-3">
              <FileCheck className="w-3.5 h-3.5 text-[#059669]" />
              <span>GOVERNMENT ACCREDITED CREDENTIALS</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#0F0728] tracking-tight">
              Verified SEO Credentials in Pakistan
            </h2>
            <p className="text-[#3B2B5C] text-sm sm:text-base mt-2 font-medium">
              Unlike self-proclaimed &quot;gurus&quot;, my technical search competencies are officially accredited by the Government of Pakistan.
            </p>
          </div>

          <div className="bg-[#FAF8FF] border border-[#E9D8FD] rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xs">
            <div className="w-full md:w-1/3 shrink-0 rounded-2xl overflow-hidden border border-[#E9D8FD] shadow-md bg-white">
              <img 
                src="/images/certificate-digital-marketing.jpeg" 
                alt="Government of Pakistan PBTE NAVTTC SEO Certificate"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold text-[#059669] bg-[#ECFDF5] px-3 py-1 rounded-full border border-[#A7F3D0] inline-block">
                Verified Qualification • NVQ Level 3
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#0F0728]">
                PBTE &amp; NAVTTC Certified Digital Marketing &amp; SEO
              </h3>
              <p className="font-mono text-xs text-[#6B5B8D]">
                Registration: PBTE/NVQ/CBT-0611ICT11/2023/31293 • Issued by Punjab Board of Technical Education
              </p>
              <p className="text-xs sm:text-sm text-[#3B2B5C] leading-relaxed font-medium">
                Formally assessed and certified for on-page SEO, technical website audits, commercial keyword identification, schema code deployment, and conversion architecture.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-white border border-[#E9D8FD] text-[#3B2B5C]">
                  ✓ On-Page &amp; Off-Page SEO
                </span>
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-white border border-[#E9D8FD] text-[#3B2B5C]">
                  ✓ Technical Web Audits
                </span>
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-white border border-[#E9D8FD] text-[#3B2B5C]">
                  ✓ High-DA Link Building
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 07. Pakistan SEO FAQs */}
      <section className="py-20 bg-[#FAF8FF] border-t border-[#E9D8FD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] font-bold mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#0F0728] tracking-tight">
              SEO Services in Pakistan: Common Inquiries
            </h2>
          </div>

          <div className="space-y-4">
            {pakistanFaqs.map((faq, fIdx) => (
              <div 
                key={fIdx}
                className="bg-white border border-[#E9D8FD] rounded-2xl p-5 sm:p-6 transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                  className="w-full flex items-center justify-between text-left font-heading text-base sm:text-lg font-bold text-[#0F0728] focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#7C3AED] text-xl ml-4 font-bold">
                    {openFaq === fIdx ? '−' : '+'}
                  </span>
                </button>

                {openFaq === fIdx && (
                  <p className="mt-3 text-xs sm:text-sm text-[#3B2B5C] leading-relaxed font-medium pt-3 border-t border-[#E9D8FD]">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 08. Final Call to Action */}
      <section className="py-16 bg-[#0B0614] text-white border-t border-[#2D1B4E]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Ready to Scale Your Organic Search Revenue in Pakistan?
          </h2>
          <p className="font-sans text-sm sm:text-lg text-[#C8B8E8] max-w-2xl mx-auto mb-8 font-normal">
            Get a comprehensive technical and competitor search audit. Discover the exact ranking gaps blocking your business from dominating Google in Pakistan.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923204966959?text=Hi%20Talha,%20I'd%20like%20to%20audit%20my%20website%20for%20Pakistan%20rankings."
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-2xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-mono text-sm font-bold shadow-lg shadow-[#7C3AED]/25 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Consultation</span>
            </a>

            <a
              href="https://calendly.com/talhaahsanofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-2xl bg-[#1A0F33] hover:bg-[#251547] text-white border border-[#3E2468] font-mono text-sm font-bold transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#A78BFA]" />
              <span>Book Zoom Strategy Call</span>
            </a>
          </div>
        </div>
      </section>

      {/* Case Study Modal Popup */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto">
            <div className="fixed inset-0" onClick={() => setSelectedCase(null)} />
            
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-[#E9D8FD] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#0F0728] z-10 my-auto">
              <div className="flex items-start justify-between border-b border-[#E9D8FD] pb-4 mb-4">
                <div>
                  <span className="font-mono text-xs text-[#7C3AED] font-bold">{selectedCase.category}</span>
                  <h3 className="font-heading text-2xl font-extrabold text-[#0F0728] mt-1">{selectedCase.client}</h3>
                  <p className="font-mono text-xs text-[#6B5B8D] mt-0.5">{selectedCase.location}</p>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="p-2 text-[#6B5B8D] hover:text-[#0F0728] bg-[#F8F4FF] rounded-xl"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {selectedCase.image && (
                <div className="rounded-2xl overflow-hidden border border-[#E9D8FD] mb-6 bg-[#0F0728]">
                  <img src={selectedCase.image} alt={selectedCase.client} className="w-full max-h-[380px] object-contain" />
                </div>
              )}

              <div className="bg-[#FAF8FF] border border-[#E9D8FD] rounded-xl p-4 mb-6 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[11px] text-[#6B5B8D] font-bold uppercase">Headline Result</span>
                  <p className="font-heading text-2xl font-extrabold text-[#7C3AED]">{selectedCase.metric}</p>
                </div>
                <span className="px-3 py-1 rounded-lg bg-[#ECFDF5] text-[#059669] font-mono text-xs font-bold">
                  {selectedCase.growth}
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#3B2B5C]">
                <div>
                  <h4 className="font-heading font-bold text-[#0F0728] mb-1">The Challenge</h4>
                  <p className="leading-relaxed">{selectedCase.challenge}</p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-[#0F0728] mb-1">The Search Strategy</h4>
                  <ul className="space-y-1.5 list-disc pl-5">
                    {selectedCase.strategy.map((s, sIdx) => (
                      <li key={sIdx}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-[#0F0728] mb-1">Key Results Delivered</h4>
                  <ul className="space-y-1.5 list-disc pl-5 text-[#059669] font-semibold">
                    {selectedCase.results.map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
