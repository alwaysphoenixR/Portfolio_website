import React, { useRef, useState, useEffect } from 'react';
import { IconArrowBack, IconArrowForward } from './Icons.jsx';

const milestones = [
  {
    category: 'Problem Solving',
    title: 'Data Structures & Algorithms',
    description: 'Solved 800+ coding problems across multiple platforms, with a strong focus on algorithms, data structures, and problem-solving.',
    stat: (
      <div className="w-full font-label-code text-[11px] leading-tight text-secondary flex flex-col gap-1">
        {/* <div className="flex justify-between items-center text-[10px]">
          <span>PEAK_RATING</span>
          <span className="text-on-surface font-semibold">2062 (Top 1.8%)</span>
        </div> */}
        {/* <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
          <div className="h-full rounded-full w-4/5" style={{ backgroundColor: 'rgb(0, 48, 207)' }}></div>
        </div> */}
      </div>
    ),
    tags: ['Algorithms', 'Data Structures'],
  },
  {
    category: 'Hackathon',
    title: 'Runner-up CodeUtsava 9.0',
    description: 'National-level annual hackathon organized by NIT Raipur featuring multidisciplinary software challenges.',
    tags: ['NIT Raipur', 'National Level'],
  },
  {
    category: 'Engineering Challenge',
    badge: 'SEMIFINALIST',
    title: '2x Semifinalist Flipkart GRiD',
    description: 'Qualified for Round 2 of Flipkart GRiD 7.0 and advanced to Round 3 of Flipkart GRiD 8.0, competing among 160,000+ participants nationwide.',
    tags: ['Flipkart GRiD'],
  },
];

export default function Milestones() {
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
    <section className="reveal-on-scroll is-visible w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl" id="milestones-section">
      <div className="flex flex-col gap-space-lg">

        {/* Header & Controls */}
        <div className="flex items-center justify-between">
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-semibold">
            Credentials &amp; Key Milestones
          </h2>
          <div className="flex items-center gap-1.5">
            <button
              aria-label="Previous Milestones"
              onClick={handlePrev}
              disabled={!canPrev}
              className="w-9 h-9 rounded-full bg-surface-container-lowest border border-outline-variant/30 text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <IconArrowBack className="w-4 h-4" />
            </button>
            <button
              aria-label="Next Milestones"
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
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="interactive-card snap-start shrink-0 w-[88vw] sm:w-[380px] lg:w-[400px] bg-surface-container-lowest p-space-lg rounded-DEFAULT shadow-sm border border-outline-variant/20 flex flex-col justify-between group cursor-default"
            >
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-surface text-on-surface border border-outline-variant/20">
                    {item.category}
                  </span>
                  {item.badge && (
                    <span className="font-label-tag text-label-tag text-secondary uppercase tracking-widest font-semibold">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center gap-2">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:translate-x-1 transition-transform">
                      {item.title}
                    </h3>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgb(0, 48, 207)' }}></span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-space-lg flex flex-col gap-space-md">
                {item.stat}

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-label-tag text-label-tag px-2 py-0.5 rounded-full bg-surface-container text-on-surface border border-outline-variant/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
