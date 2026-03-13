"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#courses", label: "Courses" },
    { href: "#packages", label: "Packages" },
    { href: "#videos", label: "Videos" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-green-dark/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="The Raffles English Studio"
              width={48}
              height={48}
              className="rounded-sm"
            />
            <div className="hidden sm:block">
              <p className="text-cream text-xs tracking-[0.2em] uppercase">
                The
              </p>
              <p className="text-cream font-serif text-lg font-bold leading-tight">
                Raffles
              </p>
              <p className="text-cream/80 text-[10px] tracking-[0.15em] uppercase">
                English Studio
              </p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream/80 hover:text-gold text-sm tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/6589677685"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-green-dark font-semibold text-sm px-5 py-2.5 rounded transition-colors duration-200"
            >
              Book a Trial
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-cream p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-cream/20">
            <div className="flex flex-col gap-3 pt-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-cream/80 hover:text-gold text-sm tracking-wide transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/6589677685"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold-light text-green-dark font-semibold text-sm px-5 py-2.5 rounded text-center mt-2 transition-colors"
              >
                Book a Trial
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
