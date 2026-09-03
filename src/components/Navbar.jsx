import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
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
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Tools', href: '#tools' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-[#E9D8FD] py-3.5 shadow-sm' 
        : 'bg-white/70 backdrop-blur-sm py-5 border-b border-[#E9D8FD]/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Wordmark */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#D946EF] p-0.5 shadow-md shadow-[#7C3AED]/20 transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center font-serif text-lg font-bold text-[#7C3AED]">
              T
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl font-bold tracking-tight text-[#0F0728] group-hover:text-[#7C3AED] transition-colors">
                Talha Ahsan
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-[#F3E8FF] text-[#7C3AED] border border-[#E9D8FD]">
                360° GROWTH
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#6B5B8D] tracking-wide">Digital Marketer &amp; SEO Specialist</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#F8F4FF] border border-[#E9D8FD] rounded-full px-4 py-1.5 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 font-mono text-xs text-[#3B2B5C] font-semibold hover:text-[#7C3AED] hover:bg-white rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCv}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono text-[#3B2B5C] font-semibold hover:text-[#7C3AED] bg-[#F8F4FF] hover:bg-white border border-[#E9D8FD] rounded-xl transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-[#7C3AED]" />
            CV
          </button>
          
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold font-mono text-white rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#D946EF] hover:opacity-95 shadow-lg shadow-[#7C3AED]/25 transition-all duration-200 hover:shadow-[#7C3AED]/40"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenCv}
            className="p-2 text-xs font-mono font-bold text-[#7C3AED] bg-[#F8F4FF] border border-[#E9D8FD] rounded-xl"
            title="View CV"
          >
            CV
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-[#3B2B5C] hover:text-[#7C3AED] bg-[#F8F4FF] border border-[#E9D8FD] rounded-xl transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E9D8FD] px-4 pt-4 pb-6 space-y-3 animate-fade-in shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 font-mono text-sm text-[#3B2B5C] font-semibold hover:text-[#7C3AED] hover:bg-[#F8F4FF] rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E9D8FD] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 font-mono text-xs font-bold text-[#3B2B5C] bg-[#F8F4FF] border border-[#E9D8FD] rounded-xl"
            >
              <FileText className="w-4 h-4 text-[#7C3AED]" />
              View &amp; Download CV
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 font-mono text-xs font-bold text-white bg-gradient-to-r from-[#7C3AED] to-[#D946EF] rounded-xl shadow-lg shadow-[#7C3AED]/20"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
