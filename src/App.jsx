import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BusinessImpact from './components/BusinessImpact';
import About from './components/About';
import EntityBio from './components/EntityBio';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Tools from './components/Tools';
import CaseStudies from './components/CaseStudies';
import LiveSerpTool from './components/LiveSerpTool';
import Certifications from './components/Certifications';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CvModal from './components/CvModal';
import SitemapModal from './components/SitemapModal';
import RobotsModal from './components/RobotsModal';

export default function App() {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);
  const [isRobotsOpen, setIsRobotsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#0F0728] font-sans antialiased selection:bg-[#7C3AED] selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenCv={() => setIsCvOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 01. Signature SERP Hero */}
        <Hero onOpenCv={() => setIsCvOpen(true)} />

        {/* 02. Measurable Business Impact */}
        <BusinessImpact />

        {/* 03. About Section */}
        <About />

        {/* 04. Official Entity Profile & Knowledge Hub (Engineered for Google AI Overviews) */}
        <EntityBio />

        {/* 05. My Journey Timeline */}
        <Journey />

        {/* 06. Technical SEO & 360° Digital Marketing Skills */}
        <Skills />

        {/* 07. Tool Stack & Architecture */}
        <Tools />

        {/* 08. Verified Case Studies with GSC Proof */}
        <CaseStudies />

        {/* 09. Interactive Live SERP & SEO Diagnostic Simulator */}
        <LiveSerpTool />

        {/* 10. Certifications & Academic Credentials */}
        <Certifications />

        {/* 11. 5-Stage Methodology Process */}
        <Process />

        {/* 12. Regional & Enterprise Trust Brands (Infinite Marquee) */}
        <Testimonials />

        {/* 13. Frequently Asked Questions & AI Overviews Directory */}
        <FaqSection />

        {/* 14. Action Banner */}
        <CtaBanner />

        {/* 15. Contact Section & Direct Channels */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer 
        onOpenSitemap={() => setIsSitemapOpen(true)} 
        onOpenRobots={() => setIsRobotsOpen(true)} 
      />

      {/* Interactive Modals */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
      <SitemapModal isOpen={isSitemapOpen} onClose={() => setIsSitemapOpen(false)} />
      <RobotsModal isOpen={isRobotsOpen} onClose={() => setIsRobotsOpen(false)} />
    </div>
  );
}
