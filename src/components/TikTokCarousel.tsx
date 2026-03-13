"use client";

import { useState } from "react";

// Replace these with actual TikTok video IDs from @rafflesenglishstudio
const TIKTOK_VIDEOS = [
  {
    id: "PLACEHOLDER_1",
    title: "O Level Essay Tips",
  },
  {
    id: "PLACEHOLDER_2",
    title: "IELTS Speaking Practice",
  },
  {
    id: "PLACEHOLDER_3",
    title: "A Level GP Framework",
  },
  {
    id: "PLACEHOLDER_4",
    title: "Common Grammar Mistakes",
  },
  {
    id: "PLACEHOLDER_5",
    title: "Vocabulary Building",
  },
  {
    id: "PLACEHOLDER_6",
    title: "Summary Writing Hack",
  },
];

export default function TikTokCarousel() {
  const [scrollPos, setScrollPos] = useState(0);
  const cardWidth = 320;
  const maxScroll = Math.max(0, (TIKTOK_VIDEOS.length - 3) * cardWidth);

  const scroll = (dir: "left" | "right") => {
    setScrollPos((prev) => {
      const next = dir === "left" ? prev - cardWidth : prev + cardWidth;
      return Math.max(0, Math.min(next, maxScroll));
    });
  };

  return (
    <section id="videos" className="py-24 bg-green-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-gold tracking-[0.2em] uppercase text-sm mb-3">
              Follow Us on TikTok
            </p>
            <h2 className="font-serif text-cream text-3xl sm:text-4xl md:text-5xl font-bold">
              Learn on the Go
            </h2>
            <p className="text-cream/50 mt-3 max-w-xl">
              Quick English tips, exam hacks, and study motivation — follow us
              for daily content.
            </p>
          </div>
          <div className="hidden sm:flex gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={scrollPos === 0}
              className="w-12 h-12 rounded-full border border-cream/20 text-cream hover:bg-cream/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={scrollPos >= maxScroll}
              className="w-12 h-12 rounded-full border border-cream/20 text-cream hover:bg-cream/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${scrollPos}px)` }}
          >
            {TIKTOK_VIDEOS.map((video, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[280px] sm:w-[300px] group"
              >
                {/* TikTok placeholder — replace src with actual TikTok embed */}
                <div className="relative bg-green-primary rounded-xl overflow-hidden aspect-[9/16] border border-cream/10 group-hover:border-gold/30 transition-colors">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-cream/40 p-6 text-center">
                    {/* TikTok icon */}
                    <svg className="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.74a8.18 8.18 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.17z" />
                    </svg>
                    <p className="font-serif text-lg text-cream/60">{video.title}</p>
                    <p className="text-xs mt-2 text-cream/30">
                      Replace with TikTok embed
                    </p>
                  </div>
                </div>
                <p className="text-cream/70 text-sm mt-3 font-medium">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile scroll buttons */}
        <div className="flex sm:hidden gap-3 justify-center mt-8">
          <button
            onClick={() => scroll("left")}
            disabled={scrollPos === 0}
            className="w-10 h-10 rounded-full border border-cream/20 text-cream hover:bg-cream/10 disabled:opacity-30 transition-all flex items-center justify-center"
            aria-label="Scroll left"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={scrollPos >= maxScroll}
            className="w-10 h-10 rounded-full border border-cream/20 text-cream hover:bg-cream/10 disabled:opacity-30 transition-all flex items-center justify-center"
            aria-label="Scroll right"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.tiktok.com/@rafflesenglishstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cream/10 hover:bg-cream/20 text-cream border border-cream/20 px-6 py-3 rounded-full transition-all duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.74a8.18 8.18 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.17z" />
            </svg>
            Follow @rafflesenglishstudio
          </a>
        </div>
      </div>
    </section>
  );
}
