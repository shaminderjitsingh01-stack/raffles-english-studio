"use client";

import { useRef } from "react";

const TIKTOK_VIDEOS = [
  { id: "7499520042980347138", title: "Learn Different Actions in English" },
  { id: "7509159229224275222", title: "How to Ask If Something is Free" },
  { id: "7488768737819102486", title: "Essential English Vocabulary" },
  { id: "7520249897388461334", title: "This, That, These or Those" },
  { id: "7496586729432878358", title: "Diet & Food Vocabulary" },
  { id: "7459026690954546454", title: "Think in English, Not Your Language" },
  { id: "7345484839761530145", title: "Everyday English Learning" },
  { id: "7239630775304408347", title: "Funny English Story" },
];

export default function TikTokCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="videos" className="relative py-28 bg-cream overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-primary/[0.02] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="reveal">
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">
              Learn on TikTok
            </p>
            <h2 className="font-serif text-green-primary text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              English Tips & Lessons
            </h2>
            <div className="premium-divider mt-4 mb-4" />
            <p className="text-text-dark/50 max-w-xl font-light text-sm">
              Quick English tips, exam hacks, and study motivation — bite-sized
              lessons you can watch anywhere.
            </p>
          </div>

          <div className="reveal flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-sm border border-green-primary/20 text-green-primary/50 hover:bg-green-primary/5 hover:text-green-primary hover:border-green-primary/30 transition-all flex items-center justify-center"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-sm border border-green-primary/20 text-green-primary/50 hover:bg-green-primary/5 hover:text-green-primary hover:border-green-primary/30 transition-all flex items-center justify-center"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable carousel */}
        <div
          ref={scrollRef}
          className="reveal flex gap-5 overflow-x-auto scroll-smooth pb-4 -mx-4 px-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {TIKTOK_VIDEOS.map((video) => (
            <div
              key={video.id}
              className="flex-shrink-0 w-[325px] snap-start"
            >
              <div className="relative rounded-sm overflow-hidden border border-cream-dark/30 hover:border-gold/30 transition-colors duration-300 bg-white shadow-sm hover:shadow-lg">
                <iframe
                  src={`https://www.tiktok.com/player/v1/${video.id}?description=0&music_info=0&rel=0&native_context_menu=0`}
                  className="w-[325px] h-[745px] border-0"
                  allowFullScreen
                  allow="encrypted-media"
                  title={video.title}
                  scrolling="no"
                  style={{ overflow: "hidden" }}
                />
              </div>
              <p className="text-text-dark/50 text-xs mt-3 font-light tracking-wide">
                {video.title}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-12">
          <a
            href="https://www.tiktok.com/@englishteacherclaire"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-green-primary/60 hover:text-gold border border-green-primary/15 hover:border-gold/30 px-6 py-3 rounded-sm transition-all duration-300 text-sm font-light tracking-wide"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.74a8.18 8.18 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.17z" />
            </svg>
            Follow for more lessons
          </a>
        </div>
      </div>
    </section>
  );
}
