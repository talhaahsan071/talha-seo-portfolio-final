import React, { useState } from 'react';
import { X, FileText, Check, Copy } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function RobotsModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const robotsTxt = `# robots.txt for https://${personalInfo.domain}
# Optimized by Talha — SEO Specialist

User-agent: *
Allow: /
Disallow: /private/
Disallow: /admin/

# Googlebot specific rules
User-agent: Googlebot
Allow: /
Crawl-delay: 1

# Bingbot rules
User-agent: Bingbot
Allow: /

# Sitemap Location
Sitemap: https://${personalInfo.domain}/sitemap.xml
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(robotsTxt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-white border border-[#E9D8FD] rounded-3xl shadow-2xl p-6 text-[#0F0728] purple-glow">
        <div className="flex items-center justify-between border-b border-[#E9D8FD] pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#F8F4FF] border border-[#E9D8FD] rounded-xl text-[#7C3AED]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#0F0728]">robots.txt Directive</h3>
              <p className="font-mono text-xs text-[#6B5B8D] font-semibold">Search Crawler Directives</p>
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
          Clean crawler configuration ensuring Googlebot, Bingbot, and AI crawlers can discover portfolio case studies efficiently.
        </p>

        <div className="relative bg-[#F8F4FF] border border-[#E9D8FD] rounded-2xl p-4 font-mono text-xs text-[#7C3AED] font-semibold overflow-x-auto">
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-[#F3E8FF] border border-[#E9D8FD] rounded-lg text-xs text-[#7C3AED] transition-colors shadow-xs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#059669]" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Copied!" : "Copy txt"}
          </button>
          <pre>{robotsTxt}</pre>
        </div>

        <div className="flex items-center justify-between border-t border-[#E9D8FD] pt-4 mt-4">
          <span className="font-mono text-[11px] text-[#6B5B8D] font-semibold">Disallow: 0 syntax errors</span>
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
