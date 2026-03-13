export default function Courses() {
  const courses = [
    {
      level: "O Level",
      subtitle: "English Language (1184)",
      description:
        "Comprehensive preparation for the GCE O Level English Language examination. Master every component with confidence.",
      topics: [
        "Situational & Continuous Writing",
        "Visual Text & Comprehension",
        "Summary Writing Techniques",
        "Editing & Grammar Mastery",
        "Oral Communication Skills",
        "Listening Comprehension",
      ],
      gradient: "from-green-primary via-green-light to-green-primary",
      accent: "green-light",
    },
    {
      level: "A Level",
      subtitle: "General Paper (8881)",
      description:
        "Rigorous preparation for the GCE A Level General Paper. Develop critical thinking and persuasive writing skills.",
      topics: [
        "Essay Writing & Argumentation",
        "Comprehension & Application",
        "Summary & Inference Skills",
        "Current Affairs Analysis",
        "Critical Thinking Framework",
        "Language Use & Vocabulary",
      ],
      gradient: "from-green-dark via-green-primary to-green-dark",
      accent: "green-primary",
    },
    {
      level: "IELTS",
      subtitle: "Academic & General Training",
      description:
        "Targeted coaching for all four IELTS modules. Achieve your target band score with our proven strategies.",
      topics: [
        "Task 1 & Task 2 Writing",
        "Reading Strategies & Speed",
        "Listening Practice & Tips",
        "Speaking Fluency & Confidence",
        "Vocabulary & Collocations",
        "Test-Day Strategies",
      ],
      gradient: "from-gold-dark via-gold to-gold-dark",
      accent: "gold",
    },
  ];

  return (
    <section id="courses" className="relative py-28 bg-green-darker overflow-hidden noise-overlay">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center max-w-3xl mx-auto mb-20">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">
            Our Programmes
          </p>
          <h2 className="font-serif text-cream text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Courses We Offer
          </h2>
          <div className="premium-divider mx-auto mb-6" />
          <p className="text-cream/40 text-base leading-relaxed font-light">
            Structured programmes designed to take you from where you are to
            where you want to be.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <div
              key={course.level}
              className="reveal group relative rounded-sm overflow-hidden"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-cream/[0.03] group-hover:bg-cream/[0.06] transition-colors duration-500" />
              <div className="absolute inset-0 border border-cream/[0.08] group-hover:border-gold/20 rounded-sm transition-colors duration-500" />

              {/* Top gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${course.gradient}`} />

              <div className="relative p-8">
                {/* Level badge */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-serif text-cream text-2xl font-bold tracking-tight">
                      {course.level}
                    </h3>
                    <p className="text-cream/40 text-sm mt-1 font-light">{course.subtitle}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-sm bg-${course.accent}/10 flex items-center justify-center`}>
                    <svg className={`w-5 h-5 text-${course.accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                </div>

                <p className="text-cream/50 text-sm leading-relaxed mb-8 font-light">
                  {course.description}
                </p>

                {/* Topics */}
                <ul className="space-y-3 mb-8">
                  {course.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-3 text-cream/60 text-sm group-hover:text-cream/70 transition-colors">
                      <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/6589677685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-transparent hover:bg-gold text-cream/70 hover:text-green-darker border border-cream/10 hover:border-gold font-medium py-3.5 rounded-sm transition-all duration-300 text-sm tracking-wide"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
