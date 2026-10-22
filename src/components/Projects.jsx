import React, { useRef, useState, useEffect } from 'react';
import { IconArrowBack, IconArrowForward, IconCode, IconPlay, IconSpecs, IconExternalLink } from './Icons.jsx';

const projects = [
  {
    id: 'PRJ_01',
    title: 'Friday',
    category: 'AI systems / RAG / Backend',
    description: 'Friday is a low-latency event-driven asynchronous I/O networking daemon built in modern C++ with customized thread pooling and lock-free ring buffers.',
    tags: ['Qdrant', 'Express.js', 'Vector Embeddings'],
    sourceUrl: 'https://github.com/alwaysphoenixR/fridayyy',
    demoUrl: 'https://friday-nu-five.vercel.app/',
    demoLabel: 'live demo',
    demoIcon: <IconPlay className="w-3.5 h-3.5 fill-current" />,
    // statDisplay: (
    //   <div className="w-full font-label-code text-[11px] leading-tight text-secondary z-10 flex flex-col gap-1">
    //     <div className="flex justify-between items-center text-[10px]">
    //       <span>EPOLL_CTL_ADD</span>
    //       <span className="text-on-surface font-semibold">1.4M req/sec</span>
    //     </div>
    //     <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
    //       <div className="h-full rounded-full w-4/5" style={{ backgroundColor: 'rgb(0, 48, 207)' }}></div>
    //     </div>
    //   </div>
    // ),
  },
  {
    id: 'PRJ_02',
    title: 'FeedbackIQ',
    category: 'ML / NLP / DATA ANALYTICS',
    description: 'Fault-tolerant distributed transactional datastore built on the Raft consensus algorithm featuring log compaction, automatic leader election, and linearizable reads.',
    tags: ['Sentiment Analysis', 'Machine Learning', 'LLMs', 'Express.js', 'FastApi'],
    sourceUrl: 'https://github.com/alwaysphoenixR/FEEDBACKIQ',
    demoUrl: 'https://feedbackiq-frontend.vercel.app/',
    demoLabel: 'live demo',
    demoIcon: <IconPlay className="w-3.5 h-3.5 fill-current" />,
    // demoIcon: <IconSpecs className="w-3.5 h-3.5 stroke-current" />,
    // statDisplay: (
    //   <div className="w-full font-label-code text-[11px] text-secondary space-y-1 z-10">
    //     <div className="flex justify-between items-center">
    //       <span className="text-xs">CONSENSUS_TERM</span>
    //       <span className="text-on-surface font-mono">Term #412 [LEADER]</span>
    //     </div>
    //     <div className="flex justify-between items-center text-[10px]">
    //       <span>HEARTBEAT_INT</span>
    //       <span className="text-on-surface font-mono">50ms / quorum</span>
    //     </div>
    //     <div className="flex justify-between items-center text-[10px]">
    //       <span>WAL_COMPACT</span>
    //       <span className="text-on-surface font-mono">Enabled (ZSTD)</span>
    //     </div>
    //   </div>
    // ),
  },
  // {
  //   id: 'PRJ_012',
  //   title: 'Synapse Visualizer',
  //   category: 'React / FastAPI',
  //   description: 'High-performance interactive graph analysis suite implementing dynamic shortest-path, flow networks, and custom A* heuristics with real-time frame rates.',
  //   tags: ['React.js', 'FastAPI', 'Canvas API'],
  //   sourceUrl: 'https://github.com',
  //   demoUrl: 'https://github.com',
  //   demoLabel: 'live demo',
  //   demoIcon: <IconExternalLink className="w-3.5 h-3.5 stroke-current" />,
  //   // statDisplay: (
  //   //   <div className="w-full flex flex-col justify-between h-full z-10">
  //   //     <div className="w-full flex items-center justify-center py-1">
  //   //       <svg className="w-28 h-16 text-on-surface group-hover:scale-105 transition-transform duration-300" fill="none" viewBox="0 0 120 70">
  //   //         <path d="M10 60 C 30 10, 60 50, 90 20 L 110 35" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
  //   //         <circle cx="10" cy="60" fill="currentColor" r="4" />
  //   //         <circle cx="60" cy="50" fill="currentColor" r="4" />
  //   //         <circle cx="90" cy="20" fill="currentColor" r="4" />
  //   //         <circle cx="110" cy="35" fill="currentColor" r="4" />
  //   //       </svg>
  //   //     </div>
  //   //     <div className="w-full flex justify-between font-label-tag text-[10px] text-secondary">
  //   //       <span>Nodes: 24,000</span>
  //   //       <span>Frame Rate: 60 FPS</span>
  //   //     </div>
  //   //   </div>
  //   // ),
  // },
];

