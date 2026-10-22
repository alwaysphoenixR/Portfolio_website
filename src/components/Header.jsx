import React, { useState, useEffect, useRef } from 'react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'milestones-section', label: 'Experience & Achievements' },
  { id: 'skills', label: 'Skills & Stack' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isClickingRef = useRef(false);
  const clickTimeoutRef = useRef(null);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    isClickingRef.current = true;

    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    clickTimeoutRef.current = setTimeout(() => {
      isClickingRef.current = false;
    }, 850);

    if (id === 'about') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 70;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isClickingRef.current) return;

      // When at the very top of the page
      if (window.scrollY < 120) {
        setActiveSection('about');
        return;
      }

      // When scrolled near the bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection('contact');
        return;
      }

      // Check sections from bottom to top
      const sectionIds = ['about', 'projects', 'milestones-section', 'skills', 'contact'];
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-outline-variant/15">
      <div className="h-16 max-w-7xl mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">

        {/* Left: Status Pill */}
        <div className="flex items-center gap-space-md">
          <div
            className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-surface-container border font-label-tag text-label-tag text-on-surface-variant transition-all hover:border-outline-variant/60 shadow-sm cursor-pointer"
            style={{ borderColor: 'rgba(0, 48, 207, 0.25)' }}
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"></span>
            </span>
            Available for work
          </div>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-space-lg">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`font-body-sm transition-all pb-1 cursor-pointer ${
                  isActive
                    ? 'font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
                style={
                  isActive
                    ? { color: '#0030CF', borderBottom: '2px solid #0030CF' }
                    : { borderBottom: '2px solid transparent' }
                }
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Mobile Menu Toggle */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-8 h-8 rounded-full flex items-center justify-center border border-outline-variant/30 text-on-surface"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-margin-mobile py-4 bg-surface-container-lowest border-b border-outline-variant/20 shadow-lg flex flex-col gap-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`py-1 font-body-sm font-medium transition-colors ${
                  isActive ? 'font-semibold' : 'text-on-surface-variant'
                }`}
                style={isActive ? { color: '#0030CF' } : {}}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
