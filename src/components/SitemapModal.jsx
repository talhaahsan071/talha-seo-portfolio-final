import React, { useState } from 'react';
import { X, Code, Check, Copy } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function SitemapModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Primary Landing Page -->
  <url>
    <loc>https://${personalInfo.domain}/</loc>
    <lastmod>2026-08-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- 360 Digital Marketer & Profile -->
  <url>
    <loc>https://${personalInfo.domain}/#about</loc>
    <lastmod>2026-08-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Career Journey & Experience -->
  <url>
    <loc>https://${personalInfo.domain}/#journey</loc>
    <lastmod>2026-08-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- 360 Digital Marketing & SEO Skills -->
  <url>
    <loc>https://${personalInfo.domain}/#skills</loc>
    <lastmod>2026-08-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Verified Search Case Studies -->
  <url>
    <loc>https://${personalInfo.domain}/#case-studies</loc>
    <lastmod>2026-08-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <!-- Certifications & Credentials -->
  <url>
    <loc>https://${personalInfo.domain}/#credentials</loc>
    <lastmod>2026-08-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  <!-- Consultation & Inquiries -->
  <url>
    <loc>https://${personalInfo.domain}/#contact</loc>
    <lastmod>2026-08-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sitemapXml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white border border-[#E9D8FD] rounded-3xl shadow-2xl p-6 md:p-8 text-[#0F0728] purple-glow">
        <div className="flex items-center justify-between border-b border-[#E9D8FD] pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#F8F4FF] border border-[#E9D8FD] rounded-xl text-[#7C3AED]">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-[#0F0728]">sitemap.xml Inspector</h3>
              <p className="font-mono text-xs text-[#6B5B8D] font-semibold">Valid XML Sitemap Schema</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#6B5B8D] hover:text-[#0F0728] bg-[#F8F4FF] border border-[#E9D8FD] rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-[#3B2B5C] mb-3 font-medium">
          Index-ready URL structure with full sitemap parameters for search engine crawlers.
        </p>

        <div className="relative bg-[#F8F4FF] border border-[#E9D8FD] rounded-2xl p-4 font-mono text-xs text-[#059669] font-semibold overflow-x-auto max-h-72">
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-[#F3E8FF] border border-[#E9D8FD] rounded-lg text-xs text-[#7C3AED] transition-colors shadow-xs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#059669]" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Copied!" : "Copy XML"}
          </button>
          <pre>{sitemapXml}</pre>
        </div>

        <div className="flex items-center justify-between border-t border-[#E9D8FD] pt-4 mt-4">
          <span className="font-mono text-[11px] text-[#6B5B8D] font-semibold">Status: 200 OK • Indexable by Googlebot</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#F8F4FF] border border-[#E9D8FD] rounded-xl text-xs text-[#3B2B5C] font-bold hover:text-[#0F0728] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
