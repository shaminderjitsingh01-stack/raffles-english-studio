export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah L.",
      role: "O Level Student",
      result: "A2",
      text: "I went from a C5 to an A2 in just 6 months. The teachers really break down each component and make sure you understand the marking scheme inside out.",
    },
    {
      name: "Marcus T.",
      role: "A Level Student",
      result: "A",
      text: "GP was my weakest subject until I joined Raffles English Studio. Their essay frameworks and current affairs discussions transformed my writing completely.",
    },
    {
      name: "Priya R.",
      role: "IELTS Candidate",
      result: "8.0",
      text: "I needed IELTS 7.5 for my UK university application and scored 8.0 after just 2 months of intensive coaching. The speaking practice sessions were invaluable.",
    },
    {
      name: "Wei Jie K.",
      role: "O Level Student",
      result: "A1",
      text: "The small class size means the teacher actually reads every essay you write and gives detailed feedback. You can\u0027t get that at a big tuition centre.",
    },
    {
      name: "Aisha M.",
      role: "Parent",
      result: "B3",
      text: "My son was struggling with English and dreaded the subject. After joining, his confidence grew tremendously. The progress reports keep us informed every step.",
    },
    {
      name: "Daniel C.",
      role: "IELTS Candidate",
      result: "7.5",
      text: "The mock tests under timed conditions really helped me manage my time during the actual exam. Highly recommend for anyone serious about IELTS.",
    },
  ];

  return (
    <section id="testimonials" className="relative py-28 bg-cream overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-green-primary/[0.02] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center max-w-3xl mx-auto mb-20">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-green-primary text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            What Our Students Say
          </h2>
          <div className="premium-divider mx-auto mb-6" />
          <p className="text-text-dark/60 text-base leading-relaxed font-light">
            Real results from real students. Here&apos;s what our community has
            to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal group relative bg-white rounded-sm p-8 shadow-sm hover:shadow-lg transition-all duration-500 border border-cream-dark/15 hover:border-gold/20"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Quote mark */}
              <svg
                className="w-8 h-8 text-gold/20 group-hover:text-gold/40 transition-colors duration-500 mb-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391C0 7.905 3.748 4.039 9 3l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>

              <p className="text-text-dark/60 text-sm leading-relaxed mb-8 font-light">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center justify-between border-t border-cream-dark/10 pt-5">
                <div>
                  <p className="font-semibold text-green-dark text-sm">{t.name}</p>
                  <p className="text-text-dark/40 text-xs font-light">{t.role}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-text-dark/30 uppercase tracking-wider font-light">Grade</span>
                  <span className="bg-green-primary text-cream text-xs font-bold w-9 h-9 rounded-full flex items-center justify-center">
                    {t.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
