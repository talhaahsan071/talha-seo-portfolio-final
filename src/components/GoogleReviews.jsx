import React from 'react';
import { Star, MapPin, ExternalLink, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { googleReviewsData } from '../data/portfolioData';

export default function GoogleReviews() {
  return (
    <section id="google-reviews" className="py-14 sm:py-20 bg-white border-b border-[#E9D8FD]/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Official Google Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D8FD] mb-2.5 shadow-2xs">
              {/* Google 4-Color G Icon */}
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
              <span className="font-mono text-[11px] font-bold text-[#7C3AED] uppercase tracking-wider">
                Google Business Profile Verified
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#0F0728] tracking-tight mb-2">
              Verified Client Reviews on Google Maps
            </h2>
            <p className="text-[#3B2B5C] text-xs sm:text-base leading-relaxed">
              Real feedback from business founders and brand leads who rely on my search optimization systems.
            </p>
          </div>

          {/* Rating Summary Box */}
          <div className="flex items-center gap-3 bg-[#FAF8FF] border border-[#E9D8FD] rounded-2xl p-3.5 sm:p-4 shrink-0 shadow-2xs">
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F0728]">
              {googleReviewsData.averageRating}
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-mono text-[10px] text-[#6B5B8D] font-bold block mt-0.5">
                5-Star Rated &bull; Verified Profile
              </span>
            </div>
          </div>
        </div>

        {/* 3 Review Cards (Compact on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {googleReviewsData.reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-[#E9D8FD] hover:border-[#7C3AED] rounded-2xl p-4 sm:p-6 shadow-2xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header with Star Rating and Google Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    {rev.badge}
                  </span>
                </div>

                {/* Review Text - Compact */}
                <p className="text-xs sm:text-[13px] text-[#3B2B5C] leading-relaxed mb-4 italic font-normal">
                  "{rev.text}"
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-3 border-t border-[#E9D8FD]/70 flex items-center justify-between font-mono text-[11px]">
                <div>
                  <span className="font-heading font-bold text-[#0F0728] block text-xs">
                    {rev.author}
                  </span>
                  <span className="text-[#8C7DA8] text-[10px]">{rev.role}</span>
                </div>
                <span className="text-[10px] text-[#7C3AED] font-bold flex items-center gap-1">
                  Google Maps
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Action Bar to View or Write Google Review */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-[#FAF8FF] border border-[#E9D8FD]">
          <div className="flex items-center gap-2 font-mono text-xs text-[#3B2B5C]">
            <MapPin className="w-4 h-4 text-[#7C3AED]" />
            <span>Official Google Business Profile: <strong>Talha Ahsan — SEO Expert &amp; Consultant</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={googleReviewsData.gmbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-[#E9D8FD] hover:border-[#7C3AED] text-[#0F0728] font-mono text-xs font-bold transition-all shadow-2xs"
            >
              <span>Write a Review on Google</span>
              <ExternalLink className="w-3 h-3 text-[#7C3AED]" />
            </a>

            <a
              href={googleReviewsData.gmbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-mono text-xs font-bold transition-all shadow-2xs"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3 h-3 text-white" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
