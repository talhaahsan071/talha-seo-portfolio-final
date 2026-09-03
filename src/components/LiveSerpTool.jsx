import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Sparkles, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  ArrowRight,
  Lock,
  Globe,
  Sliders,
  BarChart3
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function LiveSerpTool() {
  const [domainInput, setDomainInput] = useState('');
  const [industry, setIndustry] = useState('ecommerce');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResult, setAuditResult] = useState(null);

  const handleAudit = (e) => {
    e.preventDefault();
    if (!domainInput) return;

    setIsAuditing(true);
    setAuditResult(null);

    // Simulate diagnostic calculation
    setTimeout(() => {
      const cleanDomain = domainInput.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
      
      setAuditResult({
        domain: cleanDomain,
        score: Math.floor(Math.random() * (94 - 72 + 1)) + 72,
        serpTitle: `${cleanDomain.split('.')[0].toUpperCase()} — Official Digital Portal & Services`,
        serpBreadcrumb: `${cleanDomain} › solutions › primary`,
        serpSnippet: `Official online platform for ${cleanDomain}. Engineered with Core Web Vitals optimization, JSON-LD Schema architecture, and full-funnel organic search visibility.`,
        checks: [
          { check: "Core Web Vitals (LCP / INP)", status: "pass", note: "Sub-2.2s load speed target" },
          { check: "JSON-LD Structured Data Schema", status: "pass", note: "Organization & Service Schema active" },
          { check: "Indexation & Canonical Hierarchy", status: "pass", note: "Zero duplicate URL indexing detected" },
          { check: "Google Business Profile Sync", status: "warning", note: "Review velocity and local citation gaps" },
          { check: "Topical Content Depth & Intent", status: "pass", note: "Strong commercial buyer intent coverage" }
        ]
      });
      setIsAuditing(false);
    }, 1000);
  };

  return (
    <section id="serp-tool" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F8F4FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] mb-3 shadow-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
            <span>06 // Interactive SERP Simulator &amp; Diagnostic</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#0F0728] leading-tight">
            Test Your Domain's Search Readiness
          </h2>
          <p className="text-[#3B2B5C] text-base mt-3 font-medium">
            Enter your domain below to preview how Talha's 360° digital growth framework analyzes indexation risks, schema gaps, and commercial search visibility.
          </p>
        </div>

        {/* Simulator Box */}
        <div className="bg-[#F8F4FF] border border-[#E9D8FD] rounded-3xl p-6 sm:p-10 shadow-xl purple-glow">
          
          {/* Input Form */}
          <form onSubmit={handleAudit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              
              {/* Domain Input Field */}
              <div className="lg:col-span-8 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#6B5B8D]">
                  <Globe className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={domainInput}
                  onChange={(e) => setDomainInput(e.target.value)}
                  placeholder="e.g. yourbrand.com or mystore.pk"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-[#E9D8FD] focus:border-[#7C3AED] rounded-2xl font-mono text-sm text-[#0F0728] font-bold placeholder-[#6B5B8D] focus:outline-none transition-all shadow-inner"
                />
              </div>

              {/* Submit CTA */}
              <div className="lg:col-span-4">
                <button
                  type="submit"
                  disabled={isAuditing || !domainInput}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#D946EF] text-white font-mono text-sm font-bold shadow-lg shadow-[#7C3AED]/25 hover:shadow-[#7C3AED]/40 hover:opacity-95 transition-all disabled:opacity-50"
                >
                  {isAuditing ? (
                    <span>Running Diagnostic...</span>
                  ) : (
                    <>
                      <Search className="w-4 h-4" />
                      <span>Simulate SERP Audit</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Industry Selector Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#E9D8FD]">
              <span className="font-mono text-xs text-[#6B5B8D] font-bold mr-2">Target Industry:</span>
              
              {[
                { id: 'ecommerce', label: 'E-Commerce & Retail' },
                { id: 'saas', label: 'SaaS & Technology' },
                { id: 'legal', label: 'Legal & Professional Services' },
                { id: 'local', label: 'Local & Multi-Branch Business' }
              ].map((ind) => (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setIndustry(ind.id)}
                  className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-colors ${
                    industry === ind.id
                      ? 'bg-[#7C3AED] text-white shadow-xs'
                      : 'bg-white text-[#3B2B5C] border border-[#E9D8FD] hover:bg-[#F3E8FF]'
                  }`}
                >
                  {ind.label}
                </button>
              ))}
            </div>
          </form>

          {/* Diagnostic & SERP Preview Results */}
          {auditResult && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-10 pt-10 border-t border-[#E9D8FD] space-y-8"
            >
              {/* Simulated Google Search Result Card */}
              <div>
                <span className="font-mono text-xs text-[#7C3AED] font-bold uppercase tracking-wider block mb-3">
                  1. Simulated Google SERP Preview
                </span>
                <div className="bg-white border border-[#E9D8FD] rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#6B5B8D] mb-2">
                    <Lock className="w-3.5 h-3.5 text-[#059669]" />
                    <span className="text-[#0F0728] font-bold">{auditResult.serpBreadcrumb}</span>
                  </div>
                  <h4 className="font-heading text-xl font-bold text-[#7C3AED] hover:underline cursor-pointer mb-2">
                    {auditResult.serpTitle}
                  </h4>
                  <p className="font-sans text-sm text-[#3B2B5C] leading-relaxed font-medium">
                    {auditResult.serpSnippet}
                  </p>
                </div>
              </div>

              {/* Technical Health Checklist & Score */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#7C3AED] font-bold uppercase tracking-wider">
                    2. Estimated Organic Search Health Score
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#6B5B8D] font-bold">Estimated Score:</span>
                    <span className="font-heading text-xl font-extrabold text-[#059669]">
                      {auditResult.score}/100
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {auditResult.checks.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-[#E9D8FD] p-4 rounded-xl flex items-start gap-3 shadow-2xs"
                    >
                      {item.status === 'pass' && <CheckCircle className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />}
                      {item.status === 'warning' && <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />}
                      {item.status === 'fail' && <XCircle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />}
                      
                      <div>
                        <p className="font-heading text-xs font-bold text-[#0F0728]">{item.check}</p>
                        <p className="font-sans text-[11px] text-[#6B5B8D] font-medium">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Callout */}
              <div className="p-5 bg-white border border-[#E9D8FD] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="font-heading text-sm font-bold text-[#0F0728]">Want a comprehensive 40-point technical audit for this domain?</h5>
                  <p className="font-sans text-xs text-[#6B5B8D] font-medium">Talha delivers full Screaming Frog crawl logs, GSC indexing analysis, and CRO action plans.</p>
                </div>
                <a
                  href="#contact"
                  className="shrink-0 px-5 py-2.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-mono text-xs font-bold rounded-xl shadow-xs transition-colors"
                >
                  Request Full Audit →
                </a>
              </div>

            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
