import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
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
  X
} from 'lucide-react';
import { personalInfo, caseStudies } from '../data/portfolioData';

export default function LahoreSeoPage() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.title = 'Best SEO Expert in Lahore | Top SEO Consultant - Talha Ahsan';
    window.scrollTo(0, 0);
  }, []);

  const lahoreCaseStudies = [
    caseStudies.find(c => c.id === 'hope-enterprises') || caseStudies[0],
    caseStudies.find(c => c.id === 'hope-local-gmb') || caseStudies[1]
  ];

  const lahoreFaqs = [
    {
      q: 'How much does an SEO expert in Lahore charge?',
      a: 'SEO pricing in Lahore varies depending on website size and competition. Monthly retainer packages typically range between PKR 35,000 for local Google Maps optimization to PKR 65,000 - PKR 120,000+ for comprehensive e-commerce and national enterprise SEO. I offer transparent, scope-based monthly sprints with zero hidden charges.'
    },
    {
      q: 'How long does it take to rank on Google in Lahore?',
      a: 'For Google Maps and local 3-pack rankings in Lahore (e.g. Gulberg, DHA, Johar Town), initial improvements in calls and visibility typically occur within 30 to 60 days. For competitive e-commerce keywords across Pakistan, sustainable top-page organic ranking generally requires 3 to 6 months of consistent structural and topical optimization.'
    },
    {
      q: 'Why is Google Maps (GBP) optimization so important for Lahore businesses?',
      a: 'Over 73% of local searches in Lahore are performed on smartphones by customers looking for immediate services or retail shops nearby. Ranking in the Top 3 Map Pack puts your business directly in front of buyers with one-tap phone calls and driving directions, outperforming traditional website listings.'
    },
    {
      q: 'How is Talha Ahsan different from traditional SEO agencies in Lahore?',
      a: 'Most agencies in Lahore outsource work to junior interns and send confusing 80-page PDF reports filled with vanity metrics. I personally handle your search strategy, utilize modern AI pipelines to execute 5x faster, and optimize for real revenue and customer inquiries rather than just keyword rankings.'
    },
    {
      q: 'Can you help my Lahore-based Shopify or WooCommerce store scale sales?',
      a: 'Yes. E-commerce SEO is my primary specialty. I restructure store collections, fix product indexing issues, and optimize high-intent commercial keywords so Pakistani and international customers find your products organically without burning thousands on Meta and TikTok ads.'
    }
  ];

  const lahorePackages = [
    {
      name: 'Local Business & Google Maps Sprint',
      target: 'Retail shops, clinics, law firms & studios in Lahore',
      tag: 'Local Dominance',
      popular: false,
      deliverables: [
        'Google Business Profile (GBP) Full Audit & Optimization',
        'Top 3 Local Map Pack Targeting for Lahore Locations',
        'Exact NAP Consistency across Pakistani Directories',
        'Local Schema Code (LocalBusiness JSON-LD) Deployment',
        'Automated Customer Review Funnel Strategy',
        'Monthly Search Visibility & Call Inquiries Report'
      ],
      cta: 'Book Local Lahore SEO'
    },
    {
      name: 'E-Commerce Organic Scaling Sprint',
      target: 'Shopify & WooCommerce stores targeting Pakistan & Gulf',
      tag: 'Most Popular',
      popular: true,
      deliverables: [
        'Complete Store Architecture & Collection Restructure',
        'Commercial Buyer Intent Keyword Targeting',
        'Faceted Navigation & Product Indexing Fixes',
        'Core Web Vitals & Mobile Speed Optimization (<2.2s LCP)',
        'Product & Collection JSON-LD Schema Markup',
        'Topical Blog Clusters for High-Volume Buyer Terms',
        'Bi-Weekly GSC Performance & Revenue Tracking'
      ],
      cta: 'Scale Your Store SEO'
    },
    {
      name: 'Enterprise & Full-Funnel Search Partner',
      target: 'High-growth brands, tech companies & multi-location groups',
      tag: 'Full Dedicated Lead',
      popular: false,
      deliverables: [
        'Everything in E-Commerce & Local Packages',
        'Advanced Technical SEO & JavaScript Rendering Audits',
        'AI-Assisted Programmatic Search Pipelines',
        'High-Authority Niche Backlink Acquisition Outreach',
        'Competitor Search Gap & Commercial Market Takeover',
        'Direct WhatsApp Slack/Support & Strategy Calls',
        'Custom Conversion Rate Optimization (CRO) Funnels'
      ],
      cta: 'Request Enterprise Consultation'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#0F0728] font-sans antialiased selection:bg-[#7C3AED] selection:text-white pt-24 pb-16">
      
      {/* 01. Breadcrumb Bar */}
      <div className="bg-[#FAF8FF] border-b border-[#E9D8FD] py-3 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#6B5B8D]">
          <Link to="/" className="hover:text-[#7C3AED] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#0F0728] font-bold">SEO Expert in Lahore</span>
        </div>
      </div>

      {/* 02. Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF8FF] via-white to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] font-bold mb-5 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#059669]" />
              <span>TOP-RATED SEO CONSULTANT IN LAHORE, PAKISTAN</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F0728] tracking-tight leading-[1.15] mb-6">
              Best SEO Expert in Lahore for <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#D946EF] bg-clip-text text-transparent">
                E-Commerce &amp; Local Business Growth
              </span>
            </h1>

            <p className="font-sans text-base sm:text-xl text-[#3B2B5C] leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              Tired of burning budget on Facebook and Google Ads with zero lasting rankings? I help Lahore businesses and Pakistani stores get to the top of Google Search and Google Maps for predictable, high-margin customer inquiries.
            </p>

            {/* Credibility Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 text-xs font-mono text-[#3B2B5C]">
              <span className="px-3 py-1.5 rounded-xl bg-white border border-[#E9D8FD] shadow-xs flex items-center gap-1.5 font-bold">
                <Award className="w-3.5 h-3.5 text-[#7C3AED]" /> Delenzo Technologies SEO Lead
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white border border-[#E9D8FD] shadow-xs flex items-center gap-1.5 font-bold">
                <TrendingUp className="w-3.5 h-3.5 text-[#059669]" /> 10,700+ Organic Clicks in Lahore
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white border border-[#E9D8FD] shadow-xs flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7C3AED]" /> PBTE &amp; NAVTTC Certified
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/923204966959?text=Hi%20Talha,%20I%20need%20SEO%20services%20in%20Lahore%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-2xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-mono text-sm font-bold shadow-lg shadow-[#7C3AED]/25 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss Lahore Project on WhatsApp</span>
              </a>

              <a
                href="https://calendly.com/talhaahsanofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-2xl bg-white hover:bg-[#FAF8FF] text-[#0F0728] border border-[#E9D8FD] font-mono text-sm font-bold shadow-xs transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#7C3AED]" />
                <span>Book 15-Min Zoom Strategy Call</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 03. High-Impact Stats Bar */}
      <section className="py-8 bg-[#0B0614] text-white border-y border-[#2D1B4E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#A78BFA]">+280%</span>
              <p className="font-mono text-xs text-[#C8B8E8] mt-1 font-bold">Traffic Surge (Lahore Retail)</p>
            </div>
            <div>
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#34D399]">#1 Rank</span>
              <p className="font-mono text-xs text-[#C8B8E8] mt-1 font-bold">Google Maps 3-Pack in Lahore</p>
            </div>
            <div>
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#A78BFA]">619+</span>
              <p className="font-mono text-xs text-[#C8B8E8] mt-1 font-bold">Direct Customer Phone Calls</p>
            </div>
            <div>
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#F59E0B]">5.0 ★</span>
              <p className="font-mono text-xs text-[#C8B8E8] mt-1 font-bold">Google Business Verified Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Verified Lahore Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] font-bold mb-2.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
              <span>DOCUMENTED SEARCH EVIDENCE IN LAHORE</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#0F0728] tracking-tight">
              Proven Search Victories for Lahore Businesses
            </h2>
            <p className="text-[#3B2B5C] text-sm sm:text-base mt-2 font-medium">
              Real client properties operating in Lahore with verified Google Search Console and Google Maps exports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {lahoreCaseStudies.map((study, idx) => (
              <div 
                key={study.id}
                className="bg-[#FAF8FF] border border-[#E9D8FD] hover:border-[#7C3AED] rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl hover:shadow-[#7C3AED]/12 group"
              >
                <div>
                  {study.image && (
                    <div className="relative h-52 sm:h-60 overflow-hidden border-b border-[#E9D8FD] bg-[#0F0728]/5">
                      <img 
                        src={study.image} 
                        alt={study.client}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="px-2.5 py-1 rounded-full bg-white/95 border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] font-bold shadow-xs flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-[#059669]" /> Verified
                        </span>
                        <span className="font-mono text-xs uppercase font-bold px-2.5 py-1 rounded-full bg-[#0F0728]/80 text-white">
                          LAHORE CASE 0{idx + 1}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between border-b border-[#E9D8FD] pb-4 mb-4">
                      <div>
                        <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#7C3AED]">
                          {study.metric}
                        </span>
                        <p className="font-mono text-xs text-[#0F0728] font-bold mt-0.5">
                          {study.metricLabel}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] font-mono text-xs font-bold">
                        {study.growth}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-[#0F0728] mb-1">
                      {study.client}
                    </h3>
                    <p className="font-mono text-xs text-[#7C3AED] mb-3 flex items-center gap-1 font-bold">
                      <MapPin className="w-3.5 h-3.5 text-[#059669]" /> {study.location}
                    </p>

                    <p className="text-xs sm:text-sm text-[#3B2B5C] leading-relaxed mb-4 font-medium">
                      {study.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 border-t border-[#E9D8FD]">
                  <div className="flex flex-wrap gap-1.5 pt-3 mb-4">
                    {study.tags.map((t, tIdx) => (
                      <span key={tIdx} className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-[#E9D8FD] text-[#3B2B5C]">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedCase(study)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#F3E8FF] hover:bg-[#7C3AED] text-[#7C3AED] hover:text-white font-mono text-xs font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Inspect Full Strategy &amp; GSC Data</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-mono font-bold text-[#7C3AED] hover:text-[#6D28D9] group"
            >
              <span>Explore all national and international case studies on the main portfolio</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </section>

      {/* 05. Core SEO Services for Lahore */}
      <section className="py-20 bg-[#FAF8FF] border-y border-[#E9D8FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] font-bold mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span>CUSTOM-BUILT FOR THE LAHORE MARKET</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#0F0728] tracking-tight">
              Specialized SEO Services for Lahore Businesses
            </h2>
            <p className="text-[#3B2B5C] text-sm sm:text-base mt-2 font-medium">
              Whether you run a physical retail showroom in Gulberg or an online store shipping across Pakistan, here is how we capture high-intent buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white border border-[#E9D8FD] hover:border-[#7C3AED] rounded-2xl p-6 transition-all duration-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#F3E8FF] flex items-center justify-center text-[#7C3AED] mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#0F0728] mb-2">
                  Google Maps 3-Pack Domination
                </h3>
                <p className="text-xs sm:text-sm text-[#3B2B5C] leading-relaxed mb-4 font-medium">
                  Rank in the Top 3 on Google Maps across Lahore (Gulberg, DHA, Johar Town, Hall Road). Generate direct phone calls, WhatsApp inquiries, and customer store visits.
                </p>
              </div>
              <span className="font-mono text-[10px] text-[#059669] font-bold block pt-3 border-t border-[#E9D8FD]">
                ✓ Local Citation &amp; Review Funnels
              </span>
            </div>

            <div className="bg-white border border-[#E9D8FD] hover:border-[#7C3AED] rounded-2xl p-6 transition-all duration-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#F3E8FF] flex items-center justify-center text-[#7C3AED] mb-4">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#0F0728] mb-2">
                  Shopify &amp; Store E-Commerce SEO
                </h3>
                <p className="text-xs sm:text-sm text-[#3B2B5C] leading-relaxed mb-4 font-medium">
                  Restructure product categories and collections. Target commercial queries for Pakistani shoppers searching for your specific products on Google.
                </p>
              </div>
              <span className="font-mono text-[10px] text-[#059669] font-bold block pt-3 border-t border-[#E9D8FD]">
                ✓ Zero Paid Ad Dependency
              </span>
            </div>

            <div className="bg-white border border-[#E9D8FD] hover:border-[#7C3AED] rounded-2xl p-6 transition-all duration-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#F3E8FF] flex items-center justify-center text-[#7C3AED] mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#0F0728] mb-2">
                  Technical SEO &amp; Speed Fixes
                </h3>
                <p className="text-xs sm:text-sm text-[#3B2B5C] leading-relaxed mb-4 font-medium">
                  Eliminate JavaScript rendering bottlenecks, fix crawl errors, optimize canonicals, and hit sub-2.2s Core Web Vitals speeds that Google rewards with higher rankings.
                </p>
              </div>
              <span className="font-mono text-[10px] text-[#059669] font-bold block pt-3 border-t border-[#E9D8FD]">
                ✓ 100% Crawl Clean &amp; Fast
              </span>
            </div>

            <div className="bg-white border border-[#E9D8FD] hover:border-[#7C3AED] rounded-2xl p-6 transition-all duration-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#F3E8FF] flex items-center justify-center text-[#7C3AED] mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#0F0728] mb-2">
                  AI Semantic Clustering
                </h3>
                <p className="text-xs sm:text-sm text-[#3B2B5C] leading-relaxed mb-4 font-medium">
                  Analyze 1,000+ customer search terms and organize them into non-cannibalizing topical hubs 5x faster than traditional agencies with custom AI automation scripts.
                </p>
              </div>
              <span className="font-mono text-[10px] text-[#059669] font-bold block pt-3 border-t border-[#E9D8FD]">
                ✓ 5x Faster Execution
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 06. Transparent SEO Packages for Lahore */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] font-bold mb-3">
              <Zap className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span>TRANSPARENT MONTHLY PACKAGES</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#0F0728] tracking-tight">
              SEO Packages Built for Measurable ROI in Lahore
            </h2>
            <p className="text-[#3B2B5C] text-sm sm:text-base mt-2 font-medium">
              No locked-in annual traps. Clear monthly sprints with documented deliverables and weekly progress reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {lahorePackages.map((pkg, idx) => (
              <div 
                key={idx}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular 
                    ? 'bg-[#0B0614] text-white border-2 border-[#7C3AED] shadow-2xl relative shadow-[#7C3AED]/20 lg:-translate-y-2' 
                    : 'bg-[#FAF8FF] text-[#0F0728] border border-[#E9D8FD] hover:border-[#7C3AED]'
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
                  href={`https://wa.me/923204966959?text=Hi%20Talha,%20I'm%20interested%20in%20your%20${encodeURIComponent(pkg.name)}%20for%20my%20business%20in%20Lahore.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-5 rounded-2xl font-mono text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 text-center ${
                    pkg.popular 
                      ? 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-lg shadow-[#7C3AED]/30' 
                      : 'bg-white hover:bg-[#7C3AED] text-[#7C3AED] hover:text-white border border-[#E9D8FD]'
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

      {/* 07. Comparison: Talha vs Traditional Lahore Agencies */}
      <section className="py-20 bg-[#FAF8FF] border-y border-[#E9D8FD]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#0F0728] tracking-tight">
              Why Lahore Businesses Choose Talha Ahsan Over Traditional Agencies
            </h2>
            <p className="text-[#3B2B5C] text-sm sm:text-base mt-2 font-medium">
              Here is how my modern, evidence-first execution compares to standard agency retainers.
            </p>
          </div>

          <div className="bg-white border border-[#E9D8FD] rounded-3xl overflow-hidden shadow-xs">
            <div className="grid grid-cols-12 bg-[#F3E8FF] border-b border-[#E9D8FD] p-4 text-xs font-mono font-bold text-[#0F0728]">
              <div className="col-span-4">Feature &amp; Metric</div>
              <div className="col-span-4 text-[#E53E3E]">Traditional Lahore Agency</div>
              <div className="col-span-4 text-[#059669]">Talha Ahsan (Senior Consultant)</div>
            </div>

            <div className="divide-y divide-[#E9D8FD] text-xs sm:text-sm font-medium text-[#3B2B5C]">
              <div className="grid grid-cols-12 p-4 sm:p-5 items-center">
                <div className="col-span-4 font-bold text-[#0F0728]">Who Does The Work</div>
                <div className="col-span-4 text-[#6B5B8D]">Junior interns &amp; inexperienced trainees</div>
                <div className="col-span-4 text-[#059669] font-bold">Senior strategist (Delenzo Technologies SEO Lead)</div>
              </div>

              <div className="grid grid-cols-12 p-4 sm:p-5 items-center">
                <div className="col-span-4 font-bold text-[#0F0728]">Execution Speed</div>
                <div className="col-span-4 text-[#6B5B8D]">3–6 weeks to deliver a basic spreadsheet</div>
                <div className="col-span-4 text-[#059669] font-bold">5x faster delivery using modern AI automation pipelines</div>
              </div>

              <div className="grid grid-cols-12 p-4 sm:p-5 items-center">
                <div className="col-span-4 font-bold text-[#0F0728]">Reporting &amp; Metrics</div>
                <div className="col-span-4 text-[#6B5B8D]">Confusing 80-page PDF reports with vanity rankings</div>
                <div className="col-span-4 text-[#059669] font-bold">Defensible GSC impressions, clicks, phone calls &amp; revenue</div>
              </div>

              <div className="grid grid-cols-12 p-4 sm:p-5 items-center">
                <div className="col-span-4 font-bold text-[#0F0728]">Communication</div>
                <div className="col-span-4 text-[#6B5B8D]">Account managers who know nothing about technical SEO</div>
                <div className="col-span-4 text-[#059669] font-bold">Direct WhatsApp access &amp; regular strategy reviews</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 08. Lahore SEO FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] font-bold mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#0F0728] tracking-tight">
              SEO in Lahore: Common Questions Answered
            </h2>
          </div>

          <div className="space-y-4">
            {lahoreFaqs.map((faq, fIdx) => (
              <div 
                key={fIdx}
                className="bg-[#FAF8FF] border border-[#E9D8FD] rounded-2xl p-5 sm:p-6 transition-all"
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

      {/* 09. Final Action Hub */}
      <section className="py-16 bg-[#0B0614] text-white border-t border-[#2D1B4E]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Ready to Dominate Search in Lahore?
          </h2>
          <p className="font-sans text-sm sm:text-lg text-[#C8B8E8] max-w-2xl mx-auto mb-8 font-normal">
            Let's inspect your website, uncover why your competitors are ranking higher in Lahore, and build a high-ROI organic search plan.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923204966959?text=Hi%20Talha,%20I'd%20like%20to%20audit%20my%20website%20for%20Lahore%20rankings."
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-2xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-mono text-sm font-bold shadow-lg shadow-[#7C3AED]/25 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Message</span>
            </a>

            <a
              href="https://calendly.com/talhaahsanofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-2xl bg-[#1A0F33] hover:bg-[#251547] text-white border border-[#3E2468] font-mono text-sm font-bold transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#A78BFA]" />
              <span>Book Strategy Call</span>
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
