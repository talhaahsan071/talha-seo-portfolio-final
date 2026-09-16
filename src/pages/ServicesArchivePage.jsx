import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  MapPin, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  MessageSquare, 
  Calendar,
  Layers,
  Search,
  Award
} from 'lucide-react';
import { skills } from '../data/portfolioData';

export default function ServicesArchivePage() {
  useEffect(() => {
    document.title = 'Professional SEO Services & Growth Frameworks - Talha Ahsan';
    window.scrollTo(0, 0);
  }, []);

  const serviceIcons = {
    'on-page-seo': Search,
    'tech-seo': Cpu,
    'link-building': Zap,
    'local-seo': MapPin,
    'ecommerce-seo': ShoppingCart,
    'seo-audit': Award,
  };

  const detailedOfferings = [
    {
      id: 'on-page-seo',
      title: 'On-Page SEO Optimization',
      tagline: 'Optimize your page titles, headings, and text so Google easily understands what you sell and ranks you on Page 1.',
      badge: 'PAGE 1 RANKINGS',
      platforms: 'WordPress, Shopify, Webflow, Custom HTML/React',
      deliverables: [
        'High-Intent Buyer Keyword Research & Mapping',
        'Click-Winning Title Tags & Meta Descriptions',
        'Clear H1, H2, H3 Heading Content Structure',
        'Smart Internal Links Funneling Authority to Money Pages',
        'Image Alt Text & Content Readability Polish'
      ],
      caseStudyTieIn: {
        name: 'Carrot Sun Oil',
        result: 'Average position 7.2 on Page 1 in 90 days'
      }
    },
    {
      id: 'tech-seo',
      title: 'Technical SEO & Core Web Vitals Speed',
      tagline: 'Fix hidden website errors, speed up pages under 2 seconds, and ensure Google indexes every URL cleanly.',
      badge: 'SUB-2S SPEED',
      platforms: 'WordPress, Shopify, Webflow, Headless CMS, Custom Code',
      deliverables: [
        'Complete Screaming Frog 500+ Point Health Crawl',
        'Sub-2.2s Largest Contentful Paint (LCP) Speed Tuning',
        'Mobile-First Usability & CLS Layout Shift Elimination',
        'Robots.txt, XML Sitemaps & Canonical Architecture',
        'Clean Schema Markup (Organization, FAQ, Breadcrumbs)'
      ],
      caseStudyTieIn: {
        name: 'Technical Health Audits',
        result: '100% Core Web Vitals Pass Rate with zero indexing leaks'
      }
    },
    {
      id: 'link-building',
      title: 'High-Authority Link Building (Off-Page SEO)',
      tagline: 'Get trusted, high-authority websites to link back to your business, giving you the algorithmic power to beat competitors.',
      badge: '100% WHITE-HAT',
      platforms: 'High DA/DR Niche Blogs, Editorial Outreach, PR Platforms',
      deliverables: [
        '100% Safe Manual Outreach (Zero Spam Networks)',
        'High DA / DR Niche-Relevant Guest Posts & Contextual Mentions',
        'Competitor Backlink Replication Strategy',
        'Local Pakistani & International Business Citations',
        'Transparent Monthly Live Backlink Reports'
      ],
      caseStudyTieIn: {
        name: '2S Lawyers UAE',
        result: '+300% inbound leads from high-authority niche trust'
      }
    },
    {
      id: 'local-seo',
      title: 'Google Maps & Local 3-Pack Optimization',
      tagline: 'Rank your shop or service business in the Top 3 on Google Maps in your city to bring direct calls and visits.',
      badge: 'PHONE CALLS & VISITS',
      platforms: 'Google Business Profile, Local Directories, Apple Maps',
      deliverables: [
        'Primary & Secondary Category Signal Alignment',
        'NAP Consistency Audit Across All Pakistani & Global Directories',
        'Localized Landing Pages with Embedded Maps & Geo-Schema',
        'Automated Customer Review Funnel Strategy (4.7+ Rating)',
        'Local Citation Building in City-Specific Hubs'
      ],
      caseStudyTieIn: {
        name: 'Delenzo Studio / Retail',
        result: '3,077 views, 619 direct calls & direction actions'
      }
    },
    {
      id: 'ecommerce-seo',
      title: 'E-Commerce & Online Store SEO',
      tagline: 'Rank your products and collection categories on Google to bring steady buyers without ad burn.',
      badge: 'SALES & REVENUE',
      platforms: 'Shopify, WooCommerce, Magento, Custom React/Next.js',
      deliverables: [
        'Collection Silo Hierarchy & Category Optimization',
        'Faceted Filter & Crawl Parameter Cleanup',
        'High-Intent Buyer Search Intent Mapping',
        'Commercial Product Schema (Price, Availability, Reviews)',
        'Product Guide Funnels passing PageRank to priority collections'
      ],
      caseStudyTieIn: {
        name: 'Hope Enterprises',
        result: '+280% organic clicks (10,700 clicks) in 6 months'
      }
    },
    {
      id: 'seo-audit',
      title: 'Complete Website SEO Audit & Action Plan',
      tagline: 'Find the exact errors holding your website back and get a clear, step-by-step roadmap to rank #1.',
      badge: '100+ POINT AUDIT',
      platforms: 'Any Website (WordPress, Shopify, Custom, Wix)',
      deliverables: [
        '100+ Point In-Depth Technical & Content Inspection',
        'Top 5 Competitor Ranking & Traffic Gap Breakdown',
        'Missing Low-Hanging Buyer Keyword Checklist',
        'Prioritized Action List (What to fix first for fast results)',
        '15-Minute 1-on-1 Consultation Call on WhatsApp'
      ],
      caseStudyTieIn: {
        name: 'Discovery Audits',
        result: 'Uncovers the exact 3-5 bottlenecks blocking your traffic'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#0F0728] font-sans antialiased selection:bg-[#7C3AED] selection:text-white pt-24 pb-20">
      
      {/* 01. Breadcrumb Bar */}
      <div className="bg-[#FAF8FF] border-b border-[#E9D8FD] py-3 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#6B5B8D]">
          <Link to="/" className="hover:text-[#7C3AED] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#0F0728] font-bold">Services</span>
        </div>
      </div>

      {/* 02. Header Section */}
      <div className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF8FF] via-white to-white border-b border-[#E9D8FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] font-bold mb-4 shadow-xs">
              <Zap className="w-3.5 h-3.5 text-[#059669]" />
              <span>COMMERCIAL SEARCH GROWTH SYSTEMS</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#0F0728] tracking-tight leading-tight mb-4">
              Specialized SEO Services Built for Revenue
            </h1>
            <p className="text-[#3B2B5C] text-base sm:text-lg leading-relaxed font-medium">
              No vanity metrics, no generic checklists, and no outsourced junior staff. Every service below is executed directly by Talha Ahsan using modern algorithmic techniques, verified GSC benchmarks, and AI-accelerated tooling.
            </p>
          </div>
        </div>
      </div>

      {/* 03. Services Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-10">
          {detailedOfferings.map((service, idx) => {
            const IconComponent = serviceIcons[service.id] || Search;

            return (
              <div
                key={service.id}
                className="bg-[#FAF8FF] hover:bg-white border border-[#E9D8FD] hover:border-[#7C3AED] rounded-3xl p-6 sm:p-10 transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-[#7C3AED]/10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Info & Tagline */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] font-bold">
                        0{idx + 1} // {service.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#7C3AED] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#7C3AED]/25">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F0728]">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-base text-[#3B2B5C] leading-relaxed font-medium">
                      {service.tagline}
                    </p>

                    <div className="pt-2">
                      <span className="font-mono text-xs text-[#6B5B8D] uppercase tracking-wider block mb-1">
                        Supported Platforms:
                      </span>
                      <p className="font-mono text-xs text-[#0F0728] font-bold bg-white px-3 py-2 rounded-xl border border-[#E9D8FD] inline-block">
                        {service.platforms}
                      </p>
                    </div>

                    {/* Case study proof snippet */}
                    <div className="p-4 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#059669] shrink-0" />
                      <div className="text-xs">
                        <span className="font-bold text-[#065F46] block">Verified Result ({service.caseStudyTieIn.name}):</span>
                        <span className="text-[#047857]">{service.caseStudyTieIn.result}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Deliverables & CTA */}
                  <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
                    <div>
                      <h3 className="font-heading text-sm font-bold text-[#0F0728] uppercase tracking-wider mb-3">
                        Core Deliverables Included:
                      </h3>
                      <ul className="space-y-2.5">
                        {service.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3B2B5C] font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#E9D8FD]">
                      <Link
                        to={`/services/${service.id}`}
                        className="py-3 px-5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-mono text-xs font-bold transition-all flex items-center gap-2 shadow-md shadow-[#7C3AED]/20 group"
                      >
                        <span>View Full Service Breakdown</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>

                      <a
                        href={`https://wa.me/923204966959?text=Hi%20Talha,%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-5 rounded-xl bg-white hover:bg-[#F3E8FF] text-[#7C3AED] border border-[#E9D8FD] font-mono text-xs font-bold transition-all flex items-center gap-2"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Get Instant Quote</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 04. Comparison Table: Why Hire Talha vs Ordinary Agency */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#FAF8FF] border border-[#E9D8FD] rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-mono text-xs text-[#7C3AED] font-bold uppercase tracking-wider block mb-1">
              THE VALUE EQUATION
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#0F0728]">
              Why Ambitious Brands Choose Talha Ahsan
            </h2>
            <p className="text-sm sm:text-base text-[#3B2B5C] mt-2">
              Compare the hands-on senior consultant experience against typical slow agencies.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm font-sans">
              <thead>
                <tr className="border-b-2 border-[#E9D8FD] font-mono text-xs text-[#6B5B8D]">
                  <th className="pb-4 pr-4">Evaluation Criteria</th>
                  <th className="pb-4 px-4 text-[#7C3AED] font-bold">Talha Ahsan (Dedicated Consultant)</th>
                  <th className="pb-4 pl-4 text-gray-500">Traditional Agency / Low-Cost Freelancers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9D8FD]">
                <tr>
                  <td className="py-4 pr-4 font-bold text-[#0F0728]">Accountability & Execution</td>
                  <td className="py-4 px-4 font-bold text-[#059669]">Direct collaboration with senior expert</td>
                  <td className="py-4 pl-4 text-gray-500">Delegated to junior interns or outsourced staff</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-bold text-[#0F0728]">Turnaround & Speed</td>
                  <td className="py-4 px-4 font-bold text-[#059669]">5x faster using custom AI & Python workflows</td>
                  <td className="py-4 pl-4 text-gray-500">Weeks spent on generic manual spreadsheets</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-bold text-[#0F0728]">Focus & KPI</td>
                  <td className="py-4 px-4 font-bold text-[#059669]">Qualified buyer clicks, calls & revenue growth</td>
                  <td className="py-4 pl-4 text-gray-500">Superficial vanity traffic that doesn’t convert</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-bold text-[#0F0728]">Verification & Proof</td>
                  <td className="py-4 px-4 font-bold text-[#059669]">Real, defensible Google Search Console screenshots</td>
                  <td className="py-4 pl-4 text-gray-500">Stock illustrations, fake logos, or vague metrics</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-bold text-[#0F0728]">Contracts & Flexibility</td>
                  <td className="py-4 px-4 font-bold text-[#059669]">Transparent monthly sprint retainer or one-off audit</td>
                  <td className="py-4 pl-4 text-gray-500">6–12 month lock-in contracts with poor support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 05. Bottom Consultation Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-[#0B0614] border border-[#2D1B4E] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Not Sure Which SEO Package Fits Your Business?
          </h2>
          <p className="text-sm sm:text-base text-[#C8B8E8] max-w-xl mx-auto mb-6">
            Send me your website URL on WhatsApp. I will perform a quick 5-minute health check and tell you exactly what is stopping you from ranking.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/923204966959?text=Hi%20Talha,%20can%20you%20review%20my%20website%20and%20suggest%20the%20best%20SEO%20service?"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-mono text-xs font-bold shadow-lg transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Website on WhatsApp</span>
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
