import React from 'react';
import { IconMail, IconExternalLink } from './Icons.jsx';

export default function Contact() {
  return (
    <section className="reveal-on-scroll is-visible w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl mb-space-xl" id="contact">
      <div className="bg-primary text-on-primary rounded-xl p-space-lg sm:p-space-xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg relative overflow-hidden border border-outline-variant/20">

        {/* Left Side Copy */}
        <div className="flex flex-col gap-space-xs z-10 max-w-xl">
          <span className="font-label-tag text-label-tag text-primary-fixed uppercase tracking-widest">
            Connect / Collaborate
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-primary">
            Looking to build or scale something impactful?
          </h2>
          <p className="font-body-md text-body-md text-primary-fixed-dim">
            Open to software engineering roles, hackathons, and collaborations.
          </p>
        </div>

        {/* Right Side Buttons */}
        <div className="flex flex-wrap items-center gap-space-sm z-10">
          <a
            className="px-space-lg py-3 rounded-full font-label-code text-label-code font-semibold shadow-md hover:scale-105 active:scale-95 transition-all text-white flex items-center gap-2"
            href="mailto:rajveersinghofficial.cse@gmail.com"
            style={{ backgroundColor: 'rgb(0, 48, 207)' }}
          >
            <IconMail className="w-4 h-4 stroke-white" />
            <span>Get in touch</span>
          </a>

          <a
            className="px-space-md py-3 rounded-full bg-surface-container-highest/20 text-on-primary font-label-code text-label-code hover:bg-surface-container-highest/30 active:scale-95 transition-all flex items-center gap-2 border border-outline-variant/30"
            href="https://drive.google.com/drive/folders/1dZTFEBB6Tx8SckTI1pyxZW36dSZzU8Wx?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconExternalLink className="w-4 h-4 stroke-current" />
            <span>View Resume</span>
          </a>
        </div>

        {/* Ambient Decorative Glow */}
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-surface-container-highest/10 rounded-full blur-2xl pointer-events-none"></div>
      </div>
    </section>
  );
}
