import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-green-primary overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-light/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-dark/30 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cream/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cream/5 rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <Image
            src="/logo.png"
            alt="The Raffles English Studio"
            width={160}
            height={160}
            className="mx-auto mb-8"
            priority
          />
        </div>

        <p className="animate-fade-in-up text-gold tracking-[0.3em] uppercase text-sm mb-4">
          Singapore&apos;s Premier English Studio
        </p>

        <h1 className="animate-fade-in-up animation-delay-200 font-serif text-cream text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
          Master the Art of
          <br />
          <span className="text-gold">English Excellence</span>
        </h1>

        <p className="animate-fade-in-up animation-delay-400 text-cream/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Expert coaching for O Levels, A Levels & IELTS. Personalised guidance
          to help you achieve distinction in every examination.
        </p>

        <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/6589677685"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-light text-green-dark font-semibold px-8 py-4 rounded text-lg transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
          >
            Book a Free Trial
          </a>
          <a
            href="#courses"
            className="border-2 border-cream/40 hover:border-cream text-cream px-8 py-4 rounded text-lg transition-all duration-200 hover:bg-cream/5"
          >
            Explore Courses
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "500+", label: "Students" },
            { value: "95%", label: "Pass Rate" },
            { value: "10+", label: "Years" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-gold text-2xl sm:text-3xl font-bold">
                {stat.value}
              </p>
              <p className="text-cream/60 text-xs tracking-wider uppercase mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <svg
          className="w-6 h-6 text-cream/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
