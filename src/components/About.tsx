export default function About() {
  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Expert Curriculum",
      desc: "Meticulously crafted syllabi aligned with Cambridge & IELTS standards, refined over a decade of teaching excellence.",
      num: "01",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Small Class Sizes",
      desc: "Maximum 8 students per class ensuring personalised attention and meaningful teacher-student interaction.",
      num: "02",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Proven Results",
      desc: "95% of our students achieve A1–B3 for O Levels and A–B for A Levels. IELTS students average Band 7.5+.",
      num: "03",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Holistic Approach",
      desc: "Beyond exam techniques — we nurture critical thinking, eloquent expression, and a lifelong love of English.",
      num: "04",
    },
  ];

  return (
    <section id="about" className="relative py-28 bg-cream-light overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-primary/[0.02] rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/[0.03] rounded-full blur-[60px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-20">
          <p className="text-gold tracking-[0.3em] uppercase text-sm font-medium mb-4">
            Why Choose Us
          </p>
          <h2 className="font-serif text-green-primary text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            The Raffles Difference
          </h2>
          <div className="premium-divider mx-auto mb-6" />
          <p className="text-text-dark/60 text-lg leading-relaxed font-light">
            Founded on the belief that every student deserves access to
            exceptional English education, The Raffles English Studio combines
            time-honoured teaching methods with modern pedagogical insights.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="reveal group relative bg-white rounded-sm p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-cream-dark/20 hover:border-gold/30 overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-4 font-serif text-6xl font-bold text-green-primary/[0.04] group-hover:text-gold/[0.08] transition-colors duration-500">
                {f.num}
              </span>

              {/* Gold top accent line */}
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-gold to-gold-light transition-all duration-500" />

              <div className="relative">
                <div className="w-12 h-12 rounded-sm bg-green-primary/5 group-hover:bg-gold/10 flex items-center justify-center text-green-primary group-hover:text-gold transition-all duration-500 mb-5">
                  {f.icon}
                </div>
                <h3 className="font-serif text-green-dark text-xl font-semibold mb-3 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-text-dark/50 text-base leading-relaxed font-light">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
