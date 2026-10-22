import React, { useRef, useState, useEffect } from 'react';
import { IconArrowBack, IconArrowForward } from './Icons.jsx';

const skillCategories = [
  {
    num: '01',
    title: 'Core Languages',
    // description: 'Primary focus on high-efficiency algorithmic implementation, memory models, and enterprise backend engineering.',
    skills: ['C++', 'Python', 'JavaScript', 'TypeScript', 'Go'],
  },
  {
    num: '02',
    title: 'Frameworks & Libs',
    // description: 'Modular reactive client applications combined with lightning-fast RESTful and event-stream APIs.',
    skills: ['React.js', 'Express.js', 'FastAPI', 'Node.js', 'Langchain'],
  },
  {
    num: '03',
    title: 'Tools & Databases',
    // description: 'Reliable persistence models, caching topologies, containerization workflows, and versioning pipelines.',
    skills: ['PostgreSQL', 'MongoDB', 'Vector DBs', 'Docker', 'Git'],
  }
  // {
  //   num: '04',
  //   title: 'Tools & Databases',
  //   // description: 'Reliable persistence models, caching topologies, containerization workflows, and versioning pipelines.',
  //   skills: ['PostgreSQL', 'MongoDB', 'Vector DBs', 'Docker', 'Git'],
  // }
];

export default function Skills() {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateStatus = () => {
    const track = trackRef.current;
    if (!track) return;
    setCanPrev(track.scrollLeft > 10);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 10);
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
    const firstSlide = track.firstElementChild;
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

  return (
    <section className="reveal-on-scroll is-visible w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl" id="skills">
      <div className="flex flex-col gap-space-lg">

        {/* Header & Controls */}
        <div className="flex items-center justify-between">
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-semibold">
            Skills &amp; Technical Capabilities
          </h2>
          <div className="flex items-center gap-1.5">
            <button
              aria-label="Previous Skills"
              onClick={handlePrev}
              disabled={!canPrev}
              className="w-9 h-9 rounded-full bg-surface-container-lowest border border-outline-variant/30 text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <IconArrowBack className="w-4 h-4" />
            </button>
            <button
              aria-label="Next Skills"
              onClick={handleNext}
              disabled={!canNext}
              className="w-9 h-9 rounded-full bg-surface-container-lowest border border-outline-variant/30 text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <IconArrowForward className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Track */}
        <div
          ref={trackRef}
          className="flex gap-gutter overflow-x-auto snap-x snap-mandatory pb-4 pt-1 no-scrollbar scroll-smooth -mx-2 px-2"
        >
          {skillCategories.map((cat) => (
            <div
              key={cat.num}
              className="interactive-card snap-start shrink-0 w-[88vw] sm:w-[380px] lg:w-[400px] bg-surface-container-lowest p-space-lg rounded-DEFAULT shadow-sm border border-outline-variant/20 flex flex-col gap-space-md group cursor-default"
            >
              <div className="flex items-center gap-space-sm">
                <span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-label-code text-label-code text-on-surface font-bold group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  {cat.num}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {cat.title}
                </h3>
              </div>

              <p className="font-body-sm text-body-sm text-secondary">
                {cat.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-space-xs">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-DEFAULT bg-surface-container text-on-surface font-label-code text-label-code hover:bg-surface-container-high transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgb(0, 48, 207)' }}></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
