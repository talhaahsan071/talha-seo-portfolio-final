import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { trustBrands } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F8F4FF] border-t border-b border-[#E9D8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] mb-3 shadow-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
            <span>09 // Client Portfolio &amp; Agency Footprint</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#0F0728]">
            Trusted Across Diverse Commercial Industries
          </h2>
          <p className="text-[#3B2B5C] text-sm mt-2 font-medium">
            Delivering measurable search performance and revenue growth for retail, legal, technology, and service brands.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {trustBrands.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="bg-white border border-[#E9D8FD] hover:border-[#7C3AED] p-5 rounded-2xl transition-all duration-300 hover:shadow-md text-center flex flex-col justify-between group shadow-2xs"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F8F4FF] border border-[#E9D8FD] flex items-center justify-center text-[#7C3AED] mx-auto mb-3 group-hover:scale-105 transition-transform">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-sm font-bold text-[#0F0728] mb-1">
                  {brand.name}
                </h3>
                <p className="font-mono text-[11px] text-[#7C3AED] font-bold mb-2">
                  {brand.focus}
                </p>
              </div>

              <div className="pt-2 border-t border-[#E9D8FD] flex items-center justify-center gap-1 font-mono text-[10px] text-[#6B5B8D] font-semibold">
                <MapPin className="w-3 h-3 text-[#059669]" />
                <span>{brand.location}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
