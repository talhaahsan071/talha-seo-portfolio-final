import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BusinessImpact from './components/BusinessImpact';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Tools from './components/Tools';
import CaseStudies from './components/CaseStudies';
import LiveSerpTool from './components/LiveSerpTool';
import Certifications from './components/Certifications';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
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

        {/* 02. Measurable Business Impact (Reference 3) */}
        <BusinessImpact />

        {/* 03. About Section */}
        <About />

        {/* 04. My Journey Timeline (Reference 1 & 2) */}
        <Journey />

        {/* 05. 360° Digital Marketing & Skills */}
        <Skills />

        {/* 06. Tool Stack & Architecture */}
        <Tools />

        {/* 07. Verified Case Studies with GSC Proof */}
        <CaseStudies />

        {/* 08. Interactive Live SERP & SEO Diagnostic Simulator */}
        <LiveSerpTool />

        {/* 09. Certifications & Academic Credentials */}
        <Certifications />

        {/* 10. 5-Stage Methodology Process */}
        <Process />

        {/* 11. Regional & Enterprise Trust Brands */}
        <Testimonials />

        {/* 12. Gradient Action Banner */}
        <CtaBanner />

        {/* 13. Contact Section & Direct Channels */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer 
        onOpenSitemap={() => setIsSitemapOpen(true)} 
        onOpenRobots={() => setIsRobotsOpen(true)} 
      />

      {/* Interactive Modals */}
      <CvModal 
        isOpen={isCvOpen} 
        onClose={() => setIsCvOpen(false)} 
      />

      <SitemapModal 
        isOpen={isSitemapOpen} 
        onClose={() => setIsSitemapOpen(false)} 
      />

      <RobotsModal 
        isOpen={isRobotsOpen} 
        onClose={() => setIsRobotsOpen(false)} 
      />
    </div>
  );
}
