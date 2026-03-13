import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Light cream overlay */}
      <div className="absolute inset-0 bg-cream-light/85" />

      {/* Ambient background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-green-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px]" />

        {/* Decorative rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-green-primary/[0.04] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-green-primary/[0.06] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gold/[0.06] rounded-full" />

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-gold/15 m-8" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-gold/15 m-8" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Logo — large & prominent with text beside it */}
        <div className="animate-fade-in-up opacity-0 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-10">
          <Image
            src="/logo.png"
            alt="The Raffles English Studio"
            width={200}
            height={200}
            className="drop-shadow-lg w-[160px] h-[160px] sm:w-[200px] sm:h-[200px]"
            priority
          />
          <div className="text-left hidden sm:block">
            <p className="text-green-primary/50 text-sm tracking-[0.35em] uppercase font-light">The</p>
            <h2 className="font-serif text-green-primary text-5xl lg:text-6xl font-bold leading-[1] tracking-tight">
              Raffles
            </h2>
            <p className="text-green-primary/60 text-base tracking-[0.2em] uppercase font-light mt-1">
              English Studio
            </p>
          </div>
        </div>

        {/* Tagline */}
        <div className="animate-fade-in-up opacity-0 delay-100">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="premium-divider" />
            <p className="text-gold-dark tracking-[0.35em] uppercase text-xs font-medium">
              Singapore&apos;s Premier English Studio
            </p>
            <div className="premium-divider" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="animate-fade-in-up opacity-0 delay-200 font-serif text-green-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8 tracking-tight">
          Master the Art of
          <br />
          <span className="text-gold-gradient">English Excellence</span>
        </h1>

        <p className="animate-fade-in-up opacity-0 delay-300 text-text-dark/60 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Expert coaching for O Levels, A Levels & IELTS examinations.
          Personalised guidance to help you achieve distinction — every time.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up opacity-0 delay-400 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/6589677685"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-white font-semibold px-10 py-4 rounded-sm text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(196,169,98,0.3)]"
          >
            Book a Free Trial
          </a>
          <a
            href="#courses"
            className="inline-flex items-center justify-center border border-green-primary/20 hover:border-green-primary/40 text-green-primary px-10 py-4 rounded-sm text-base transition-all duration-300 hover:bg-green-primary/5"
          >
            Explore Courses
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Stats bar */}
        <div className="animate-fade-in-up opacity-0 delay-500 mt-20 flex items-center justify-center">
          <div className="bg-white/70 backdrop-blur-xl border border-cream-dark/30 rounded-sm px-2 py-4 sm:px-8 inline-flex items-center divide-x divide-cream-dark/20 shadow-sm">
            {[
              { value: "500+", label: "Students Coached" },
              { value: "95%", label: "Distinction Rate" },
              { value: "10+", label: "Years of Excellence" },
            ].map((stat) => (
              <div key={stat.label} className="px-5 sm:px-10 text-center">
                <p className="font-serif text-gold-dark text-2xl sm:text-3xl font-bold tracking-tight">
                  {stat.value}
                </p>
                <p className="text-text-dark/40 text-[10px] sm:text-xs tracking-wider uppercase mt-1.5 font-light">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-5 h-8 rounded-full border border-green-primary/20 flex items-start justify-center p-1.5">
          <div className="w-0.5 h-2 bg-green-primary/30 rounded-full animate-fade-in-up" style={{ animationDuration: '1.5s', animationIterationCount: 'infinite' }} />
        </div>
      </div>
    </section>
  );
}
