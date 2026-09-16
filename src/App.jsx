import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CvModal from './components/CvModal';
import SitemapModal from './components/SitemapModal';
import RobotsModal from './components/RobotsModal';
import HomePage from './pages/HomePage';
import LahoreSeoPage from './pages/LahoreSeoPage';
import PakistanSeoPage from './pages/PakistanSeoPage';
import CaseStudiesArchivePage from './pages/CaseStudiesArchivePage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import ServicesArchivePage from './pages/ServicesArchivePage';
import ServiceDetailPage from './pages/ServiceDetailPage';

export default function App() {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);
  const [isRobotsOpen, setIsRobotsOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-[#0F0728] font-sans antialiased selection:bg-[#7C3AED] selection:text-white pb-14 sm:pb-0">
        {/* Navigation Header */}
        <Navbar onOpenCv={() => setIsCvOpen(true)} />

        {/* Dynamic Route Pages */}
        <Routes>
          <Route path="/" element={<HomePage onOpenCv={() => setIsCvOpen(true)} />} />
          <Route path="/seo-expert-in-lahore" element={<LahoreSeoPage />} />
          <Route path="/seo-expert-in-pakistan" element={<PakistanSeoPage />} />
          <Route path="/case-studies" element={<CaseStudiesArchivePage />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />
          <Route path="/services" element={<ServicesArchivePage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
        </Routes>

        {/* Global Footer */}
        <Footer 
          onOpenSitemap={() => setIsSitemapOpen(true)} 
          onOpenRobots={() => setIsRobotsOpen(true)} 
        />

        {/* Interactive Modals */}
        <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
        <SitemapModal isOpen={isSitemapOpen} onClose={() => setIsSitemapOpen(false)} />
        <RobotsModal isOpen={isRobotsOpen} onClose={() => setIsRobotsOpen(false)} />
      </div>
    </BrowserRouter>
  );
}
