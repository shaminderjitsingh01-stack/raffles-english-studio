"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email service (Mailchimp, Resend, etc.)
    console.log("Newsletter signup:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="relative py-28 bg-green-primary overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-green-light/10 rounded-full blur-[80px]" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-24 h-24 border-l border-t border-gold/10 m-8" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-gold/10 m-8" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">
            Stay Updated
          </p>
          <h2 className="font-serif text-cream text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Join Our Newsletter
          </h2>
          <div className="premium-divider mx-auto mb-6" />
          <p className="text-cream/50 text-base leading-relaxed mb-12 font-light">
            Get weekly English tips, exam strategies, and exclusive study
            resources delivered straight to your inbox.
          </p>
        </div>

        <div className="reveal">
          {submitted ? (
            <div className="bg-cream/10 backdrop-blur-sm border border-gold/20 rounded-sm p-10">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-cream font-serif text-xl font-semibold tracking-tight">
                Welcome aboard!
              </p>
              <p className="text-cream/40 text-sm mt-2 font-light">
                Check your inbox for a confirmation email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-5 py-4 rounded-sm bg-cream/[0.08] border border-cream/15 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/30 focus:ring-1 focus:ring-gold/20 transition-all text-sm font-light"
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-light text-green-darker font-medium px-8 py-4 rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,169,98,0.2)] text-sm tracking-wide whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-cream/20 text-[11px] mt-6 font-light tracking-wide">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
