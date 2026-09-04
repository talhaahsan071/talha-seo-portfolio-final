import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Search } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenCv }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Solutions', href: '#skills' },
    { name: 'Why Me', href: '#tools' },
    { name: 'AI Lab', href: '#ai-lab' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Insights', href: '#insights' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-[#E9D8FD] py-3 shadow-sm' 
        : 'bg-white/80 backdrop-blur-sm py-4 border-b border-[#E9D8FD]/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Wordmark prioritizing SEO Expert */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#D946EF] p-0.5 shadow-md shadow-[#7C3AED]/20 transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center font-heading text-lg font-bold text-[#7C3AED]">
              T
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-heading text-xl font-bold tracking-tight text-[#0F0728] group-hover:text-[#7C3AED] transition-colors">
                Talha Ahsan
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-[#F3E8FF] text-[#7C3AED] border border-[#E9D8FD]">
                SEO EXPERT
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#6B5B8D] tracking-wide">SEO Specialist &bull; 360° Digital Growth</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-xs font-bold text-[#3B2B5C] hover:text-[#7C3AED] transition-colors tracking-wide py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA / Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCv}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-[#F8F4FF] border border-[#E9D8FD] text-[#0F0728] font-mono text-xs font-bold transition-all hover:scale-105 shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-[#7C3AED]" />
            <span>CV</span>
          </button>

          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-white font-mono text-xs font-bold shadow-md shadow-[#7C3AED]/20 hover:opacity-90 transition-all hover:scale-105"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenCv}
            className="p-2 rounded-xl bg-white border border-[#E9D8FD] text-[#7C3AED] shadow-xs sm:hidden"
            aria-label="View CV"
          >
            <FileText className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#F8F4FF] border border-[#E9D8FD] text-[#0F0728] hover:text-[#7C3AED] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E9D8FD] px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono text-sm font-bold text-[#0F0728] hover:text-[#7C3AED] py-2 px-3 rounded-lg hover:bg-[#F8F4FF] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E9D8FD] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#F8F4FF] border border-[#E9D8FD] text-[#0F0728] font-mono text-xs font-bold"
            >
              <FileText className="w-4 h-4 text-[#7C3AED]" />
              <span>Download / Inspect CV</span>
            </button>
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-white font-mono text-xs font-bold shadow-sm"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
