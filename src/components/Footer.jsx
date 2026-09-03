import React from 'react';
import { ArrowUp, Mail, Code, FileText, Lock, Globe, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

export default function Footer({ onOpenSitemap, onOpenRobots }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": personalInfo.name,
        "jobTitle": personalInfo.title,
        "url": `https://${personalInfo.domain}`,
        "email": personalInfo.email,
        "telephone": personalInfo.phoneNumber,
        "sameAs": [
          personalInfo.linkedin,
          personalInfo.gmbUrl
        ],
        "knowsAbout": [
          "360° Digital Marketing",
          "Search Engine Optimization (SEO)",
          "Technical SEO",
          "Conversion Rate Optimization (CRO)",
          "Google Business Profile (GMB)",
          "E-Commerce SEO Architecture"
        ]
      }
    ]
  };

  return (
    <footer className="bg-[#F8F4FF] border-t border-[#E9D8FD] pt-16 pb-12 text-[#6B5B8D]">
      
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#E9D8FD]">
          
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#D946EF] p-0.5 shadow-sm">
                <div className="w-full h-full bg-white rounded-[8px] flex items-center justify-center font-serif text-sm font-bold text-[#7C3AED]">
                  T
                </div>
              </div>
              <span className="font-serif text-2xl font-bold text-[#0F0728]">{personalInfo.name}</span>
              <span className="font-mono text-xs font-bold text-[#7C3AED] bg-[#F3E8FF] px-2 py-0.5 rounded border border-[#E9D8FD]">
                360° DIGITAL MARKETER
              </span>
            </div>
            <p className="font-sans text-sm text-[#3B2B5C] font-medium leading-relaxed max-w-sm">
              Data-backed search engine optimization and full-funnel digital growth for enterprise brands and e-commerce across global industries.
            </p>
            <div className="font-mono text-xs text-[#6B5B8D] space-y-1">
              <p>Email: <strong className="text-[#0F0728]">{personalInfo.email}</strong></p>
              <p>Phone / WhatsApp: <strong className="text-[#059669]">{personalInfo.phoneNumber}</strong></p>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-[#0F0728] font-bold uppercase tracking-wider block">Index Navigation</span>
            <div className="grid grid-cols-2 gap-2 text-[#3B2B5C] font-semibold">
              <a href="#about" className="hover:text-[#7C3AED] transition-colors">01. About</a>
              <a href="#journey" className="hover:text-[#7C3AED] transition-colors">02. My Journey</a>
              <a href="#skills" className="hover:text-[#7C3AED] transition-colors">03. Skills</a>
              <a href="#tools" className="hover:text-[#7C3AED] transition-colors">04. Tools</a>
              <a href="#case-studies" className="hover:text-[#7C3AED] transition-colors">05. Case Studies</a>
              <a href="#credentials" className="hover:text-[#7C3AED] transition-colors">06. Credentials</a>
              <a href="#process" className="hover:text-[#7C3AED] transition-colors">07. Process</a>
              <a href="#contact" className="hover:text-[#7C3AED] transition-colors">08. Contact</a>
            </div>
          </div>

          {/* Technical Directives (3 cols) */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-[#0F0728] font-bold uppercase tracking-wider block">Technical SEO Directives</span>
            <div className="space-y-2">
              <button
                onClick={onOpenSitemap}
                className="flex items-center gap-2 text-[#3B2B5C] hover:text-[#7C3AED] transition-colors w-full text-left bg-white p-2.5 rounded-xl border border-[#E9D8FD] font-semibold shadow-xs"
              >
                <Code className="w-3.5 h-3.5 text-[#059669]" />
                <span>Inspect sitemap.xml</span>
              </button>
              
              <button
                onClick={onOpenRobots}
                className="flex items-center gap-2 text-[#3B2B5C] hover:text-[#7C3AED] transition-colors w-full text-left bg-white p-2.5 rounded-xl border border-[#E9D8FD] font-semibold shadow-xs"
              >
                <FileText className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span>View robots.txt</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-4 text-[#6B5B8D] font-semibold">
            <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
            <span>•</span>
            <span className="text-[#0F0728] font-bold">Global Remote &amp; Worldwide Available</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-[#3B2B5C] hover:text-[#7C3AED] bg-white border border-[#E9D8FD] rounded-xl transition-colors shadow-xs"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.gmbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-[#3B2B5C] hover:text-[#D946EF] bg-white border border-[#E9D8FD] rounded-xl transition-colors shadow-xs"
              aria-label="Google Business Profile"
            >
              <MapPin className="w-4 h-4 text-[#059669]" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-[#F8F4FF] text-[#0F0728] border border-[#E9D8FD] rounded-xl transition-colors font-bold shadow-xs"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#7C3AED]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
