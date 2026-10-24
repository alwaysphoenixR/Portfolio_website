import React from "react";
import {
  IconGithub,
  IconLinkedin,
  IconDocument,
  IconMail,
  IconTwitter,
} from "./Icons.jsx";

export default function Hero() {
  return (
    <section
      className="reveal-on-scroll is-visible w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl lg:py-16"
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-space-xl items-start">
        {/* Left column: Bio & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start gap-space-lg">
          <div className="inline-flex items-center gap-space-sm px-space-md py-1 rounded-full bg-surface-container text-on-surface-variant font-label-tag text-label-tag shadow-sm border border-outline-variant/30">
            <span
              className="w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: "rgb(0, 48, 207)" }}
            ></span>

            <span>BUILDER</span>
          </div>

          <div className="flex flex-col gap-space-sm">
            <p className="font-label-code text-label-code text-secondary tracking-widest uppercase">
              SOFTWARE ENGINEER / BACKEND / AI
            </p>
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-none">
              I'm{" "}
              <span style={{ color: "rgb(0, 48, 207)" }}>Rajveer Singh</span>, a
              CS major at NIT Raipur. I enjoy building scalable backend systems
              and AI-powered applications that solve real-world problems.
            </h1>
          </div>

          {/* Social Circle Action Buttons (44x44px) */}
          <div className="flex flex-wrap items-center gap-3 pt-space-xs">
            {/* GitHub */}
            <a
              aria-label="GitHub"
              className="w-11 h-11 rounded-full bg-surface-container-lowest text-on-surface flex items-center justify-center shadow-sm border border-outline-variant/20 hover:border-primary hover:bg-primary hover:text-on-primary transition-all duration-200 hover:-translate-y-0.5 active:scale-95 group"
              href="https://github.com/alwaysphoenixR/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconGithub className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
            </a>

            {/* LinkedIn */}
            <a
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full bg-surface-container-lowest text-on-surface flex items-center justify-center shadow-sm border border-outline-variant/20 hover:border-primary hover:bg-primary hover:text-on-primary transition-all duration-200 hover:-translate-y-0.5 active:scale-95 group"
              href="https://www.linkedin.com/in/rajveer-singh-844610293/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconLinkedin className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
            </a>

            {/* Resume / Substack Link */}
            <a
              aria-label="Substack or Resume"
              className="w-11 h-11 rounded-full bg-surface-container-lowest text-on-surface flex items-center justify-center shadow-sm border border-outline-variant/20 hover:border-primary hover:bg-primary hover:text-on-primary transition-all duration-200 hover:-translate-y-0.5 active:scale-95 group"
              href="https://drive.google.com/drive/folders/1dZTFEBB6Tx8SckTI1pyxZW36dSZzU8Wx?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              title="View Resume / Docs"
            >
              <IconDocument className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

            {/* Email */}
            <a
              aria-label="Email"
              className="w-11 h-11 rounded-full bg-surface-container-lowest text-on-surface flex items-center justify-center shadow-sm border border-outline-variant/20 hover:border-primary hover:bg-primary hover:text-on-primary transition-all duration-200 hover:-translate-y-0.5 active:scale-95 group"
              href="mailto:rajveersinghofficial.cse@gmail.com"
            >
              <IconMail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

            {/* X / Twitter */}
            <a
              aria-label="X / Twitter"
              className="w-11 h-11 rounded-full bg-surface-container-lowest text-on-surface flex items-center justify-center shadow-sm border border-outline-variant/20 hover:border-primary hover:bg-primary hover:text-on-primary transition-all duration-200 hover:-translate-y-0.5 active:scale-95 group"
              href="https://x.com/Rajveer_1208"
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconTwitter className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
            </a>

            <span className="h-6 w-px bg-outline-variant/30 mx-space-xs hidden sm:block"></span>
          </div>
        </div>

        {/* Right column: Ambient Float Avatar Card */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center w-full">
          <div
            className="ambient-float relative w-full max-w-sm aspect-square bg-surface-container-lowest rounded-xl p-space-md shadow-xl border border-outline-variant/20 flex flex-col items-center justify-center group overflow-hidden transition-all duration-300 hover:shadow-2xl"
            style={{
              borderColor: "rgba(0, 48, 207, 0.35)",
              boxShadow: "rgba(0, 48, 207, 0.18) 0px 10px 30px -10px",
            }}
          >
            <div
              className="relative w-4/5 h-4/5 flex items-center justify-center p-2 rounded-lg bg-surface-container-low transition-transform duration-300 group-hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(rgb(240, 244, 255) 0%, rgb(244, 242, 253) 100%)",
                border: "1px solid rgba(0, 48, 207, 0.15)",
              }}
            >
              <img
                alt="Rajveer Singh Shark Hat Illustration Avatar"
                className="w-full h-full object-contain rounded-lg transition-all duration-300 group-hover:scale-105"
                src="/avatar.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
