import React from 'react';
import { X, Download, FileText, CheckCircle2, GraduationCap, Briefcase, Award, Globe, Phone, Mail, MapPin } from 'lucide-react';
import { personalInfo, experiences, educationList } from '../data/portfolioData';

export default function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownloadTxt = () => {
    const cvText = 
      `TALHA AHSAN — 360° DIGITAL MARKETER & SEO SPECIALIST\n` +
      `Email: ${personalInfo.email} | Phone/WhatsApp: ${personalInfo.phoneNumber}\n` +
      `LinkedIn: ${personalInfo.linkedin} | Location: ${personalInfo.location}\n` +
      `Google Maps (GMB): ${personalInfo.gmbUrl}\n\n` +
      `============================================================\n` +
      `PROFESSIONAL SUMMARY\n` +
      `============================================================\n` +
      `Results-driven 360° Digital Marketer and SEO Specialist with 3+ years of hands-on experience driving verified organic traffic growth, Core Web Vitals optimization, and conversion marketing across global industries.\n\n` +
      `============================================================\n` +
      `CORE COMPETENCIES & 360° MARKETING\n` +
      `============================================================\n` +
      `- Full-Funnel SEO & Search Intent Architecture\n` +
      `- Technical Site Audits, Crawl Budget & JavaScript Indexing\n` +
      `- Google Business Profile (GMB) & #1 Local Map Pack Dominance\n` +
      `- E-Commerce SEO (Shopify & WooCommerce Schema Architecture)\n` +
      `- Programmatic Python Web Scraping & AI Automation Workflows\n` +
      `- Google Search Console, GA4 Event Tracking & Conversion Funnels\n\n` +
      `============================================================\n` +
      `PROFESSIONAL EXPERIENCE\n` +
      `============================================================\n` +
      experiences.map(e => 
        `ROLE: ${e.role} — ${e.company}\n` +
        `PERIOD: ${e.period} | LOCATION: ${e.location}\n` +
        `SUMMARY: ${e.description}\n` +
        `ACHIEVEMENTS:\n` +
        e.achievements.map(a => `  • ${a}`).join('\n') + `\n`
      ).join('\n') +
      `\n============================================================\n` +
      `EDUCATION & CERTIFICATIONS\n` +
      `============================================================\n` +
      educationList.map(edu => 
        `• ${edu.degree} — ${edu.institution} (${edu.period})\n  ${edu.details}\n`
      ).join('\n') +
      `\n• Professional Certification in Digital Marketing — STEP Institute of Art, Design & Management (IADM) (2023)\n`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Talha_Ahsan_360_Digital_Marketer_CV.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in overflow-y-auto">
      
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white border border-[#E9D8FD] rounded-3xl p-6 sm:p-10 shadow-2xl text-[#0F0728] purple-glow z-10 my-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#E9D8FD] pb-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#F8F4FF] border border-[#E9D8FD] rounded-2xl text-[#7C3AED]">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-extrabold text-[#0F0728]">{personalInfo.name}</h3>
              <p className="font-mono text-xs text-[#7C3AED] font-bold">360° Digital Marketer &amp; SEO Growth Strategist</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 text-[#6B5B8D] hover:text-[#0F0728] bg-[#F8F4FF] border border-[#E9D8FD] rounded-2xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contact Info Bar */}
        <div className="bg-[#F8F4FF] border border-[#E9D8FD] rounded-2xl p-4 mb-6 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs text-[#3B2B5C]">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#7C3AED]" />
            <span className="font-bold truncate">{personalInfo.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#059669]" />
            <span className="font-bold">{personalInfo.phoneNumber}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#D946EF]" />
            <span className="font-bold truncate">Lahore • Global Remote</span>
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="space-y-6 mb-8">
          <h4 className="font-heading text-lg font-bold text-[#0F0728] flex items-center gap-2 border-b border-[#E9D8FD] pb-2">
            <Briefcase className="w-5 h-5 text-[#7C3AED]" />
            <span>Professional Career History</span>
          </h4>

          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-[#F8F4FF] border border-[#E9D8FD] rounded-2xl p-5 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h5 className="font-heading text-base font-bold text-[#0F0728]">{exp.role}</h5>
                  <span className="font-mono text-xs text-[#7C3AED] font-bold bg-white px-2.5 py-0.5 rounded-md border border-[#E9D8FD]">
                    {exp.period}
                  </span>
                </div>
                <p className="font-mono text-xs text-[#059669] font-bold">{exp.company} • {exp.location}</p>
                <p className="font-sans text-xs sm:text-sm text-[#3B2B5C] font-medium leading-relaxed">{exp.description}</p>
                <ul className="space-y-1.5 pt-2">
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2 text-xs text-[#0F0728] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-4 mb-8">
          <h4 className="font-heading text-lg font-bold text-[#0F0728] flex items-center gap-2 border-b border-[#E9D8FD] pb-2">
            <GraduationCap className="w-5 h-5 text-[#7C3AED]" />
            <span>Education &amp; Credentials</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {educationList.map((edu, idx) => (
              <div key={idx} className="bg-[#F8F4FF] border border-[#E9D8FD] rounded-2xl p-4 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-sm font-bold text-[#0F0728]">{edu.degree}</span>
                </div>
                <p className="font-mono text-xs text-[#7C3AED] font-bold">{edu.institution}</p>
                <p className="font-mono text-[11px] text-[#6B5B8D]">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E9D8FD] pt-6">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#F8F4FF] hover:bg-[#F3E8FF] border border-[#E9D8FD] text-[#3B2B5C] font-mono text-xs font-bold rounded-xl"
          >
            Close Viewer
          </button>

          <button
            onClick={handleDownloadTxt}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-white font-mono text-xs font-bold rounded-xl shadow-lg shadow-[#7C3AED]/25"
          >
            <Download className="w-4 h-4" />
            <span>Download Official CV (.txt)</span>
          </button>
        </div>

      </div>
    </div>
  );
}
