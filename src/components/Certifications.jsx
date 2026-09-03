import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, GraduationCap, CheckCircle2, ZoomIn, X, ShieldCheck, FileCheck, Sparkles } from 'lucide-react';
import { educationList, certificatesList } from '../data/portfolioData';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="credentials" className="py-24 bg-[#F8F4FF] border-t border-b border-[#E9D8FD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] mb-3 shadow-xs font-bold">
            <Award className="w-3.5 h-3.5 text-[#7C3AED]" />
            <span>CREDENTIALS &amp; ACADEMIC FOUNDATIONS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F0728] tracking-tight mb-4">
            Certifications &amp; Education
          </h2>

          <p className="font-sans text-[#3B2B5C] text-base sm:text-lg leading-relaxed font-medium">
            Formally trained in computer science logic, enterprise business strategy, and advanced 360° digital marketing execution.
          </p>
        </div>

        {/* 2-Column Grid: Left Certificate Feature | Right Education Roadmap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Certificate Showcase (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#0F0728] flex items-center gap-2.5">
              <FileCheck className="w-6 h-6 text-[#7C3AED]" />
              <span>Verified Professional Certification</span>
            </h3>

            {certificatesList.map((cert) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-[#E9D8FD] rounded-3xl p-6 sm:p-8 shadow-xl purple-glow space-y-5"
              >
                {/* Certificate Image Frame */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative rounded-2xl overflow-hidden border-2 border-[#E9D8FD] bg-[#0F0728] cursor-pointer group shadow-md"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-64 sm:h-72 object-contain bg-white transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0F0728]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                    <div className="px-4 py-2 rounded-xl bg-white text-[#7C3AED] font-mono text-xs font-bold shadow-xl flex items-center gap-2">
                      <ZoomIn className="w-4 h-4" />
                      <span>Click to Inspect Official Certificate</span>
                    </div>
                  </div>
                </div>

                {/* Certificate Details */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs text-[#059669] font-bold bg-[#ECFDF5] px-3 py-0.5 rounded-full border border-[#A7F3D0] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Verified Credential
                    </span>
                    <span className="font-mono text-xs text-[#6B5B8D] font-semibold">{cert.period}</span>
                  </div>

                  <h4 className="font-serif text-xl font-bold text-[#0F0728] mb-1">
                    {cert.title}
                  </h4>
                  <p className="font-mono text-xs text-[#7C3AED] font-bold mb-3">
                    {cert.issuer}
                  </p>

                  <p className="font-sans text-sm text-[#3B2B5C] leading-relaxed font-medium mb-4">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E9D8FD]">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#F8F4FF] border border-[#E9D8FD] text-[#3B2B5C] font-mono text-[10px] font-bold">
                        #{skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Formal Education Roadmap (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#0F0728] flex items-center gap-2.5">
              <GraduationCap className="w-6 h-6 text-[#7C3AED]" />
              <span>Academic Degree &amp; Education</span>
            </h3>

            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-white border border-[#E9D8FD] hover:border-[#7C3AED] p-6 rounded-2xl transition-all duration-300 shadow-xs hover:shadow-lg group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="font-serif text-lg font-bold text-[#0F0728] group-hover:text-[#7C3AED] transition-colors">
                      {edu.degree}
                    </h4>
                    <span className="font-mono text-xs text-[#7C3AED] bg-[#F8F4FF] px-2.5 py-0.5 rounded-lg border border-[#E9D8FD] font-bold">
                      {edu.period}
                    </span>
                  </div>

                  <p className="font-mono text-xs text-[#059669] font-bold mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#059669]" />
                    {edu.institution}
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-[#3B2B5C] leading-relaxed font-medium">
                    {edu.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Certificate Lightbox Inspection Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md">
            <div className="fixed inset-0" onClick={() => setSelectedCert(null)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-white border border-[#E9D8FD] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-[#0F0728]"
            >
              <div className="flex items-center justify-between border-b border-[#E9D8FD] pb-4 mb-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0F0728]">{selectedCert.title}</h3>
                  <p className="font-mono text-xs text-[#7C3AED] font-bold">{selectedCert.issuer}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 text-[#6B5B8D] hover:text-[#0F0728] bg-[#F8F4FF] border border-[#E9D8FD] rounded-xl"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden border border-[#E9D8FD] bg-white p-2 mb-4">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full max-h-[550px] object-contain mx-auto"
                />
              </div>

              <div className="flex items-center justify-between border-t border-[#E9D8FD] pt-4">
                <span className="font-mono text-xs text-[#059669] font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Authenticated Professional Certification
                </span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2 bg-[#7C3AED] text-white font-mono text-xs font-bold rounded-xl"
                >
                  Close Viewer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
