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
    <section className="py-24 bg-green-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-light/10 rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-dark/20 rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gold tracking-[0.2em] uppercase text-sm mb-3">
          Stay Updated
        </p>
        <h2 className="font-serif text-cream text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Join Our Newsletter
        </h2>
        <p className="text-cream/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Get weekly English tips, exam strategies, and exclusive study
          resources delivered straight to your inbox.
        </p>

        {submitted ? (
          <div className="bg-cream/10 backdrop-blur-sm border border-gold/30 rounded-xl p-8">
            <svg
              className="w-12 h-12 text-gold mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="text-cream font-serif text-xl font-semibold">
              Welcome aboard!
            </p>
            <p className="text-cream/60 text-sm mt-2">
              Check your inbox for a confirmation email.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-5 py-4 rounded-lg bg-cream/10 border border-cream/20 text-cream placeholder-cream/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
            />
            <button
              type="submit"
              className="bg-gold hover:bg-gold-light text-green-dark font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-cream/30 text-xs mt-6">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
