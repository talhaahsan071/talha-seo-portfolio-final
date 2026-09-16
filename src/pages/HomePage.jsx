import React from 'react';
import Hero from '../components/Hero';
import LogoStrip from '../components/LogoStrip';
import BusinessImpact from '../components/BusinessImpact';
import CaseStudies from '../components/CaseStudies';
import Skills from '../components/Skills';
import WhyChooseMe from '../components/WhyChooseMe';
import About from '../components/About';
import GoogleReviews from '../components/GoogleReviews';
import Journey from '../components/Journey';
import Testimonials from '../components/Testimonials';
import Certifications from '../components/Certifications';
import LiveSerpTool from '../components/LiveSerpTool';
import FaqSection from '../components/FaqSection';
import CtaBanner from '../components/CtaBanner';
import Contact from '../components/Contact';

export default function HomePage({ onOpenCv }) {
  return (
    <main>
      {/* 01. Hero Section (SEO Expert • E-Commerce, Technical & Local Growth) */}
      <Hero onOpenCv={onOpenCv} />

      {/* 02. Selected Brands Real Logo Marquee */}
      <LogoStrip />

      {/* 03. MEASURABLE BUSINESS IMPACT */}
      <BusinessImpact />

      {/* 04. Featured Real Case Studies & GSC Proof */}
      <CaseStudies />

      {/* 05. Core SEO Services That Bring You Customers & Sales */}
      <Skills />

      {/* 06. Why Choose Talha Ahsan Over Traditional Agencies */}
      <WhyChooseMe />

      {/* 07. ABOUT TALHA AHSAN */}
      <About />

      {/* 08. Google Business Profile Verified / Verified Client Reviews */}
      <GoogleReviews />

      {/* 09. GROWTH & CAREER EVOLUTION: My Journey */}
      <Journey />

      {/* 10. Trusted Across Diverse Commercial Industries */}
      <Testimonials />

      {/* 11. Verified Credentials & PBTE Lightbox */}
      <Certifications />

      {/* 12. Interactive Live SERP & SEO Diagnostic Simulator */}
      <LiveSerpTool />

      {/* 13. Simple Frequently Asked Questions */}
      <FaqSection />

      {/* 14. Scale Your Search Traffic & Revenue Action banner */}
      <CtaBanner />

      {/* 15. Let's Grow Your Organic Traffic, Rankings & Revenue (Contact & Calendly hub) */}
      <Contact />
    </main>
  );
}
