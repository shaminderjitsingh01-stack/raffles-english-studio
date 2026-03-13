"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar({ forceSolid = false }: { forceSolid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = forceSolid || scrolled;

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-green-dark/95 backdrop-blur-xl shadow-lg shadow-green-darker/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="The Raffles English Studio"
              width={52}
              height={52}
              className={`transition-all duration-300 ${solid ? "w-10 h-10" : "w-[52px] h-[52px]"}`}
            />
            <div className="hidden sm:block">
              <p className="text-cream/40 text-[9px] tracking-[0.3em] uppercase font-light leading-none">
                The
              </p>
              <p className="text-cream font-serif text-xl font-bold leading-tight tracking-tight group-hover:text-gold transition-colors duration-300">
                Raffles
              </p>
              <p className="text-cream/50 text-[9px] tracking-[0.18em] uppercase font-light leading-none mt-0.5">
                English Studio
              </p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream/50 hover:text-gold text-[13px] tracking-wide transition-colors duration-200 font-light"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/6589677685"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-green-darker font-medium text-[13px] px-5 py-2.5 rounded-sm transition-all duration-300 tracking-wide hover:shadow-[0_0_20px_rgba(196,169,98,0.2)]"
            >
              Book a Trial
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-cream/60 hover:text-cream p-2 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-cream/10">
            <div className="flex flex-col gap-3 pt-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-cream/60 hover:text-gold text-sm tracking-wide transition-colors font-light"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/6589677685"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold-light text-green-darker font-medium text-sm px-5 py-2.5 rounded-sm text-center mt-2 transition-all tracking-wide"
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
