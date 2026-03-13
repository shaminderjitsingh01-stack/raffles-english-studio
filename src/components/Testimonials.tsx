export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah L.",
      role: "O Level Student",
      result: "A2 for English",
      text: "I went from a C5 to an A2 in just 6 months. The teachers really break down each component and make sure you understand the marking scheme inside out.",
    },
    {
      name: "Marcus T.",
      role: "A Level Student",
      result: "A for General Paper",
      text: "GP was my weakest subject until I joined Raffles English Studio. Their essay frameworks and current affairs discussions transformed my writing completely.",
    },
    {
      name: "Priya R.",
      role: "IELTS Candidate",
      result: "Band 8.0 Overall",
      text: "I needed IELTS 7.5 for my UK university application and scored 8.0 after just 2 months of intensive coaching. The speaking practice sessions were invaluable.",
    },
    {
      name: "Wei Jie K.",
      role: "O Level Student",
      result: "A1 for English",
      text: "The small class size means the teacher actually reads every essay you write and gives detailed feedback. You can't get that at a big tuition centre.",
    },
    {
      name: "Aisha M.",
      role: "Parent",
      result: "Child improved from C6 to B3",
      text: "My son was struggling with English and dreaded the subject. After joining, his confidence grew tremendously. The progress reports keep us informed every step of the way.",
    },
    {
      name: "Daniel C.",
      role: "IELTS Candidate",
      result: "Band 7.5 Overall",
      text: "The mock tests under timed conditions really helped me manage my time during the actual exam. Highly recommend for anyone serious about IELTS.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold tracking-[0.2em] uppercase text-sm mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-green-primary text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            What Our Students Say
          </h2>
          <p className="text-text-dark/70 text-lg leading-relaxed">
            Real results from real students. Here&apos;s what our community has to say
            about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-cream-dark/20"
            >
              {/* Quote mark */}
              <svg
                className="w-8 h-8 text-gold/40 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391C0 7.905 3.748 4.039 9 3l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>

              <p className="text-text-dark/70 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center justify-between border-t border-cream-dark/20 pt-4">
                <div>
                  <p className="font-semibold text-green-dark text-sm">
                    {t.name}
                  </p>
                  <p className="text-text-dark/50 text-xs">{t.role}</p>
                </div>
                <span className="bg-green-primary/10 text-green-primary text-xs font-semibold px-3 py-1 rounded-full">
                  {t.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
