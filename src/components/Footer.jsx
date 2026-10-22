import React from 'react';
import { IconArrowUp } from './Icons.jsx';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col sm:flex-row items-center justify-between gap-space-md">

        {/* Left: Name / Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-space-xs sm:gap-space-md text-center sm:text-left">
          <span className="font-label-code text-label-code text-on-surface font-semibold">
            Rajveer Singh
          </span>
          {/* <span className="text-secondary font-label-tag text-label-tag hidden sm:inline">
            • Systems &amp; Software Engineering
          </span> */}
        </div>

        {/* Right: Back to Top */}
        <div className="flex items-center gap-space-md">
          <a
            onClick={scrollToTop}
            href="#"
            className="inline-flex items-center gap-space-xs font-label-code text-label-code text-on-surface-variant hover:text-on-surface transition-colors group cursor-pointer"
          >
            <span className="group-hover:-translate-y-0.5 transition-transform">Back to top</span>
            <IconArrowUp className="w-3.5 h-3.5 stroke-current group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </footer>
  );
}