export default function Projects() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateStatus = () => {
    const track = trackRef.current;
    if (!track) return;
    const scrollPos = track.scrollLeft;
    const slides = track.querySelectorAll('.project-slide');

    let closestIdx = 0;
    let minDistance = Infinity;

    slides.forEach((slide, idx) => {
      const dist = Math.abs(slide.offsetLeft - track.offsetLeft - scrollPos);
      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = idx;
      }
    });

    setActiveIndex(closestIdx);
    setCanPrev(scrollPos > 10);
    setCanNext(scrollPos + track.clientWidth < track.scrollWidth - 10);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.addEventListener('scroll', updateStatus, { passive: true });
      updateStatus();
    }
    return () => {
      if (track) track.removeEventListener('scroll', updateStatus);
    };
  }, []);

  const getScrollDist = () => {
    const track = trackRef.current;
    if (!track) return 380;
    const firstSlide = track.querySelector('.project-slide');
    return firstSlide ? firstSlide.getBoundingClientRect().width + 24 : 380;
  };

  const handlePrev = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -getScrollDist(), behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: getScrollDist(), behavior: 'smooth' });
    }
  };

  const scrollToSlide = (idx) => {
    const track = trackRef.current;
    if (!track) return;
    const slides = track.querySelectorAll('.project-slide');
    if (slides[idx]) {
      slides[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  return (
    <section className="reveal-on-scroll is-visible w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl" id="projects">
      <div className="flex flex-col gap-space-lg">

        {/* Header & Controls */}
        <div className="flex items-center justify-between">
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-semibold">
            Featured Projects
          </h2>
          <div className="flex items-center gap-1.5">
            <button
              aria-label="Previous Project"
              onClick={handlePrev}
              disabled={!canPrev}
              className="w-9 h-9 rounded-full bg-surface-container-lowest border border-outline-variant/30 text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <IconArrowBack className="w-4 h-4" />
            </button>
            <button
              aria-label="Next Project"
              onClick={handleNext}
              disabled={!canNext}
              className="w-9 h-9 rounded-full bg-surface-container-lowest border border-outline-variant/30 text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <IconArrowForward className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div
          ref={trackRef}
          className="flex gap-gutter overflow-x-auto snap-x snap-mandatory pb-4 pt-1 no-scrollbar scroll-smooth -mx-2 px-2"
        >
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="project-slide interactive-card snap-start shrink-0 w-[88vw] sm:w-[380px] lg:w-[400px] bg-surface-container-lowest rounded-lg p-space-lg shadow-sm border border-outline-variant/20 flex flex-col justify-between group cursor-default"
            >
              <div className="flex flex-col gap-space-md">

                {/* Visual Top Preview Box */}
                <div className="w-full h-44 rounded-DEFAULT bg-surface-container-low flex flex-col justify-between p-space-md overflow-hidden relative border border-outline-variant/10 group-hover:bg-surface-container transition-colors">
                  <div className="flex items-center justify-between z-10">
                    <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-surface text-on-surface border border-outline-variant/20">
                      {proj.category}
                    </span>
                    <span className="font-label-tag text-label-tag text-secondary uppercase tracking-widest font-semibold">
                      {proj.id}
                    </span>
                  </div>

                  {proj.statDisplay}

                  <div className="absolute bottom-0 right-0 w-28 h-28 bg-surface-container-high/40 rounded-full translate-x-6 translate-y-6 group-hover:scale-125 transition-transform duration-500"></div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center gap-2">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:translate-x-1 transition-transform">
                      {proj.title}
                    </h3>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgb(0, 48, 207)' }}></span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Bottom Tags & Redirect Links */}
              <div className="pt-space-lg flex flex-col gap-space-md">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-label-tag text-label-tag px-2 py-0.5 rounded-full bg-surface-container text-on-surface border border-outline-variant/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-space-xs border-t border-outline-variant/15">
                  <a
                    className="inline-flex items-center gap-1.5 font-label-code text-label-code text-on-surface hover:text-brand-blue transition-colors group/link"
                    href={proj.sourceUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <IconCode className="w-3.5 h-3.5 stroke-current group-hover/link:rotate-12 transition-transform" />
                    <span>source</span>
                  </a>

                  <a
                    className="inline-flex items-center gap-1.5 font-label-code text-label-code text-on-surface hover:text-brand-blue transition-colors group/link"
                    href={proj.demoUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {proj.demoIcon}
                    <span>{proj.demoLabel}</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => scrollToSlide(idx)}
                className={`transition-all duration-300 ${idx === activeIndex
                  ? 'h-1.5 w-6 rounded-full'
                  : 'h-1.5 w-2 rounded-full bg-outline-variant/60 hover:bg-outline'
                  }`}
                style={idx === activeIndex ? { backgroundColor: 'rgb(0, 48, 207)' } : {}}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
