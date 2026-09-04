import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  Globe,
  Sparkles,
  Phone,
  ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    services: ['ecommerce-seo'],
    budget: '1k-3k',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleService = (id) => {
    setFormData(prev => {
      const exists = prev.services.includes(id);
      if (exists) {
        return { ...prev, services: prev.services.filter(s => s !== id) };
      } else {
        return { ...prev, services: [...prev.services, id] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch (err) {
        // ignore fallback
      }
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F8F4FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] mb-3 shadow-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
            <span>Direct Organic Growth Consultation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F0728] leading-tight">
            Let's Grow Your Organic Traffic, Rankings &amp; Revenue
          </h2>
          <p className="text-[#3B2B5C] text-base mt-3 font-medium">
            Reach out directly for an in-depth organic search roadmap, technical SEO audit, or ongoing monthly retainer. Expect a direct, senior-level response within 24 hours.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#F8F4FF] border border-[#E9D8FD] rounded-3xl p-6 sm:p-8 space-y-6 shadow-lg">
              <h3 className="font-serif text-xl font-bold text-[#0F0728]">Direct Contact Channels</h3>

              <div className="space-y-3.5">
                {/* Email */}
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E9D8FD] hover:border-[#7C3AED] transition-all group shadow-xs"
                >
                  <div className="p-3 rounded-xl bg-[#F3E8FF] border border-[#E9D8FD] text-[#7C3AED] group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#6B5B8D] font-semibold">Direct Email:</span>
                    <p className="font-serif text-base font-bold text-[#0F0728] group-hover:text-[#7C3AED] transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a 
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E9D8FD] hover:border-[#059669] transition-all group shadow-xs"
                >
                  <div className="p-3 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#6B5B8D] font-semibold">WhatsApp &amp; Phone:</span>
                    <p className="font-serif text-base font-bold text-[#0F0728] group-hover:text-[#059669] transition-colors">
                      {personalInfo.phoneNumber}
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a 
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E9D8FD] hover:border-[#6366F1] transition-all group shadow-xs"
                >
                  <div className="p-3 rounded-xl bg-[#EEF2FF] border border-[#C7D2FE] text-[#6366F1] group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#6B5B8D] font-semibold">LinkedIn Official:</span>
                    <p className="font-serif text-base font-bold text-[#0F0728] group-hover:text-[#6366F1] transition-colors">
                      linkedin.com/in/talhaahsanofficial
                    </p>
                  </div>
                </a>

                {/* Google Maps / GMB */}
                <a 
                  href={personalInfo.gmbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#E9D8FD] hover:border-[#D946EF] transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-[#FCE7F3] border border-[#FBCFE8] text-[#D946EF] group-hover:scale-105 transition-transform">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-[#6B5B8D] font-semibold">Google Maps / GMB:</span>
                      <p className="font-serif text-sm font-bold text-[#0F0728] group-hover:text-[#D946EF] transition-colors">
                        Verified Business Profile
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#6B5B8D] group-hover:text-[#D946EF] transition-colors" />
                </a>
              </div>

              {/* Global & Remote Availability Note */}
              <div className="border-t border-[#E9D8FD] pt-6 space-y-3 font-mono text-xs text-[#3B2B5C]">
                <div className="flex items-center gap-2 text-[#059669] font-bold">
                  <Globe className="w-4 h-4" />
                  <span>Global Remote &amp; UAE / GCC Ready</span>
                </div>
                <p className="text-[#6B5B8D] leading-relaxed font-medium">
                  Direct engagement for high-growth brands and enterprise clients across UAE, USA, UK, Pakistan, and worldwide.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Consultant Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#F8F4FF] border border-[#E9D8FD] rounded-3xl p-6 sm:p-8 shadow-lg">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center text-[#059669] mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0F0728]">Audit &amp; Proposal Request Received!</h3>
                <p className="font-sans text-sm text-[#3B2B5C] font-medium max-w-md mx-auto">
                  Thank you, <strong className="text-[#0F0728]">{formData.name}</strong>. Talha will review <strong className="text-[#7C3AED]">{formData.website || 'your website'}</strong> and respond directly to <strong className="text-[#7C3AED]">{formData.email}</strong> within 24 hours with an actionable roadmap.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', website: '', services: ['ecommerce-seo'], budget: '1k-3k', message: '' });
                  }}
                  className="px-5 py-2.5 bg-white border border-[#E9D8FD] rounded-xl font-mono text-xs font-bold text-[#3B2B5C] hover:text-[#7C3AED]"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0F0728]">Request an SEO Growth Proposal</h3>
                  <p className="text-xs font-mono text-[#6B5B8D] mt-1">Select your requirements and provide your website for custom analysis.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-[#3B2B5C] mb-2 font-bold">
                      Your Name / Brand *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 bg-white border border-[#E9D8FD] focus:border-[#7C3AED] rounded-xl font-sans text-sm text-[#0F0728] font-semibold placeholder-[#6B5B8D] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#3B2B5C] mb-2 font-bold">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@brand.com"
                      className="w-full px-4 py-3 bg-white border border-[#E9D8FD] focus:border-[#7C3AED] rounded-xl font-sans text-sm text-[#0F0728] font-semibold placeholder-[#6B5B8D] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-[#3B2B5C] mb-2 font-bold">
                      Website URL (Domain) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="e.g. yourstore.com"
                      className="w-full px-4 py-3 bg-white border border-[#E9D8FD] focus:border-[#7C3AED] rounded-xl font-sans text-sm text-[#0F0728] font-semibold placeholder-[#6B5B8D] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#3B2B5C] mb-2 font-bold">
                      Estimated Monthly Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#E9D8FD] focus:border-[#7C3AED] rounded-xl font-mono text-xs text-[#0F0728] font-bold focus:outline-none"
                    >
                      <option value="500-1k">$500 – $1,000 / mo</option>
                      <option value="1k-3k">$1,000 – $3,000 / mo</option>
                      <option value="3k-5k">$3,000 – $5,000 / mo</option>
                      <option value="enterprise">$5,000+ Enterprise</option>
                    </select>
                  </div>
                </div>

                {/* Service Multi-Select Checkboxes */}
                <div>
                  <label className="block font-mono text-xs text-[#3B2B5C] mb-2.5 font-bold">
                    Services Needed (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { id: 'ecommerce-seo', label: 'E-Commerce SEO & CRO' },
                      { id: 'technical-audit', label: 'Technical & Architecture Audit' },
                      { id: 'google-maps', label: 'Google Maps / Local 3-Pack' },
                      { id: 'ai-automation', label: 'AI Search & Programmatic SEO' },
                      { id: 'full-retainer', label: 'Dedicated Monthly Growth Retainer' },
                      { id: 'digital-marketing', label: '360° Digital Marketing & Ads' }
                    ].map((srv) => {
                      const isChecked = formData.services.includes(srv.id);
                      return (
                        <label 
                          key={srv.id}
                          className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border font-mono text-xs font-semibold cursor-pointer transition-all ${
                            isChecked 
                              ? 'bg-white border-[#7C3AED] text-[#7C3AED] shadow-xs' 
                              : 'bg-white/70 border-[#E9D8FD] text-[#3B2B5C] hover:border-[#C4B5FD]'
                          }`}
                        >
                          <input 
                            type="checkbox"
                            className="accent-[#7C3AED] w-4 h-4 rounded"
                            checked={isChecked}
                            onChange={() => toggleService(srv.id)}
                          />
                          <span>{srv.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#3B2B5C] mb-2 font-bold">
                    Current Bottlenecks &amp; Targets *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="E.g. We want to scale organic revenue in the UAE, recover lost keyword rankings, or eliminate indexing errors..."
                    className="w-full px-4 py-3 bg-white border border-[#E9D8FD] focus:border-[#7C3AED] rounded-xl font-sans text-sm text-[#0F0728] font-semibold placeholder-[#6B5B8D] focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#D946EF] text-white font-mono text-sm font-bold rounded-xl hover:opacity-95 shadow-xl shadow-[#7C3AED]/25 transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <span>Transmitting Parameters...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request SEO Growth Proposal &amp; Audit</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
