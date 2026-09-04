import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';
import { faqList, personalInfo } from '../data/portfolioData';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0); // First item open by default

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  // Structured FAQPage Schema.org JSON-LD for Google Rich Results & AI Overviews
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      
      {/* FAQ Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F4FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] mb-3 shadow-xs font-bold">
            <HelpCircle className="w-4 h-4 text-[#7C3AED]" />
            <span>AI OVERVIEWS &amp; FAQ DIRECTORY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#0F0728] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#3B2B5C] text-sm sm:text-base mt-3 font-medium max-w-2xl mx-auto">
            Direct answers on Talha Ahsan's SEO background, core capabilities, client deliverables, and how to collaborate.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqList.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-[#7C3AED] bg-[#F8F4FF] shadow-md shadow-[#7C3AED]/10' 
                    : 'border-[#E9D8FD] bg-white hover:border-[#7C3AED]/50'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-[#0F0728] pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen 
                      ? 'bg-[#7C3AED] text-white border-[#7C3AED] rotate-180' 
                      : 'bg-[#F8F4FF] text-[#7C3AED] border-[#E9D8FD]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#3B2B5C] font-sans leading-relaxed font-medium border-t border-[#E9D8FD]/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Direct CTA */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-[#F8F4FF] to-[#F3E8FF] border border-[#E9D8FD] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-heading text-base font-bold text-[#0F0728]">
              Have a specific question about your website's search performance?
            </h3>
            <p className="text-xs text-[#6B5B8D] font-mono mt-1 font-semibold">
              Get an honest diagnostic audit directly from Talha Ahsan.
            </p>
          </div>
          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-mono text-xs font-bold shadow-md transition-all shrink-0 flex items-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
